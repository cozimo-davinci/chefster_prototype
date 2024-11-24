const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const LocalStartegy = require("passport-local").Strategy
const bcrypt = require('bcrypt');
require("dotenv").config();
const app = express();
const port = process.env.PORT || 8100;
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());

const jwtSecret = process.env.JWT_SECRET;

const jwt = require("jsonwebtoken");


const upload = require("./middlewares/multerConfig");

mongoose.connect(
    "mongodb+srv://salazar-davinci:excalibur2018@cluster0.kdxgw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log("Error connecting to MongoDB", err);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

const User = require("./models/user");
const Message = require("./models/message");

//User registration 
app.post("/register", upload.single("image"), async (req, res) => {
    const { name, email, password } = req.body;
    const image = req.file;

    if (!name || !email || !password) {
        return res.status(400).json({ message: "Please enter all fields" });
    }

    try {
        // Normalize email to lowercase
        const normalizedEmail = email.toLowerCase();

        // Check if the user already exists
        const existingUser = await User.findOne({ email: normalizedEmail });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new User
        const newUser = new User({
            name,
            email: normalizedEmail,
            password: hashedPassword,
            image: image ? {
                data: image.buffer,
                contentType: image.mimetype
            } : undefined,
        });

        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
        console.error("Error registering user:", err);
        res.status(500).json({ message: "Error registering user" });
    }
});


// Getting Image for profile
app.get("/user/:id/image", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user || !user.image) {
            return res.status(404).json({ message: "User or image not found" });
        }
        res.set("Content-Type", user.image.contentType);
        res.send(user.image.data);
    } catch (err) {
        console.error("Error getting image:", err);
        res.status(500).json({ message: "Error getting image" });
    }
}
);


// User login
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Please enter all fields" });
    }
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User does not exist" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ id: user._id }, "secret");
        res.status(200).json({ message: "Login successfull", token, userID: user._id });
    } catch (err) {
        console.error("Error logging in user:", err);
        res.status(500).json({ message: "Error logging in user" });
    }
}
);