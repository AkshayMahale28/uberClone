const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      trim: true,
      minlength: [4, "First name must be at least 4 characters long"],
    },
    lastname: {
      type: String,
      trim: true,
      minlength: [4, "Last name must be at least 4 characters long"],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "Password must be at least 6 characters long"],
    select: false, // Exclude password from queries by default
  },
  socketId: {
    type: String,
  },
});

userSchema.methods.generateAuthToken = async function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET,{expiresIn:"24h"});
  return token;
};

userSchema.methods.comparePassword = async function (password) {
  // Compare the provided password with the hashed password in the database
  return await bcrypt.compare(password, this.password);
};

userSchema.statics.hashPassword = async function (password) {
  // Hash the password before saving it to the database
  return await bcrypt.hash(password, 10); // 10 is the salt rounds
};

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
