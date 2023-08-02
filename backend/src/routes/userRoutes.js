import { Router } from "express";
import catchAsync from "../utils/catchAsync";
import {
  handleUserLogin,
  addUserAlerts,
  addUserSubscription,
} from "../controllers/UserController";

const userRouter = Router();
userRouter.post("/login", catchAsync(handleUserLogin));

userRouter.post("/set-alert", catchAsync(addUserAlerts));

userRouter.post("/subscribe", catchAsync(addUserSubscription));

export default userRouter;
