<<<<<<< HEAD
import React from "react";
=======
import React, { useEffect, useState } from "react";
>>>>>>> 59652221922af32677c78ece6bf8c9f7994bb896
import { useLocation, useNavigate } from "react-router-dom";

const AnalysisPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const answers = location.state?.answers || [];
  const correctCount = location.state?.correctCount || 0;
  const incorrectCount = location.state?.incorrectCount || 0;
  const totalQuestions = location.state?.totalQuestions || answers.length || 5;
  const notAttempted = totalQuestions - (correctCount + incorrectCount);
  const avgTime = location.state?.avgTime || 0; // in seconds

  const accuracyRate = totalQuestions
    ? ((correctCount / totalQuestions) * 100).toFixed(1)
    : 0;
  const completionRate = totalQuestions
    ? (((correctCount + incorrectCount) / totalQuestions) * 100).toFixed(1)
    : 0;

  // Gauge SVG math
<<<<<<< HEAD
  const correctPercent = totalQuestions ? correctCount / totalQuestions : 0;
  const incorrectPercent = totalQuestions ? incorrectCount / totalQuestions : 0;
  const gaugeAngle = (percent) => percent * 180;

=======
  const [animatedPercent, setAnimatedPercent] = useState(0);
  const correctPercent = totalQuestions ? correctCount / totalQuestions : 0;
  const gaugeAngle = (percent) => percent * 180;

  // Animate the gauge fill
  useEffect(() => {
    let start = 0;
    const duration = 900; // ms
    const step = 16; // ms per frame
    const target = correctPercent;
    if (target === 0) {
      setAnimatedPercent(0);
      return;
    }
    const increment = target / (duration / step);
    let raf;
    function animate() {
      start += increment;
      if (start >= target) {
        setAnimatedPercent(target);
      } else {
        setAnimatedPercent(start);
        raf = setTimeout(animate, step);
      }
    }
    animate();
    return () => clearTimeout(raf);
  }, [correctPercent]);

>>>>>>> 59652221922af32677c78ece6bf8c9f7994bb896
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-start py-14">
      <div className="w-full max-w-3xl px-2">
        {/* Gauge and Statistics Grid */}
        <div className="bg-white rounded-3xl shadow-lg flex flex-col md:flex-row items-center justify-between px-12 py-10 mb-10 gap-8">
          {/* Gauge */}
          <div className="relative w-[180px] h-[110px] flex-shrink-0">
            <svg width="180" height="110" viewBox="0 0 180 110">
              {/* Track */}
              <path
                d="M20,100 A80,80 0 0,1 160,100"
                fill="none"
                stroke="#F3F4F6"
                strokeWidth="16"
              />
<<<<<<< HEAD
              {/* Correct */}
=======
              {/* Animated Correct */}
>>>>>>> 59652221922af32677c78ece6bf8c9f7994bb896
              <path
                d="M20,100 A80,80 0 0,1 160,100"
                fill="none"
                stroke="#22C55E"
                strokeWidth="16"
<<<<<<< HEAD
                strokeDasharray={`${gaugeAngle(correctPercent)} 999`}
                strokeDashoffset="0"
                className="transition-all duration-700"
              />
              {/* Incorrect */}
              <path
                d="M20,100 A80,80 0 0,1 160,100"
                fill="none"
                stroke="#EF4444"
                strokeWidth="16"
                strokeDasharray={`${gaugeAngle(incorrectPercent)} 999`}
                strokeDashoffset={gaugeAngle(correctPercent)}
                className="transition-all duration-700"
              />
            </svg>
            <div className="absolute top-12 w-full text-center font-extrabold text-3xl text-gray-900">
              {correctCount + incorrectCount}/{totalQuestions}
            </div>
            <div className="absolute top-[84px] w-full text-center font-semibold text-lg text-green-500 tracking-wider">
              Solved
            </div>
            <div className="absolute top-[108px] w-full text-center text-gray-400 text-sm">
              {notAttempted} Attempting
=======
                strokeDasharray={`${gaugeAngle(animatedPercent)} 999`}
                strokeDashoffset="0"
                style={{
                  transition: "stroke-dasharray 0.7s cubic-bezier(.4,2,.6,1)",
                  filter: "drop-shadow(0 2px 8px #22C55E44)",
                }}
              />
            </svg>
            <div className="absolute top-12 w-full text-center font-extrabold text-3xl text-gray-900">
              {correctCount}/{totalQuestions}
            </div>
            <div className="absolute top-[84px] w-full text-center font-semibold text-lg text-green-500 tracking-wider">
              Correct
            </div>
            <div className="absolute top-[108px] w-full text-center text-gray-400 text-sm">
              {notAttempted} Not Attempted
>>>>>>> 59652221922af32677c78ece6bf8c9f7994bb896
            </div>
          </div>
          {/* Stat Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full md:w-auto">
            <div className="rounded-xl border-2 border-green-400 bg-green-50 py-4 text-center transition-all duration-200 hover:shadow-lg hover:bg-green-100">
              <div className="text-green-600 font-semibold text-lg">
                Correct
              </div>
              <div className="text-2xl font-bold mt-2">{correctCount}</div>
            </div>
            <div className="rounded-xl border-2 border-red-400 bg-red-50 py-4 text-center transition-all duration-200 hover:shadow-lg hover:bg-red-100">
              <div className="text-red-500 font-semibold text-lg">
                Incorrect
              </div>
              <div className="text-2xl font-bold mt-2">{incorrectCount}</div>
            </div>
            <div className="rounded-xl border-2 border-gray-200 bg-gray-50 py-4 text-center transition-all duration-200 hover:shadow-lg hover:bg-gray-100">
              <div className="text-gray-700 font-semibold text-lg">
                Not Attempted
              </div>
              <div className="text-2xl font-bold mt-2">{notAttempted}</div>
            </div>
          </div>
        </div>

        {/* Performance Analysis */}
        <div className="bg-white rounded-2xl shadow-md px-10 py-8 flex flex-col gap-7">
          <div className="flex items-center gap-2 font-bold text-xl text-gray-800 mb-1">
            <span role="img" aria-label="target">
              🎯
            </span>
            Performance Analysis
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between group">
              <span className="text-gray-600 font-medium">Accuracy Rate</span>
              <span className="rounded-lg bg-red-50 text-red-500 px-4 py-1 font-bold text-lg transition-all group-hover:bg-red-100">
                {accuracyRate}%
              </span>
            </div>
            <div className="flex items-center justify-between group">
              <span className="text-gray-600 font-medium">Completion Rate</span>
              <span className="rounded-lg bg-blue-50 text-blue-600 px-4 py-1 font-bold text-lg transition-all group-hover:bg-blue-100">
                {completionRate}%
              </span>
            </div>
            <div className="flex items-center justify-between group">
              <span className="text-gray-600 font-medium">
                Average Time per Question
              </span>
              <span className="rounded-lg bg-gray-50 text-gray-700 px-4 py-1 font-bold text-lg transition-all group-hover:bg-gray-100">
                {avgTime ? `${(avgTime / 60).toFixed(1)}m` : "0.0m"}
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-6 mt-10">
          <button
<<<<<<< HEAD
            className="bg-white border-2 border-blue-700 text-blue-700 font-semibold rounded-lg px-7 py-3 transition-all duration-150 hover:bg-blue-50 hover:scale-105 shadow-sm"
            onClick={() => navigate("/review", { state: location.state })}
          >
            ⟳ Review Answers
          </button>
          <button
            className="bg-blue-700 text-white font-semibold rounded-lg px-7 py-3 transition-all duration-150 hover:bg-blue-900 hover:scale-105 shadow-sm"
            onClick={() => navigate("/")}
          >
            🏠 Back to Home
=======
            className="bg-white border-2 border-blue-700 text-blue-700 font-semibold rounded-lg px-7 py-3 transition-all duration-150 hover:bg-blue-50 hover:scale-105 shadow-sm flex items-center justify-center"
            onClick={() => navigate("/review", { state: location.state })}
          >
            <img
              src="https://www.svgrepo.com/show/527286/pen-new-square.svg"
              alt="Review Icon"
              className="w-5 h-5 mr-2"
            />
            Review Answers
          </button>
          <button
            className="bg-blue-700 text-white font-semibold rounded-lg px-7 py-3 transition-all duration-150 hover:bg-blue-900 hover:scale-105 shadow-sm flex items-center justify-center"
            onClick={() => navigate("/")}
          >
            <img
              src="https://www.svgrepo.com/show/520786/home-10.svg"
              alt="Home Icon"
              className="w-5 h-5 mr-2 filter brightness-0 invert"
            />
            Back to Home
>>>>>>> 59652221922af32677c78ece6bf8c9f7994bb896
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnalysisPage;
