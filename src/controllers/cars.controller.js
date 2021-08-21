import Car from "../models/cars.model.js";
import NotFoundData from "../errors/not-found-data.js";

/**
 * @Get all cars
 */
export const getAllCars = async (req, res) => {
  const cars = await Car.find();
  res.status(200).send(cars);
};

/**
 * @Get all cars
 */
export const getCarById = async (req, res) => {
  const car = await Car.findById(req.params.id);
  if (!car)
    throw new NotFoundData(
      `Data not found with the given ID : ${req.params.id}`
    );
  res.status(200).send(car);
};

/**
 * @Post new car
 */
export const createCar = async (req, res) => {
  res.status(200).send({ message: "POST new car ready to works !" });
};
