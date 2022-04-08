const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    fullname: {
        type: String,
        trim: true,
      },
    userName: {
    type: String,
    trim: true,
    required: "user Name is Required",
  },
  password: {
    type: String,
    trim: true,
    required: "password is Required",
  }

  
});
const User = mongoose.model("User", UserSchema);

module.exports = User;
