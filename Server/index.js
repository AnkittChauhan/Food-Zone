require('dotenv').config();

const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const ItemModel = require('./models/Items')
const Cart = require('./models/Cart');

const app = express()
app.use(cors())
const PORT = 8080;
const jwt = require('jsonwebtoken');
app.use(express.json())
const SecretKey = process.env.SecretKey;
const database = process.env.Database;



mongoose.connect(database)
    .then(() => {
        console.log("Connected to the database");
    })
    .catch((error) => {
        console.error("Error connecting to the database:", error);
    });



app.post('/addToCart', async (req, res) => {
    try {
        const { userId, item } = req.body;

        // Validate the request
        if (!userId || !item) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        // Find existing cart or create new one
        let cart = await Cart.findOne({ userId });

        if (cart) {
            // Check if item already exists
            const itemIndex = cart.items.findIndex(i =>
                i.foodItemId.toString() === item.foodItemId
            );

            if (itemIndex > -1) {
                // Update quantity
                cart.items[itemIndex].quantity += item.quantity;
            } else {
                // Add new item
                cart.items.push(item);
            }

            await cart.save();
        } else {
            // Create new cart
            cart = new Cart({
                userId,
                items: [item]
            });

            await cart.save();
        }

        res.status(200).json(cart);
    } catch (error) {
        console.error("Error adding to cart:", error);
        res.status(500).json({ message: "Server error" });
    }
});

//--------------------------------| For Food Menu |------------------------------------------------//


app.post("/createItem", async (req, res) => {
    try {
        const items = req.body;
        const newItems = new ItemModel(items);
        await newItems.save();
        res.json(items);
    } catch (err) {
        res.json(err);
    }
});

app.delete("/deleteItems/:id", async (req, res) => {
    const id = req.params.id;
    try {
        await ItemModel.findByIdAndDelete(id).exec();
        res.json({ message: "ItemRemoved" });
    } catch (err) {
        res.json(err);
    }
});

app.get("/getItems", async (req, res) => {
    try {
        const results = await ItemModel.find();
        res.json(results);
    } catch (err) {
        res.json(err);
    }
});












app.listen(PORT, () => {
    console.log("Hurreyy !! Server is running");
})


