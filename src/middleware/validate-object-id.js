import mongose from "mongoose";
import BadObjectId from "../errors/bad-object-id.js";

export default validateObjectId = (req, res, next) => {
  const id = req.params.id;
  if (!mongose.isValidObjectId(id))
    throw new BadObjectId(`Bad id provided : ${id}`);

  next();
};
