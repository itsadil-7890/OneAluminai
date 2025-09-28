import React, { useState, useCallback, useMemo } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Login = () => {
  const roles = useMemo(
    () => [
      {
        role: "Alumni",
        title: "Login as an Alumni",
        subTitle: "Login as an Alumni Connect and give back to your institution.",
      },
      {
        role: "Student",
        title: "Build skills for today, tomorrow, and beyond.",
        subTitle: "Login as a Student Connect and explore endless career opportunities.",
      },
      {
        role: "College",
        title: "Discover your passion",
        subTitle: "Login as a College Connect and strengthen bonds with your alumni",
      },
    ],
    []
  );

  const [currentRole, setCurrentRole] = useState(roles[1]); // Default Student
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [bodyData, setBodyData] = useState({
    email: "",
    password: "",
    accountType: "Student",
  });

  const updateRole = useCallback(
    (index) => {
      setCurrentRole(roles[index]);
      setBodyData((prev) => ({ ...prev, accountType: roles[index].role }));
    },
    [roles]
  );

  const updateUserData = useCallback((event) => {
    setBodyData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }, []);

  const togglePasswordVisibility = useCallback((e) => {
    e.preventDefault();
    setIsPasswordVisible((prev) => !prev);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-900 flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-grow flex pt-26 items-center justify-center px-4 py-12">
        <div className="bg-white/70 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-lg w-full max-w-5xl flex flex-col md:flex-row-reverse overflow-hidden">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center items-center  from-blue-100/40 to-indigo-100/40 p-8">
            <img
              src="https://res.cloudinary.com/dort5nnis/image/upload/v1741914599/erasebg-transformed_2_hetfta.png"
              alt="Secure Login"
              className="rounded-2xl w-[85%] max-w-[380px] h-auto object-contain shadow-md"
            />
          </div>

          {/* Form Section */}
          <div className="w-full md:w-1/2 p-8 flex flex-col gap-4 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Welcome back
            </h1>
            <p className="text-gray-700 text-[17px]">
              {currentRole.title}{" "}
              <span className="text-blue-600 italic">
                {currentRole.subTitle}
              </span>
            </p>

            {/* Role Toggle */}
            <div className="flex items-center justify-center md:justify-start mt-6">
              <div className="relative flex items-center bg-blue-100 w-[240px] md:w-[300px] h-[43px] rounded-full p-1 shadow-inner">
                <div
                  className={`absolute z-[1] w-1/3 h-[90%] bg-blue-600 rounded-full transition-all duration-300 ${
                    currentRole.role === "Alumni"
                      ? "left-1"
                      : currentRole.role === "Student"
                      ? "left-[33%]"
                      : "left-[66%]"
                  }`}
                ></div>
                {roles.map((role, index) => (
                  <div
                    key={role.role}
                    className={`w-1/3 text-center cursor-pointer z-[2] text-sm md:text-base transition ${
                      currentRole.role === role.role
                        ? "text-white font-semibold"
                        : "text-gray-600"
                    }`}
                    onClick={() => updateRole(index)}
                  >
                    {role.role}
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <form className="flex flex-col gap-4 mt-6 w-full md:max-w-[380px]">
              <label htmlFor="email" className="text-gray-700 font-medium">
                Email Address<span className="text-blue-600 ml-1">*</span>
              </label>
              <input
                name="email"
                type="email"
                id="email"
                placeholder="Enter your email"
                className="p-3 border border-gray-300 text-gray-900 rounded-lg bg-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={bodyData.email}
                onChange={updateUserData}
                required
              />

              <label htmlFor="password" className="text-gray-700 font-medium">
                Password<span className="text-blue-600 ml-1">*</span>
              </label>
              <div className="relative">
                <input
                  name="password"
                  type={isPasswordVisible ? "text" : "password"}
                  id="password"
                  placeholder="Enter your password"
                  className="p-3 border border-gray-300 text-gray-900 rounded-lg bg-white/70 backdrop-blur-sm w-full pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={bodyData.password}
                  onChange={updateUserData}
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                >
                  {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              <p className="text-gray-600 hover:text-blue-600 text-sm text-end cursor-pointer">
                Forgot password?
              </p>

              <button
                type="button"
                className="w-full flex justify-center items-center py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition duration-200"
              >
                <IoMdLogIn className="mr-2" />
                Sign In
              </button>

              <p className="text-end mt-2 text-sm text-gray-700 flex gap-1 justify-end">
                <span>New user?</span>
                <a href="/signup"><span className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer" href="/signup">
                  Register now
                </span></a>
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default React.memo(Login);
