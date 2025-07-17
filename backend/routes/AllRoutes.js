import express from "express"
import { loginController, signupController } from "../controllers/AuthController.js"
import { JWTAuthMiddleware } from "../middlewares/AuthMiddleware.js"
import { dashboardController } from "../controllers/dashboardControllers.js"
import savecharts from "../controllers/ChartSaveController.js"
const router = express.Router()

router.post('/login',loginController);
router.post('/signup', signupController);
router.get('/dashboard', JWTAuthMiddleware, dashboardController)
router.post('/savecharts',JWTAuthMiddleware,savecharts);

export default router;