import jwt from "jsonwebtoken";

const isLogin = (req, res, next) => {
  const { user_token } = req.cookies;
  
  try {
    if(!user_token) res.status(400).json({message:"invalid token"})
    
    const decoded = jwt.verify(user_token, process.env.JWT_SECRET_KEY);
    if (!decoded) {
      res.status(400).json({ message: "Invalid token" });
    } else {
      req.user = decoded;
      next();
    }
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};


export {isLogin};