import React, { useState } from "react";
import registerbg from "../assets/registrebg.jpg?url";
import { Lock } from "lucide-react";
import { Eye, EyeOff } from "lucide-react";
import { register } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [visible, setvisible] = useState(false);
  const [errors, seterrors] = useState({});
  const validate = (data) => {
    const re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const errors = {};
    if (!data.name) {
      errors.name = "Name is required";
    }
    if (!data.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email is not valid";
    }

    if (!re.test(data.password)) {
      errors.password = "Password is required";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);

    const data = {
      name: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
    };
    console.log(data);
    const validationErrors = validate(data);
    seterrors(validationErrors);
    console.log(Object.keys(validationErrors).length);
    if (Object.keys(validationErrors).length === 0) {
      dispatch(register(data))
        .then((res) => {
          console.log(res);
          navigate("/login");
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div
      style={{ backgroundImage: `url(${registerbg})` }}
      className="h-screen  flex justify-center items-center bg-cover bg-center"
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white/50 font-bold p-10 rounded space-y-2 w-[20rem]"
      >
        <div className="flex justify-center items-center text-2xl">
          <Lock />
          <h2 className="uppercase font-serif">Inscription</h2>
        </div>
        <div>
          <label htmlFor="name" className="block">
            Name
          </label>

          <input
            type="text"
            name="name"
            id="name"
            className="border border-black rounded w-full"
          />
          {errors.name && (
            <span className="text-red-600 font-normal flex justify-end">
              {errors.name}
            </span>
          )}
        </div>
        <div>
          <label htmlFor="email" className="block">
            Email
          </label>

          <input
            type="email"
            id="email"
            className="border border-black rounded w-full"
          />
          {errors.email && (
            <span className="text-red-600 font-normal flex justify-end">
              {errors.email}
            </span>
          )}
        </div>
        <div className="relative">
          <label htmlFor="name" className="block">
            Password
          </label>

          <input
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
          {errors.password && (
            <span className="text-red-600 font-normal flex justify-end">
              {errors.password}
            </span>
          )}
        </div>
        <div className="flex justify-end">
          <button type="submit" className="bg-slate-500 border rounded p-2">
            s inscrire
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
