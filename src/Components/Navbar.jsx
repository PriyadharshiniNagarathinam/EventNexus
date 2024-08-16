import { Bars3Icon, UserIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import { useAuth } from "./AuthContext";
import CreateEvent from "./CreateEvent";
import React, { useState } from "react";

const Navbar = ({ handleEventChange }) => {
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const [isCreateEventOpen, setIsCreateEventOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const handleLogout = () => {
    setIsAuthenticated(false);
    // Optionally, clear any additional authentication-related state or tokens here
  };

  return (
    <nav
      className="fixed w-full z-20 top-0 left-0 bg-transparent shadow-none"
      style={{ paddingLeft: 0, paddingRight: 0, margin: 0 }}
    >
      <div className="flex items-center justify-between mx-auto p-4">
        <NavLink
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse p-3 text-white font-sans"
        >
          <span className="text-white text-2xl font-bold">
            Event<span className="text-[#f2ae01]">Nexus</span>Hub
          </span>
        </NavLink>
        <div className="flex md:order-2 space-x-6 md:space-x-0 rtl:space-x-reverse">
          <button
            onClick={() => setIsCreateEventOpen(true)}
            className="text-white bg-[#f2ae01] hover:bg-[#f2ae01] border-2 border-[#f2ae01] hover:text-white focus:ring-4 focus:outline-none focus:ring-[#f2ae01] font-medium rounded-lg text-lg mx-5 px-4 py-2 text-center"
          >
            Create Event
          </button>
          {isAuthenticated ? (
            <div className="relative">
              <button
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                className="text-white bg-[#f2ae01] hover:bg-[#f2ae01] border-2 border-[#f2ae01] rounded-full p-2 focus:ring-4 focus:outline-none focus:ring-[#f2ae01]"
              >
                <UserIcon className="w-7 h-7" aria-hidden="true" />
              </button>
              {isProfileMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-black border border-gray-200 rounded-lg shadow-lg">
                  <ul className="py-2 text-lg">
                    <li>
                      <NavLink
                        to="/profile"
                        className="block px-4 py-2 hover:bg-[#f2ae01] hover:text-white"
                      >
                        Your Profile
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/yourevents"
                        className="block px-4 py-2 hover:bg-[#f2ae01] hover:text-white"
                      >
                        Your Events
                      </NavLink>
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="block w-full px-4 py-2 text-left hover:bg-[#f2ae01] hover:text-white"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <NavLink
              to="/signin"
              className="text-white bg-[#f2ae01] hover:bg-[#f2ae01] border-2 border-[#f2ae01] hover:text-white focus:ring-4 focus:outline-none focus:ring-[#f2ae01] font-medium rounded-lg text-lg px-4 py-2 text-center"
            >
              Login
            </NavLink>
          )}
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-[#f2ae01] focus:outline-none focus:ring-2 focus:ring-[#f2ae01]"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-lg block py-2 px-3 border-b-2 border-[#f2ae01] text-[#f2ae01] md:bg-transparent md:text-[#f2ae01] md:p-0"
                    : "text-lg block py-2 px-3 text-white hover:text-[#f2ae01] md:hover:text-[#f2ae01] md:p-0"
                }
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/events"
                className={({ isActive }) =>
                  isActive
                    ? "text-lg block py-2 px-3 text-[#f2ae01] md:bg-transparent md:text-[#f2ae01] md:p-0"
                    : "text-lg block py-2 px-3 text-white hover:text-[#f2ae01] md:hover:text-[#f2ae01] md:p-0"
                }
              >
                Events
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/categories"
                className={({ isActive }) =>
                  isActive
                    ? "text-lg block py-2 px-3 text-[#f2ae01] md:bg-transparent md:text-[#f2ae01] md:p-0"
                    : "text-lg block py-2 px-3 text-white hover:text-[#f2ae01] md:hover:text-[#f2ae01] md:p-0"
                }
              >
                Categories
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-lg block py-2 px-3 text-[#f2ae01] md:bg-transparent md:text-[#f2ae01] md:p-0"
                    : "text-lg block py-2 px-3 text-white hover:text-[#f2ae01] md:hover:text-[#f2ae01] md:p-0"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-lg block py-2 px-3 text-[#f2ae01] md:bg-transparent md:text-[#f2ae01] md:p-0"
                    : "text-lg block py-2 px-3 text-white hover:text-[#f2ae01] md:hover:text-[#f2ae01] md:p-0"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <CreateEvent
        open={isCreateEventOpen}
        onClose={() => setIsCreateEventOpen(false)}
        handleEventChange={handleEventChange}
      />
    </nav>
  );
};

export default Navbar;
