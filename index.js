// Importing required modules
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Use async/await for connecting to MongoDB
const connectDB = async () => {
    try {
        // Updated MongoDB connection string without deprecated options
        await mongoose.connect("mongodb://127.0.0.1:27017/myLoginRegisterDB");
        console.log("DB connected");
    } catch (error) {
        console.error("Error connecting to DB:", error);
        process.exit(1); // Exit the process if the database connection fails
    }
};

connectDB();

// Define User Schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

// Create User Model
const User = mongoose.model("User", userSchema);

// Routes
// Login Route
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user) {
            if (password === user.password) {
                res.status(200).send({ message: "Login Successful", user });
            } else {
                res.status(401).send({ message: "Password didn't match" });
            }
        } else {
            res.status(404).send({ message: "User not registered" });
        }
    } catch (err) {
        res.status(500).send({ message: "Server error", error: err });
    }
});

// Register Route
app.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            res.status(409).send({ message: "User already registered" });
        } else {
            const user = new User({ name, email, password });
            await user.save();
            res.status(201).send({ message: "Successfully Registered, Please login now." });
        }
    } catch (err) {
        res.status(500).send({ message: "Server error", error: err });
    }
});

// Start Server
const PORT = 9002;
app.listen(PORT, () => {
    console.log(`BE started at port ${PORT}`);
});
