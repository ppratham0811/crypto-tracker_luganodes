import User from "../database/User";
import { generateToken } from "../middlewares";

const addUserSubscription = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const createUser = new User({
      password,
      email,
    });
    await createUser.save();
    return {
      status: true,
      user: createUser,
    };
  } catch (e) {
    console.error(e);
  }
};

const addUserAlerts = async (req, res, next) => {
  try {
    const { price } = req.body;
    const user = req.user;

    if (!user) {
      return {
        status: false,
        message: "User not logged in",
      };
    }

    const findUser = await User.findByIdAndUpdate(
      user.$id,
      { $push: { alerts: price } },
      { new: true }
    );

    return {
      user: findUser,
      status: true,
    };
  } catch (e) {
    console.error(e);
  }
};

const handleUserLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.find({ email });

  if (user) {
    await generateToken(existUser)
      .then((token) => {
        // console.log(existUser);
        return res.status(200).json({
          success: true,
          message: "Logged In",
          user: existUser,
          token,
        });
      })
      .catch((e) =>
        res.status(500).json({
          success: false,
          message: e.message,
        })
      );
  } else {
    return {
      status: false,
      message: "User doesn't exist",
    };
  }
};

export { addUserSubscription, addUserAlerts, handleUserLogin };
