import express from 'express';

const router = express.Router();

import { router as routerFromStudentNames } from "./StudentNames/routes.js";
import { router as routerFromWsChat } from "./WsChat/routes.js";

router.use("/StudentNames", routerFromStudentNames);
router.use("/WsChat", routerFromWsChat);

export { router };