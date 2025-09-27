import { useState, useRef } from "react";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const userName = useRef(null);

  const handleSignUp = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-400 via-violet-600 to-blue-300">
      {/* Left image (hidden on small screens) */}
      <div className="w-1/2 h-screen hidden lg:block">
        <img
          src="https://cdn.pixabay.com/photo/2020/12/25/09/11/quiz-5858940_1280.jpg"
          alt="Quiz Illustration"
          className="object-cover w-full h-full rounded-r-2xl shadow-lg"
        />
      </div>

      {/* Login/Signup form */}
      <div className="flex items-center justify-center w-full lg:w-1/2 p-8">
        <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-md">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            <h1 className="text-3xl font-bold text-blue-700 mb-2 text-center">
              {isSignIn ? "Login to Quizzo" : "Sign Up for Quizzo"}
            </h1>

            {/* Show Name field only in Signup */}
            {!isSignIn && (
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  ref={userName}
                  className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  autoComplete="off"
                  placeholder="Enter your name"
                />
              </div>
            )}

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                ref={email}
                className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                autoComplete="off"
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                ref={password}
                className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                autoComplete="off"
                placeholder="Enter your password"
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg py-2 px-4 transition duration-300"
            >
              {isSignIn ? "Login" : "Sign Up"}
            </button>

            {/* Toggle link */}
            <p className="text-center text-gray-600 mt-4">
              {isSignIn ? "Don’t have an account?" : "Already have an account?"}{" "}
              <button
                type="button"
                onClick={handleSignUp}
                className="text-blue-600 font-semibold hover:underline"
              >
                {isSignIn ? "Sign up here" : "Login here"}
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
