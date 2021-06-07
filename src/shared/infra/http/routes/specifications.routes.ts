import { Router } from "express";

import { CreateSpecificationController } from "@modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";

const speficationRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

speficationRoutes.use(ensureAuthenticated);
speficationRoutes.post("/", createSpecificationController.handle);

export { speficationRoutes };
