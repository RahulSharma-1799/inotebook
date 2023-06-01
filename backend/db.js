const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://root:root@cluster0.o6evl2k.mongodb.net/inotebook";

const connectToMongo = async()=>{
    try {
        mongoose.connect(mongoURI);
        console.log("Connected to MongoDB Database");
    } catch (error) {
        console.log(error);
    }
}

module.exports=connectToMongo;