import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const [dark] = useState(false);

  return (
    <div
      className={`${
        dark ? "bg-[#101624] text-gray-100" : "bg-[#f7f9fc] text-gray-900"
      } min-h-screen`}
    >
      {/* Hero Section */}
      <header className="text-center py-16 px-2 animate-fade-in">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
          Master Your{" "}
          <span className="bg-gradient-to-r from-[#1976d2] to-[#a855f7] bg-clip-text text-transparent">
            Competitive Exams
          </span>
        </h1>
        <p className="text-lg sm:text-xl max-w-xl mx-auto text-black dark:text-gray-300 mb-8">
          Practice with thousands of questions from JEE, NEET, UPSC, and more.
          <br />
          Get AI-powered hints and track your progress like never before.
        </p>
        <button
          className="bg-[#2563eb] hover:bg-[#1976d2] text-white font-semibold rounded-lg px-8 py-3 text-lg shadow-lg transition-all"
          onClick={() => navigate("/exams")}
        >
          Start Quiz <span className="ml-1">→</span>
        </button>
      </header>

      {/* Features Section */}
      <section className="py-12 px-2 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-[#0a1833]">
          Why Choose Our Platform?
        </h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {/* Card 1 */}
          <div className="flex-1 bg-white border border-gray-200 rounded-xl p-10 flex flex-col items-center text-center">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-100 mb-4 text-2xl font-bold text-[#0a1833]">Q</div>
            <h3 className="text-xl font-bold mb-2">Comprehensive Question Bank</h3>
            <p className="text-gray-500">
              Access thousands of questions from previous years across all major competitive exams.
            </p>
          </div>
          {/* Card 2 */}
          <div className="flex-1 bg-white border border-gray-200 rounded-xl p-10 flex flex-col items-center text-center">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-100 mb-4 text-2xl font-bold text-[#0a1833]">AI</div>
            <h3 className="text-xl font-bold mb-2">AI-Powered Hints</h3>
            <p className="text-gray-500">
              Get intelligent hints when you're stuck, powered by advanced AI technology.
            </p>
          </div>
          {/* Card 3 */}
          <div className="flex-1 bg-white border border-gray-200 rounded-xl p-10 flex flex-col items-center text-center">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-100 mb-4 text-2xl font-bold text-[#0a1833]">T</div>
            <h3 className="text-xl font-bold mb-2">Track Progress</h3>
            <p className="text-gray-500">
              Monitor your performance with detailed analytics and score tracking.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
