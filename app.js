const mongoose = require('mongoose');
const schema = require('./GraphqlSchemas/ChatGraphqlSchema/index')
const jwt = require('jsonwebtoken');
const path = require('path');
const express = require('express');
const { ApolloServer} = require('apollo-server-express');
const {createServer} = require('http')
const { execute, subscribe }=require('graphql');
const _Url = process.env.DB_URL
const PORT = process.env.PORT || 8000;

require('dotenv').config();
mongoose.connect(_Url,{ useUnifiedTopology: true,useNewUrlParser: true })
.then(()=>console.log('connected to DB'))
.catch((err)=>console.log(err));



const app = express();

const apolloServer = new ApolloServer( { schema , 
    subscriptions: {
            path: "/subscriptions",
    },
    context:async ( { req , connection } )=>{
    if(connection) {
        var token = connection.context.token
    } else { var token = req.headers['authorization'].split(' ')[1]; }
    try {
        const user = await jwt.verify(token,'secret'); 
        return { 
            user 
        }
    } catch {
        return { user:null }
    }
}} );

if(process.env.NODE_ENV === 'production' || false) {
    app.use(express.static(path.join(__dirname, 'my-app/build')));
    app.get('*', function(_, res) {
        res.sendFile(path.join(__dirname, 'my-app','build','index.html'));
    })
}

const server = createServer(app);
apolloServer.applyMiddleware({ app });
apolloServer.installSubscriptionHandlers(server);

server.listen(PORT, () => { console.log( '🚀 Server IS ready')})

