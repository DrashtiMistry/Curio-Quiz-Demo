import React, { useState } from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  const [dark, setDark] = useState(false);

  return (
    <div
      className={`${
        dark ? "bg-[#101624] text-gray-100" : "bg-[#f7f9fc] text-gray-900"
      } min-h-screen w-full flex flex-col`}
    >
      {/* Navbar */}
      <nav
        className={`flex items-center justify-between px-8 py-3 shadow-sm ${
          dark
            ? "bg-[#181f2e] border-b border-[#232b3d]"
            : "bg-white border-b border-[#e0e0e0]"
        }`}
      >
        <div>
          <Link to="/">
            <img
              src="https://www.curioteach.com/CURIOTRANSPARENT1.svg"
              alt="Curio Logo"
              className="h-12 w-auto"
            />
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <Link
            to="/profile"
            className={`flex items-center gap-2 font-medium text-base hover:underline ${
              dark ? "text-gray-100" : "text-gray-900"
            }`}
          >
            <span role="img" aria-label="profile">
              👤
            </span>{" "}
            Profile
          </Link>
          <button
            className="text-2xl bg-transparent border-none cursor-pointer"
            onClick={() => setDark((d) => !d)}
            aria-label="Toggle theme"
          >
            {dark ? (
              <span role="img" aria-label="dark">
                🌙
              </span>
            ) : (
              <span role="img" aria-label="light">
                ☀️
              </span>
            )}
          </button>
        </div>
      </nav>
      <main className="flex-1 w-full mx-auto">{children}</main>
    </div>
  );
};

export default Layout;
