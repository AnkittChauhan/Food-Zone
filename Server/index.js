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


    app.post( '/Login' ,async( req , res ) => {
        
        
        try {

            const {email , password } = req.body;
            if(!email){
                return res.json("Provide a User first");
         }
         else {
                const isUser = await CustomerModel.findOne({email , password}) 
                if(!isUser){
                  res.status(401).json({message:"User Not Found"})
                } 
                else{
                    const Token = jwt.sign(email, process.env.SecretKey)
                    res.json({ message:"Login Successful" , Token })
                }
         }   
 
        } catch (error) {
            res.json(error)
        }
        

        
    })

    app.post( '/CreateUser' ,async( req , res ) => {

        const user = req.body;
        const email = req.body.email;
        const isUser = await CustomerModel.findOne(user);

        if(isUser){
            res.json({message: "User Already exist , Can't be Created"});
        } else{
                try {
                    
                    const newUser = new CustomerModel(user);
                    await newUser.save();
                    const token = jwt.sign( email , process.env.SecretKey );
                    console.log(token);
                    res.json({message:"User Created Successfully"},"Token" , token)


                } catch (error) {
                    res.status(404).json(error)
                }
        }

    })






app.listen( PORT , () => {
    console.log("Hurreyy !! Server is running");
})


