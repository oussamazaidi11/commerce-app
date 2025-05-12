const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const path=require("path")
const app = express();
const morgan = require("morgan");
const fileUpload = require("express-fileupload");
connectDB();
app.use(fileUpload());
const corsOptions = { origins: [process.env.ALLOWED_ORIGIN] };
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/products", require("./routes/productRoutes"));

app.listen(PORT, () => console.log("Server Started on port " + PORT));
