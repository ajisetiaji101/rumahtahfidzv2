import UserRoute from "./UserRoute.js";
import UserSantriRoute from "./UserSantriRoute";
import SantriRoute from "./SantriRoute.js";
import GuruRoute from "./GuruRoute.js";
import IqroRoute from "./IqroSantriRoute.js";
import SurahPendekSantriRoute from "./SurahPendekSantriRoute";
import AlquranSantriRoute from "./AlquranSantriRoute";
import IqroGuruRoute from "./IqroGuruRoute";
import SurahPendekGuruRoute from "./SurahPendekGuruRoute";
import AlquranGuruRoute from "./AlquranGuruRoute";
import MasterPondokRoute from "./MasterPondokRoute";
import PondokRoute from "./PondokRoute";
import RoleRoute from "./RoleRoute";
import ImageRoute from "./ImageRoute";
import LaporanRoute from "./LaporanRoute.js";
import { Router } from "express";
import config from "../config/config.js";
import auth from "../middleware/verifyToken.js";

const router = Router();

// router.use(config.URL_API + "/pabrikan", auth, PabrikanRoute);
// router.use(config.URL_API + "/deliveryorder", auth, DeliveryorderRoute);
// router.use(config.URL_API + "/purchaseorder", auth, PurchaseOrderRoute);
// router.use(config.URL_API + "/penerimaanup3", auth, PenerimaanUp3Route);
router.use(config.URL_API + "/laporan", LaporanRoute);
router.use(config.URL_API + "/role", RoleRoute);
router.use(config.URL_API + "/pondok", PondokRoute);
router.use(config.URL_API + "/masterpondok", MasterPondokRoute);
router.use(config.URL_API + "/alquransantri", AlquranSantriRoute);
router.use(config.URL_API + "/surahpendeksantri", SurahPendekSantriRoute);
router.use(config.URL_API + "/iqrosantri", IqroRoute);
router.use(config.URL_API + "/iqroguru", IqroGuruRoute);
router.use(config.URL_API + "/surahpendekguru", SurahPendekGuruRoute);
router.use(config.URL_API + "/alquranguru", AlquranGuruRoute);
router.use(config.URL_API + "/guru", GuruRoute);
router.use(config.URL_API + "/santri", SantriRoute);
router.use(config.URL_API + "/user", UserRoute);
router.use(config.URL_API + "/usersantri", UserSantriRoute);

router.use(config.URL_API + "/gambar", ImageRoute);

export default router;
