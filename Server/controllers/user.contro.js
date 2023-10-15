import userModel from "../model/user.model.js";

const cookieOptions = {
  secure:true,
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  httpOnly: true,
};

const getUser = async (req, res) => {
  const { email } = req.user;
  try {
    const user = await userModel.findOne({ email: email });
    if (user) {
      res.status(200).json({ user, status: "ok" });
    } else {
      res.status(400).json({ message: "Invalid user" });
    }
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

const userSignup = async (req, res) => {
  const { name, email, password, todo_id } = req.body;
   try {
    //const userExist=await userModel.find({email:email});
    //if(userExist){
    //res.status(400).json({message:"User already exists"})
    //}
    const user = await userModel.create({ ...req.body });
    if (user) {
      res.status(200).json({ message: "signup sucessfully" });
    }
  } catch (e) {
    res.json({ message: e.message });
  }
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email: email });
    if (user) {
      const isPasswordRight = await user.compairePassword(password);
      if (isPasswordRight) {
        const token = await user.createJWT();
        res.cookie("user_token", token, cookieOptions);

        user.password=null;
        user._id=null;
        
        res.status(200).json({ status: "ok", user });
      } else {
        res.status(400).json({ message: "Invalid User" });
      }
    }
  } catch (e) {
    res.status(400).json({ message: "technical error" });
  }
};

export { getUser, userSignup, userLogin };
