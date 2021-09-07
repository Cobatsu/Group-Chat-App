/* eslint-disable prefer-destructuring */
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const path = require("path");
const express = require("express");
const {ApolloServer} = require("apollo-server-express");
const {createServer} = require("http");
const schema = require("./GraphqlSchemas/ChatGraphqlSchema/index");

// eslint-disable-next-line no-underscore-dangle
const _Url = process.env.DB_URL;
const PORT = process.env.PORT || 8000;

require("dotenv").config();

mongoose
 .connect(_Url, {useUnifiedTopology: true, useNewUrlParser: true})
 .then(() => console.log("connected to DB"))
 .catch(err => console.log(err));
const app = express();
const ChatRoom = require("./Models/ChatRoomModel");

const getTokenPayload = token => {
 const payload = jwt.verify(token, "secret");
 return payload;
};
const disConnectTheUser = async context => {
 const initialContext = await context.initPromise;
 const user = getTokenPayload(initialContext.token);
 const userID = mongoose.Types.ObjectId(user._id);
 await ChatRoom.findOneAndUpdate({members: userID}, {$pull: {members: userID}});
};
const connectTheUser = async context => {
 const user = getTokenPayload(context.token);
 const userID = mongoose.Types.ObjectId(user._id);
 await ChatRoom.findOneAndUpdate(
  {_id: context.roomID},
  {$push: {members: userID}}
 );
};
const apolloServer = new ApolloServer({
 schema,
 subscriptions: {
  path: "/subscriptions",
  onConnect: connectionParams => {
   connectTheUser(connectionParams);
   return connectionParams;
  },
  onDisconnect: async (_, context) => {
   disConnectTheUser(context);
  },
 },
 context: async ({req, connection}) => {
  if (connection) {
   var {token} = connection.context;
  } else {
   var token = req.headers.authorization.split(" ")[1];
  }

  try {
   const user = getTokenPayload(token);
   return {user};
  } catch {
   return {user: null};
  }
 },
});
if (process.env.NODE_ENV === "production" || false) {
 app.use(express.static(path.join(__dirname, "client/build")));
 app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
 });
}

const server = createServer(app);
apolloServer.applyMiddleware({app});
apolloServer.installSubscriptionHandlers(server);

server.listen(PORT, () => {
 console.log("🚀 Server IS ready");
});
