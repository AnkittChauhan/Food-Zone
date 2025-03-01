// Cart model (mongoose schema)
const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
  userId: {
    type: String, // Clerk user IDs are strings
    required: true
  },
  items: [{
    foodItemId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'FoodItem',
      required: true
    },
    name: String,
    price: Number,
    quantity: {
      type: Number,
      required: true,
      min: 1
    },
    imageUrl: String
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Cart = mongoose.model('Cart', CartSchema);
module.exports = Cart;