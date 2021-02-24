'use strict'

const mongoose = require('mongoose');
const {Schema,model} = mongoose;

const indexSchema = new Schema({
    name : String,
    price : String,
    onSale : Boolean
});

const index = model('index', indexSchema)

const usersSchema = new Schema({
    Heroname : String,
    firstname : String,
    surname : String,
    abilities : String,
    age : Number,
    active : Boolean

});

const users = model('users', usersSchema)


mongoose.connect('mongodb://localhost:27017/users',{ useNewUrlParser: true, useUnifiedTopology: true},(err)=>{

if(err){console.error(err);}else{console.log('Connected')}
});
module.exports ={'index':index,'users':users};
