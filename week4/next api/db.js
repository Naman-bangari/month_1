const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://namanbangari:nam945@cluster0.mwkejsr.mongodb.net/mydatabase';
const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Conn to Mongo");
        const db = mongoose.connection.db;
        const collection = db.collection("items");
        const data = await collection.find({}).toArray();
        console.log(data); 
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};
module.exports = mongoDB;
