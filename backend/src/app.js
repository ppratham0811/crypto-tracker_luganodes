import dotenv from "dotenv";
dotenv.config();
import express, { urlencoded } from "express";
const app = express();
const port = process.env.PORT || 3001;
const DBURL = "mongodb://localhost:27017/luganodes";
import userRouter from "./routes/userRoutes";
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

mongoose.set("strictQuery", true);
mongoose
  .connect(DBURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("db connected successfully");
  })
  .catch((e) => {
    console.log("db connectin error", e);
  });

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use(urlencoded({ extended: true }));

app.use("/luganodes", userRouter);

app.listen(port, () => {
  console.log("app listening on port", port);
});
