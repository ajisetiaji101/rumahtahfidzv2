import { Router } from "express";
import IndexController from "../controller/IndexController.js";

const router = Router();

router.get(
  "/puchaseorderall",
  IndexController.PurchaseOrderController.getPurchaseOrder
);
router.get(
  "/puchaseorderdetail/:nomor_po",
  IndexController.PurchaseOrderController.getPurchaseOrderDetail
);

export default router;
