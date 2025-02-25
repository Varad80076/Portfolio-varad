const express = require('express');
const cors = require('cors');
const connectDB = require('./db/connection');
const contact = require('./models/Contact');
require('dotenv').config();
const MongoClient = require("mongodb").MongoClient;
const mailSender = require("./helper/mailer,js");

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors({
    origin: [
        process.env.FRONTEND_API_KEY
    ],
    methods: ['GET', 'POST'],
    allowedHeaders: 'Content-Type,Authorization',
    mode:'no-cors'
}));
app.options('*', cors());  // Enable preflight request handling for all routes


const MONGO_URL = process.env.MONGO_URL;
const client = new MongoClient(MONGO_URL);

app.get("/getUser", async (req, res) => {
    console.log("Server is Running");
    try {
    await client.connect();
    console.log('Connected successfully to server');
    

    const db = client.db("varad");
    const data = await db.collection('users').find({}).toArray();
    console.log('Data Fetch Successfully');

    client.close();
    res.send(data);
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: "Failed to save contact" });
    }
});
app.post("/contact", async (req, res) => {
    console.log("Server is Running");
    try {
        const { name, email, message } = req.body;
    console.log({ name, email, message });
    await client.connect();
    console.log('Connected successfully to server');

    await mailSender(name,email,message, "VERIFY");
    const db = client.db("varad");
    const data = await db.collection('users').insertOne({ name, email, message });
    console.log(data);
    console.log("data inserted in DB");
    client.close();
    return res.status(201).json({
        message: "Contact saved successfully",
        data
    })
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: "Failed to save contact" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
