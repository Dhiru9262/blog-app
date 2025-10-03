const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const authRoutes = require("./routes/auth.js");

const app = express();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/tasks", require("./routes/tasks"));

app.listen(process.env.PORT, () =>
  console.log(`Server running on ${process.env.PORT}`)
);

mongoose.connect(process.env.MONGO_URI).then(() => console.log("DB connected"));
