import jwt from "jsonwebtoken";

const isLogin = (req, res, next) => {
  const { user_token } = req.cookies;
  
  try {
    const decoded = jwt.verify(user_token, process.env.JWT_SECRET_KEY)
      req.user = decoded;
      next();
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};


export {isLogin};