const mongoose = require('mongoose');


const ChatRoom = new mongoose.Schema({

    title:{
        type:String,
        required:true
    },

    limit:{
        type:Number,
        required:true
    },

    host:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },

    messages:[

        {
            text:String,
            owner:mongoose.Schema.Types.ObjectId,
            date:Date,
            repliedMessage:mongoose.Schema.Types.ObjectId
        }

    ],

    members:{
        type:Array,
        required:true
    }

})

module.exports = mongoose.model( 'ChatRoom', ChatRoom );