dotenv.config();
import dotenv from "dotenv";

export const MONGO_URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@flipkart.r44f1gh.mongodb.net/?retryWrites=true&w=majority`;
