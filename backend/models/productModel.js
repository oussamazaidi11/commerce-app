const mongoose = require("mongoose");
const productSchema = mongoose.Schema(
  {
    designation: {
      type: String,
      required: [true, "please insert field "],
    },
    prix: {
      type: String,
      required: [true, "please insert field prix"],
      unique: true,
    },
    description: {
      type: String,
      required: [true, "please insert field description"],
    },
    fileUrl:{
      type:String,
    }
    
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
