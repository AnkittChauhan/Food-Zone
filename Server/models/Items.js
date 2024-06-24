const { default: mongoose } = require('mongoose');
const mogoose = require('mongoose');


const ItemSchema = new mogoose.Schema({
   name:{
        type: String,
        requied: true
   },
   url:{
        type: String,
        requied: true
   },
   price:{
        type: Number,
        requied: true
   }
});


const ItemModel = mongoose.model( 'Items' , ItemSchema )
module.exports = ItemModel