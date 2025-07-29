import React from "react";
import { useNavigate } from "react-router-dom";

const SUBJECTS = [
  {
    key: "Physics",
    icon: "📘",
    color: "#3d5afe",
    title: "Physics",
    desc: "Mechanics, Thermodynamics, Electromagnetism, Optics, and Modern Physics",
    chapters: 25,
    questions: 400,
  },
  {
    key: "Chemistry",
    icon: "📗",
    color: "#43a047",
    title: "Chemistry",
    desc: "Physical, Organic, and Inorganic Chemistry concepts",
    chapters: 30,
    questions: 400,
  },
  {
    key: "Mathematics",
    icon: "📙",
    color: "#8e24aa",
    title: "Mathematics",
    desc: "Algebra, Calculus, Coordinate Geometry, and Trigonometry",
    chapters: 20,
    questions: 400,
  },
];

const TestTypePage = () => {
  const navigate = useNavigate();

  const handleStart = (subject) => {
    navigate("/chapters", { state: { testType: "JEE", subject } });
  };

  return (
    <div className="min-h-screen bg-[#f7f9fc] py-12 px-2">
      <div
        className="mb-6 text-blue-700 font-semibold cursor-pointer flex items-center w-fit hover:underline"
        onClick={() => navigate(-1)}
      >
        <span className="mr-1 text-xl">←</span> Back to Exams
      </div>
      <h1 className="text-2xl md:text-3xl font-extrabold text-center text-[#1976d2] mb-2">
        JEE (Joint Entrance Examination)
      </h1>
      <p className="text-lg text-gray-600 text-center mb-10">
        Choose a subject to start practicing
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {SUBJECTS.map((subj) => (
          <div
            key={subj.key}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer p-7 flex flex-col gap-3 border-t-4"
            style={{ borderTopColor: subj.color }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="text-3xl" style={{ color: subj.color }}>
                {subj.icon}
              </div>
              <h2 className="font-bold text-lg text-gray-900">{subj.title}</h2>
            </div>
            <div className="text-gray-600 text-sm">{subj.desc}</div>
            <div className="flex items-center gap-4 mt-2 text-gray-500 text-xs font-medium">
              <span>
                <span role="img" aria-label="chapters">
                  📄
                </span>{" "}
                {subj.chapters} chapters
              </span>
              <span>
                <span role="img" aria-label="questions">
                  📚
                </span>{" "}
                {subj.questions} questions
              </span>
            </div>
            <button
              className="bg-[#2563eb] hover:bg-[#1976d2] text-white font-semibold rounded-lg px-6 py-2 mt-4 transition-all"
              onClick={() => handleStart(subj.key)}
            >
              Start Practice
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestTypePage;
