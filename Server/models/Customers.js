const { default: mongoose } = require('mongoose');
const mogoose = require('mongoose');


const CustomerSchema = new mogoose.Schema({
    email:{
        type: String ,
        requied: true
    }, 
    password: {
        type: String ,
        requied: true
    },
    wishlist:{
        type: String
    }
});


const CustomerModel = mongoose.model( 'Customers' , CustomerSchema )
module.exports = CustomerModel