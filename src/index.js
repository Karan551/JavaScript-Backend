import dotenv from "dotenv";
import connectDB from "./db/dbConnection.js";


dotenv.config({
    path: '../.env'
});



connectDB()
































/* 
(async () => {
    try {
        mongoose.connect(`${process.env}`)

    } catch (error) {
        console.log("Error During DB Connection", error);

        throw error;
    }
})(); */

/*
 console.log(process.env)
console.log(process.env.MONGODB_URI)

*/