import { Router } from "express";
import IndexController from "../controller/IndexController.js";

const router = Router();

router.get(
  "/getalldeliveryorder",
  IndexController.DeliveryOrderController.getDeliveryOrderDetailByUser
);
router.get(
  "/getalldeliveryorderpackaging/:no_do",
  IndexController.DeliveryOrderController.getDeliveryOrderDetailByDo
);
router.get(
  "/getalldeliveryorderpackagingsn/:no_packaging",
  IndexController.DeliveryOrderController.getDeliveryOrderDetailBypackaging
);

export default router;
