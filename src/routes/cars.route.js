import express from "express";
import {
  getAllCars,
  getCarById,
  createCar,
} from "../controllers/cars.controller.js";
import { body, check, oneOf } from "express-validator";
import validateRequest from "../middleware/validate-request.js";

const router = express.Router();

const bodyValidation = [
  body("label")
    .not()
    .isEmpty()
    .withMessage("Label is required")
    .isLength({ min: 3, max: 20 })
    .withMessage("Between 3 and 20 characters"),
  body("country")
    .not()
    .isEmpty()
    .withMessage("country is missing, must be provided")
    .isIn(["France", "USA", "Japan", "Italy", "Spain", "Germany", "China"])
    .withMessage("Country must be a country from the list"),
  body("price")
    .not()
    .isEmpty()
    .withMessage("Price is required")
    .isNumeric()
    .withMessage("Must be numeric")
    .isFloat({ min: 0 })
    .withMessage("Must be positive"),
  body("year").isLength(4).withMessage("Year has to be 4 charachters"),
];

router.get("/", getAllCars);
router.get("/:id", getCarById);
router.post("/", bodyValidation, validateRequest, createCar);

export { router as carsRouter };
