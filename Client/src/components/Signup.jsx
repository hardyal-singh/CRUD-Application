import React, { useState } from "react";
import { useForm } from "react-hook-form";
import userApi from "../services/userApi.js";
import { Link, useNavigate } from "react-router-dom";
import {v4} from "uuid"

const Signup = () => {
  const [loader, setLoader] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const id = v4();

  const onSubmit = (data) => {
    // Handle signup logic here

    data.todo_id =id;
    try {
      userApi.signup("signup", data).then((response) => {
        if (response) {
            window.alert(response.message);
            if(!(response.message).includes("duplicate")){
              navigate("/");
            }
          }
      });
    } catch (e) {
      console.log({ message: e.message });
    }
  };

  if (loader) return <h1>Loading</h1>;

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-teal-400 shadow-md rounded px-8 pt-6 pb-8 sm:mb-4 sm:w-2/6 h-96 sm:h-2/3"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Username
          </label>
          <input
            {...register("name", { required: "Username is required" })}
            id="name"
            type="text"

            placeholder="Enter your username"
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.name ? "border-red-500" : ""
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-xs italic">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address",
              },
            })}
            id="email"
            type="text"
            name="email"
            placeholder="Enter your email"
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.email ? "border-red-500" : ""
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            {...register("password", { required: "Password is required" })}
            id="password"
            type="password"
            name="password"
            placeholder="Enter your password"
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.password ? "border-red-500" : ""
            }`}
          />
          {errors.password && (
            <p className="text-red-500 text-xs italic">
              {errors.password.message}
            </p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full sm:w-24"
            type="submit"
          >
            Sign Up
          </button>
        </div>
        <h1 className="text-center mt-1 text-slate-500 hover:text-black">
          I have already an Account <Link className="text-blue-700"  to="/login">
            Login
          </Link>
        </h1>
      </form>
    </div>
  );
};

export default Signup;
