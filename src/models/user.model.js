import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  car: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Car",
    },
  ],
});

const User = mongoose.model("User", userSchema);

export default User;
