export const generateToken = async (user) => {
  return new Promise((resolve, reject) => {
    if (user) {
      jwt.sign({ user }, process.env.JWT_SECRET, (err, token) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            message: "JWT ERROR",
          });
        }
        resolve(token);
      });
    } else {
      reject({ message: constants.LOGIN_UNSUCCESSFUL });
    }
  });
};
