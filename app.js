const mongoose = require('mongoose');
const schema = require('./GraphqlSchemas/ChatGraphqlSchema/index')
const jwt = require('jsonwebtoken');
const path = require('path');
const express = require('express');
const { ApolloServer} = require('apollo-server-express');
require('dotenv').config();
const _Url = process.env.DB_URL
const PORT = process.env.PORT || 8000;

mongoose.connect(_Url,{ useUnifiedTopology: true,useNewUrlParser: true })
.then(()=>console.log('connected to DB'))
.catch((err)=>console.log(err));

async function startApolloServer() {
    const server = new ApolloServer( { schema , 
        subscriptions: {
                path: PORT + '/subscriptions',
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
    await server.start();
    const app = express();

    if(process.env.NODE_ENV === 'production' || false) {
        app.use(express.static(path.join(__dirname, 'my-app/build')));
        app.get('*', function(_, res) {
            res.sendFile(path.join(__dirname, 'my-app','build','index.html'));
        })
    }

    server.applyMiddleware({ app });
    await new Promise(resolve => app.listen({ port: PORT }, resolve));
    return { server, app };
  }

  startApolloServer();
