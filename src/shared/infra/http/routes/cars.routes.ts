import { Router } from "express";

import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";

const carsRoutes = Router();

const createCarControler = new CreateCarController();

carsRoutes.post("/", createCarControler.handle);

export { carsRoutes };
