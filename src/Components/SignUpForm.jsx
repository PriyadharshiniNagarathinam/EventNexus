import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignupForm() {
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!document.getElementById("terms").checked) {
      alert("Please accept the terms and conditions!");
      return;
    }

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/register", {
        email,
        password,
      });
      console.log(response.data);
      navigate("/signin");
    } catch (error) {
      console.error(error);
      if (error.response) {
        console.log(error.response.data);
        return alert(error.response.data.message);
      }

      alert("An error occurred during signup!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#2b2219] pt-[150px]">
      {/* Card Container */}
      <div className="flex flex-col md:flex-row max-w-1xl bg-[#1c1c1c] rounded-lg shadow-lg overflow-hidden">
        {/* Image Section */}
        <div className="flex-1 hidden md:block relative">
          <img
            src="https://img.freepik.com/free-photo/chrysanthemums-illuminated-with-orange-light-hang-threads-hall_1304-3341.jpg?ga=GA1.1.944051474.1710046769&semt=ais_hybrid"
            alt="Event Nexus Hub"
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>

        {/* Signup Form Section */}
        <div className="flex-1 p-8 bg-[#2b2219]">
          <div className="w-full max-w-3xl mx-auto">
            <div className="bg-[#1c1c1c] rounded-lg p-8 space-y-6">
              <h1 className="text-[#f2ae01] text-xl font-bold leading-tight tracking-tight md:text-2xl">
                Create an account
              </h1>
              <form className="space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-[#f2ae01]"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-[#1c1c1c] border border-[#f14b17] text-[#f2ae01] text-sm rounded-lg focus:ring-[#f14b17] focus:border-[#f14b17] block w-full p-3 transition-all duration-300 ease-in-out"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-[#f2ae01]"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-[#1c1c1c] border border-[#f14b17] text-[#f2ae01] text-sm rounded-lg focus:ring-[#f14b17] focus:border-[#f14b17] block w-full p-3 transition-all duration-300 ease-in-out"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-sm font-medium text-[#f2ae01]"
                  >
                    Confirm password
                  </label>
                  <input
                    type="password"
                    name="confirm-password"
                    id="confirm-password"
                    placeholder="••••••••"
                    className="bg-[#1c1c1c] border border-[#f14b17] text-[#f2ae01] text-sm rounded-lg focus:ring-[#f14b17] focus:border-[#f14b17] block w-full p-3 transition-all duration-300 ease-in-out"
                    required=""
                  />
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-[#f14b17] rounded bg-[#1c1c1c] focus:ring-3 focus:ring-[#f14b17]"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="terms"
                      className="font-light text-[#f2ae01]"
                    >
                      I accept the{" "}
                      <a
                        className="font-medium text-[#f2ae01] hover:underline"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-[#f14b17] hover:bg-[#e03b1e] focus:ring-4 focus:outline-none focus:ring-[#f14b17] font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all duration-300 ease-in-out"
                  onClick={handleSignup}
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-[#f2ae01]">
                  Already have an account?{" "}
                  <Link
                    to="/signin"
                    className="font-medium text-[#f2ae01] hover:underline"
                  >
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
