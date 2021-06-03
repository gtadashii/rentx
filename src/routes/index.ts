import { Router } from "express";

import { categoriesRoutes } from "./categories.routes";
import { speficationRoutes } from "./specifications.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specifications", speficationRoutes);
router.use("/users", usersRoutes);

export { router };
