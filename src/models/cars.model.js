import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  label: {
    type: String,
    requird: true,
  },
  country: {
    type: String,
    requird: true,
  },
  price: {
    type: Number,
    requird: true,
  },
  year: {
    type: String,
    requird: true,
    maxLength: 4,
    minLength: 4,
    default: `${new Date().getFullYear()}`,
  },
});

const Car = mongoose.model("Car", carSchema);

export default Car;
