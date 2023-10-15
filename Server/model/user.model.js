import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    mini: [5, "Please enter longer name"],
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: [true, "User already exists"],
  },
  password: {
    type: String,
    required: true,
  },
  todo_id: {
    type: String,
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  let newPassword = await bcrypt.hash(this.password, 12);
  this.password = newPassword;
});

userSchema.methods = {
  compairePassword: async function (plainPassword) {
    return await bcrypt.compare(plainPassword, this.password);
  },
  createJWT: function () {
    const jwtToken = jwt.sign(
      { email: this.email, todo_id: this.todo_id },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "7d",
      }
    );
    return jwtToken;
  },
};

const userModel = new model("User", userSchema);

export default userModel;
