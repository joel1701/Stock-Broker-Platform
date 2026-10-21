const {Schema} = require('mongoose');

const OrdesSchema = new Schema({
    name : String,
    qty : Number,
    price : Number,
    mode: String,
})

module.exports = {OrdesSchema};