require('dotenv').config();

const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const CustomerModel = require('./models/Customers')
const ItemModel = require('./models/Items')

const app = express()
app.use(cors())
const PORT = 8080;
const jwt = require('jsonwebtoken');
app.use(express.json())
const SecretKey = process.env.SecretKey;



mongoose.connect("mongodb://localhost:27017")
    .then(() => {
        console.log("Connected to the database");
    })
    .catch((error) => {
        console.error("Error connecting to the database:", error);
    });



    // app.post("/addItem", async (req, res) => {
    //     try {
    //         const Item = req.body;
    //         const newItem = new ItemModel(Item);
    //         await newItem.save();
    
    //     } catch (err) {
    //         res.json(err);
    //     }
    // });



    // app.post('/createUser', async (req, res) => {
    //     try {
    //         const Customer = req.body;
    //         const newCustomer = new CustomerModel(Customer);
    //         await newCustomer.save();
    //         console.log(newCustomer);

    //         const token = jwt.sign({ id: req.body.email }, SecretKey );
    //         res.json({ token });

    //     } catch (err) {
    //         res.json(err);
    //     }
    // });
    

    // app.get("/getUser", async (req, res) => {
    //     try {
    //         const results = await CustomerModel.find();
    //         res.json(results);
    //     } catch (err) {
    //         res.json(err);
    //     }
    // });


    app.post( '/Login' , ( req , res ) => {
        
        
        try {

            const email = req.body.email;
                console.log(email);
            if(!email){
                return res.json("Provide a User first");
         }
         else {
                const user = { email : email }
                console.log("1");
                const Token = jwt.sign(user, process.env.SecretKey)
                res.json({ message:"Login Successful" , Token })
                console.log("2");
         }   
 
        } catch (error) {
            res.json(error)
        }
        

        
    })





app.listen( PORT , () => {
    console.log("Hurreyy !! Server is running");
})


