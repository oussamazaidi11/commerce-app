import React, { useState } from "react";
import registerbg from "../assets/registrebg.jpg?url";
import { Lock } from "lucide-react";
import { Eye, EyeOff } from "lucide-react";
import { useDispatch } from "react-redux";
import {
  login,
  setUser,
  getUser,
  deleteUser,
} from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [visible, setvisible] = useState(false);
  const [errors, seterrors] = useState({});
  const [email, setemail] = useState("");
  const [emailError, setemailError] = useState({ status: false, message: "" });
  const [passwordError, setpasswordError] = useState({
    status: false,
    message: "",
  });
  const [password, setpassword] = useState("");
  const handleChangeEmail = (e) => {
    let email = e.target.value;

    if (!/\S+@\S+\.\S+/.test(email)) {
      setemailError({ status: true, message: "Email is not valid" });
    } else {
      setemailError({ status: false, message: "" });
    }
    setemail(email);
  };
  const handleChangePassword = (e) => {
    let password = e.target.value;

    if (
      !/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)
    ) {
      setpasswordError({
        status: true,
        message: "unvalid",
      });
    } else {
      setpasswordError({ status: false, message: "" });
    }
    setpassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    dispatch(login(data))
      .then((res) => {
        let role = res.payload.user.role;

        dispatch(setUser(res.payload));
        if (role == "admin") {
          navigate("/admin");
        } else if (role === "user") {
          navigate("/client");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div
      style={{ backgroundImage: `url(${registerbg})` }}
      className="h-screen  flex justify-center items-center bg-cover bg-center"
    >
      <form className="bg-white/50 font-bold p-10 rounded space-y-2 w-[20rem]">
        <div className="flex justify-center items-center text-2xl">
          <Lock />
          <h2 className="uppercase font-serif">Connexion</h2>
        </div>

        <div>
          <label htmlFor="email" className="block">
            Email
          </label>

          <input
            onChange={handleChangeEmail}
            value={email}
            type="email"
            id="email"
            className="border border-black rounded w-full"
          />
          {emailError.status && (
            <span className="text-red-600 font-normal flex justify-end">
              {emailError.message}
            </span>
          )}
        </div>
        <div className="relative">
          <label htmlFor="name" className="block">
            Password
          </label>

          <input
            onChange={handleChangePassword}
            value={password}
            type={visible ? "text" : "password"}
            id="password"
            className="border border-black rounded w-full"
          />
          <div className="absolute top-7 right-4">
            {!visible && (
              <Eye
                size={18}
                className="cursor-pointer"
                onClick={() => setvisible(true)}
              />
            )}
            {visible && (
              <EyeOff
                size={18}
                className="cursor-pointer"
                onClick={() => setvisible(false)}
              />
            )}
          </div>
          {passwordError.status && (
            <span className="text-red-600 font-normal flex justify-end">
              {passwordError.message}
            </span>
          )}
        </div>
        <div className="flex justify-end">
          <button
            disabled={emailError.status || passwordError.status}
            onClick={handleLogin}
            className="bg-slate-500 border rounded p-2 disabled:bg-gray-500 "
          >
            se connecter
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
