const mongoose = require("mongoose");
require("dotenv").config();

const connection = async () => {
    try {
        const response = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true, 
        });
        if (response) {
            console.log("Connected DB");
        }
    } catch (error) {
        console.log("Error connecting to DB:", error);
    }
};

connection();


