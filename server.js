const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Load environment variables from secure.env
require("dotenv").config({ path: "secure.env" });

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public")); // serve your frontend files (index.html, thankyou.html, etc.)

// MongoDB Connection
const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
  console.error("❌ MONGO_URI not found in secure.env file!");
  process.exit(1);
}

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected..."))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Schema & Model
const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now },
});

const Message = mongoose.model("Message", messageSchema);

// Routes
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    console.log("📩 New message saved:", newMessage);

    // Redirect to thankyou.html after saving
    res.redirect("/thankyou.html");
  } catch (err) {
    console.error("❌ Error saving message:", err);
    res.status(500).json({ error: "Server error. Please try again later." });
  }
});

// Root Route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
