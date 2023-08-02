import mongoose from "mongoose";
import User from "./database/User";
const DBURL = "mongodb://localhost:27017/luganodes";

mongoose
  .connect(DBURL)
  .then(() => {
    console.log("db connected successfully");
  })
  .catch((e) => {
    console.log("error connecting db");
  });

const addNewUser = async function () {
  const newUser = new User({
    password: "user1234",
    email: "ppratham0811@gmail.com",
  });
  await newUser.save();
};

addNewUser().then(() => {
  mongoose.connection.close();
});
