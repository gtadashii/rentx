import { Router } from "express";

import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";

import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const carsRoutes = Router();

const createCarControler = new CreateCarController();

carsRoutes.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createCarControler.handle
);

export { carsRoutes };
