 
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion as Motion } from "framer-motion";

const HomePage = ({ dark = false }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`${

        dark
          ? "bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-gray-100"
          : "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-gray-900"
      } min-h-screen`}
    >
      {/* Hero Section */}
      <Motion.header
        className="text-center py-20 px-6 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className={`absolute top-20 left-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse ${
              dark ? "bg-blue-400" : "bg-blue-200"
            }`}
          ></div>
          <div
            className={`absolute top-40 right-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse ${
              dark ? "bg-purple-400" : "bg-purple-200"
            }`}
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className={`absolute -bottom-8 left-20 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse ${
              dark ? "bg-indigo-400" : "bg-indigo-200"
            }`}
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        <Motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 relative z-10"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Master Your{" "}
          <span className="bg-gradient-to-r from-[#1976d2] via-[#2563eb] to-[#a855f7] bg-clip-text text-transparent animate-pulse">
            Competitive Exams
          </span>
        </Motion.h1>

        <Motion.p
          className={`text-xl sm:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed relative z-10 ${
            dark ? "text-gray-300" : "text-gray-700"
          }`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Practice with thousands of questions from JEE, NEET, UPSC, and more.
          <br />
          Get AI-powered hints and track your progress like never before.
        </Motion.p>

        <Motion.button
          className="bg-gradient-to-r from-[#2563eb] to-[#1976d2] hover:from-[#1976d2] hover:to-[#1565c0] text-white font-bold rounded-2xl px-12 py-5 text-xl shadow-2xl transition-all duration-300 hover:shadow-blue-500/50 hover:scale-105 transform relative z-10 group"
          onClick={() => navigate("/exams")}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="flex items-center justify-center gap-3">
            🚀 Start Quiz
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </span>
        </Motion.button>
      </Motion.header>

      {/* Features Section */}
      <Motion.section
        className="py-16 px-6 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <Motion.h2
          className={`text-4xl font-bold mb-16 text-center ${
            dark ? "text-gray-100" : "text-[#0a1833]"
          }`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          Why Choose Our Platform?
        </Motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-center items-stretch">
          {/* Card 1 */}
          <Motion.div
            className={`backdrop-blur-sm border-2 rounded-3xl p-12 flex flex-col items-center text-center shadow-2xl transition-all duration-300 hover:scale-105 group ${
              dark
                ? "bg-gray-800/80 border-blue-400 hover:shadow-blue-400/30"
                : "bg-white/80 border-blue-100 hover:shadow-blue-200/50"
            }`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            whileHover={{ y: -10 }}
          >
            <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 mb-6 text-3xl font-bold text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
              📚
            </div>
            <h3
              className={`text-2xl font-bold mb-4 ${
                dark ? "text-gray-100" : "text-gray-800"
              }`}
            >
              Comprehensive Question Bank
            </h3>
            <p
              className={`leading-relaxed text-lg ${
                dark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Access thousands of questions from previous years across all major
              competitive exams with detailed explanations.
            </p>
          </Motion.div>

          {/* Card 2 */}
          <Motion.div
            className={`backdrop-blur-sm border-2 rounded-3xl p-12 flex flex-col items-center text-center shadow-2xl transition-all duration-300 hover:scale-105 group ${
              dark
                ? "bg-gray-800/80 border-purple-400 hover:shadow-purple-400/30"
                : "bg-white/80 border-purple-100 hover:shadow-purple-200/50"
            }`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            whileHover={{ y: -10 }}
          >
            <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 mb-6 text-3xl font-bold text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
              🤖
            </div>
            <h3
              className={`text-2xl font-bold mb-4 ${
                dark ? "text-gray-100" : "text-gray-800"
              }`}
            >
              AI-Powered Hints
            </h3>
            <p
              className={`leading-relaxed text-lg ${
                dark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Get intelligent hints when you're stuck, powered by advanced AI
              technology for personalized learning.
            </p>
          </Motion.div>

          {/* Card 3 */}
          <Motion.div
            className={`backdrop-blur-sm border-2 rounded-3xl p-12 flex flex-col items-center text-center shadow-2xl transition-all duration-300 hover:scale-105 group ${
              dark
                ? "bg-gray-800/80 border-green-400 hover:shadow-green-400/30"
                : "bg-white/80 border-green-100 hover:shadow-green-200/50"
            }`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            whileHover={{ y: -10 }}
          >
            <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 mb-6 text-3xl font-bold text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
              📊
            </div>
            <h3
              className={`text-2xl font-bold mb-4 ${
                dark ? "text-gray-100" : "text-gray-800"
              }`}
            >
              Track Progress
            </h3>
            <p
              className={`leading-relaxed text-lg ${
                dark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Monitor your performance with detailed analytics and score
              tracking to identify improvement areas.
            </p>
          </Motion.div>
        </div>
      </Motion.section>

      {/* Stats Section */}
      <Motion.section
        className={`py-20 px-6 backdrop-blur-sm ${
          dark ? "bg-gray-800/60" : "bg-white/60"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.8 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <Motion.div className="p-6" whileHover={{ scale: 1.05 }}>
              <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
              <div
                className={`font-medium ${
                  dark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Questions
              </div>
            </Motion.div>
            <Motion.div className="p-6" whileHover={{ scale: 1.05 }}>
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div
                className={`font-medium ${
                  dark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Subjects
              </div>
            </Motion.div>
            <Motion.div className="p-6" whileHover={{ scale: 1.05 }}>
              <div className="text-4xl font-bold text-green-600 mb-2">1M+</div>
              <div
                className={`font-medium ${
                  dark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Students
              </div>
            </Motion.div>
            <Motion.div className="p-6" whileHover={{ scale: 1.05 }}>
              <div className="text-4xl font-bold text-orange-600 mb-2">99%</div>
              <div
                className={`font-medium ${
                  dark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Success Rate
              </div>
            </Motion.div>
          </div>
        </div>
      </Motion.section>
    </div>
  );
};

export default HomePage;
