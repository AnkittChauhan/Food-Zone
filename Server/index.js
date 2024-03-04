const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const CustomerModel = require('./models/Customers')
const ItemModel = require('./models/Items')

const app = express()
const PORT = 8080;


app.get('/home' , ( req , res ) => {


})


mongoose.connect("mongodb://localhost:27017")
    .then(() => {
        console.log("Connected to the database");
    })
    .catch((error) => {
        console.error("Error connecting to the database:", error);
    });



    app.post("/addItem", async (req, res) => {
        try {
            const Item = req.body;
            const newItem = new ItemModel(Item);
            await newItem.save();
    
        } catch (err) {
            res.json(err);
        }
    });



    app.post("/createUser", async (req, res) => {
        try {
            const Customer = req.body;
            const newCustomer = new CustomerModel(Customer);
            await newCustomer.save();

            const token = jwt.sign({ id: req.body.email }, SecretKey );
            res.json({ token });

        } catch (err) {
            res.json(err);
        }
    });
    

    app.get("/getCustomer", async (req, res) => {
        try {
            const results = await CustomerModel.find();
            res.json(results);
        } catch (err) {
            res.json(err);
        }
    });






app.listen( PORT , () => {
    console.log("Hurreyy !! Server is running");
})


