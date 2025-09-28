import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaRegistered } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// sample adil testing

const Register = () => { 
  const roles = [
    {
      role: "Student",
      title: "Build skills for today, tomorrow, and beyond.",
      subTitle: "Register as a Student Connect and explore endless opportunities.",
    },
    {
      role: "Alumni",
      title: "Stay connected and contribute back.",
      subTitle: "Register as an Alumni Connect and support your institution.",
    },
    {
      role: "College",
      title: "Shape the future of education.",
      subTitle: "Register as a College Connect and strengthen alumni bonds.",
    },
  ];

  const [currentRole, setCurrentRole] = useState(roles[0]);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-900 flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Register Section */}
      <main className="flex-grow flex pt-30 items-center justify-center px-4 py-12">
        <div className="bg-white/70 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-lg w-full max-w-5xl flex flex-col md:flex-row-reverse overflow-hidden">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center items-center p-8">
            <img
              src="https://res.cloudinary.com/dort5nnis/image/upload/v1741922098/erasebg-transformed_4_sufn8y.png"
              className="rounded-2xl w-[85%] max-w-[380px] h-auto object-contain shadow-md"
              alt="Register"
            />
          </div>

          {/* Form Section */}
          <div className="w-full md:w-1/2 p-8 flex flex-col gap-4 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Create your account
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
                    currentRole.role === "Student"
                      ? "left-1"
                      : currentRole.role === "Alumni"
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
                    onClick={() => setCurrentRole(roles[index])}
                  >
                    {role.role}
                  </div>
                ))}
              </div>
            </div>

            {/* Registration Form */}
            <form className="flex flex-col gap-4 mt-6 w-full md:max-w-[380px]">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="firstName"
                    className="text-gray-700 font-medium"
                  >
                    First Name<span className="text-blue-600 ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter first name"
                    id="firstName"
                    name="firstName"
                    className="p-3 w-full border border-gray-300 rounded-lg bg-white/70 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="lastName"
                    className="text-gray-700 font-medium"
                  >
                    Last Name<span className="text-blue-600 ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter last name"
                    id="lastName"
                    name="lastName"
                    className="p-3 w-full border border-gray-300 rounded-lg bg-white/70 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-gray-700 font-medium"
                >
                  Email Address<span className="text-blue-600 ml-1">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="p-3 border border-gray-300 rounded-lg bg-white/70 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  autoComplete="off"
                />
              </div>

              {/* Password Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="password"
                    className="text-gray-700 font-medium"
                  >
                    Create Password<span className="text-blue-600 ml-1">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type={isPasswordVisible ? "text" : "password"}
                      id="password"
                      placeholder="Enter password"
                      className="p-3 w-full border border-gray-300 rounded-lg bg-white/70 text-gray-900 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      type="button"
                      onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                    >
                      {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="confirmPassword"
                    className="text-gray-700 font-medium"
                  >
                    Confirm Password<span className="text-blue-600 ml-1">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type={isConfirmPasswordVisible ? "text" : "password"}
                      id="confirmPassword"
                      placeholder="Confirm password"
                      className="p-3 w-full border border-gray-300 rounded-lg bg-white/70 text-gray-900 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
                      }
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                    >
                      {isConfirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full mt-5 flex justify-center items-center py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition duration-200"
              >
                <FaRegistered className="mr-2" />
                Register
              </button>

              {/* Login Link */}
              <p className="text-end mt-2 text-sm text-gray-700 flex gap-1 justify-end">
                Already have an account?
                <a href="/login">
                  <span className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer">
                    Login here
                  </span>
                </a>
              </p>
            </form>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Register;
