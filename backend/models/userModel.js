const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please insert your name"],
    },
    email: {
      type: String,
      required: [true, "please insert your email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "please insert your password"],
    },
    role: {
      type: String,
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
