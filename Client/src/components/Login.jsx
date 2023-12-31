import React , {useState} from "react";
import { useForm } from "react-hook-form";
import userApi from "../services/userApi.js";
import { useNavigate,Link } from "react-router-dom";
import { login } from "../Store/userSlice.js";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [error, setError] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    userApi.login("login", data).then((response) => {
      if (response.status === "ok") {
        console.log(response.user)
        dispatch(login({userData: response.user}));
        navigate("/");
      } else {
        setError(response.message);
      }
    });
  };

  return (
    <div className="flex items-center justify-center h-screen" >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-teal-400 shadow-md rounded px-8 pt-6 pb-8 sm:mb-4 sm:w-2/6 h-96 sm:h-2/4"
      >
        {error && <p className="text-red-500 text-xs italic">{error}</p>}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            {...register("email", { required: "Email is required" })}
            id="email"
            type="email"
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
            autoComplete="on"
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
            Sign In
          </button>
        </div>
        <h1 className="text-center mt-1 text-slate-500 hover:text-black">
          I have no Account <Link className="text-blue-700"  to="/signup">
            Signup
          </Link>
        </h1>
      </form>
    </div>
  );
};

export default Login;
