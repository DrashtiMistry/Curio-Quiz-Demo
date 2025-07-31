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
        className={`flex items-center justify-between px-8 py-4 shadow-lg backdrop-blur-md border-b-2 ${
          dark
            ? "bg-[#181f2e]/90 border-[#232b3d] shadow-gray-900/20"
            : "bg-white/95 border-blue-100 shadow-blue-100/50"
        }`}
      >
        <div className="h-14 flex items-center">
          <Link to="/" className="block h-full group">
            <img
              src="https://www.curioteach.com/CURIOTRANSPARENT1.svg"
              alt="Curio Logo"
              className="h-full w-auto object-contain scale-[2.8] transition-transform duration-300 group-hover:scale-[3.0]"
            />
          </Link>
        </div>


        <div className="flex items-center gap-8">
          <Link
            to="/profile"
            className={`flex items-center gap-3 font-semibold text-lg px-4 py-2 rounded-xl transition-all duration-300 hover:shadow-md ${
              dark
                ? "text-gray-100 hover:bg-[#232b3d] hover:text-blue-300"
                : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
            }`}
          >
            <span className="text-xl" role="img" aria-label="profile">
              👤
            </span>
            Profile
          </Link>
          <button
            className={`text-3xl p-3 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-110 ${
              dark
                ? "bg-[#232b3d] hover:bg-[#2a3441] text-yellow-400"
                : "bg-blue-50 hover:bg-blue-100 text-blue-600"
            }`}
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
 
      <main className="flex-1 w-full mx-auto">
        {React.cloneElement(children, { dark })}
      </main>
    </div>
  );
};

export default Layout;
