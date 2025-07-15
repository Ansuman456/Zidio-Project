import express from "express"
import { loginController, signupController } from "../controllers/AuthController.js"
import { JWTAuthMiddleware } from "../middlewares/AuthMiddleware.js"
import { dashboardController } from "../controllers/dashboardControllers.js"
const router = express.Router()

router.post('/login',loginController);
router.post('/signup', signupController);
router.get('/dashboard', JWTAuthMiddleware, dashboardController)

export default router;