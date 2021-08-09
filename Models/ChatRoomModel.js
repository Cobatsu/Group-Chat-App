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
            repliedMessage:mongoose.Schema.Types.ObjectId,
            isEdited:{
                type:Boolean,
                default:false
            }
        }

    ],
    members:[mongoose.Schema.Types.ObjectId]
})

module.exports = mongoose.model( 'ChatRoom', ChatRoom );