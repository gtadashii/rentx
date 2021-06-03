import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";

const speficationRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

speficationRoutes.use(ensureAuthenticated);
speficationRoutes.post("/", createSpecificationController.handle);

export { speficationRoutes };
