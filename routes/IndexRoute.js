import PabrikanRoute from "./PabrikanRoute.js";
import PurchaseOrderRoute from "./PurchaseOrderRoute.js";
import DeliveryorderRoute from "./DeliveryOrderRoute.js";
import PenerimaanUp3Route from "./PenerimaanUp3Route.js";
import UserRoute from "./UserRoute.js";
import { Router } from "express";
import config from "../config/config.js";
import auth from "../middleware/verifyToken.js";

const router = Router();

router.use(config.URL_API + "/pabrikan", auth, PabrikanRoute);
router.use(config.URL_API + "/deliveryorder", auth, DeliveryorderRoute);
router.use(config.URL_API + "/purchaseorder", auth, PurchaseOrderRoute);
router.use(config.URL_API + "/penerimaanup3", auth, PenerimaanUp3Route);
router.use(config.URL_API + "/user", UserRoute);

export default router;
