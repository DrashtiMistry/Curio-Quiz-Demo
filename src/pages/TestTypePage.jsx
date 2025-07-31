import React from "react";
import { useNavigate } from "react-router-dom";

const SUBJECTS = [
  {
    key: "Physics",
<<<<<<< HEAD
    icon: "📘",
=======
    image: "https://www.svgrepo.com/show/288275/physics-science.svg",
>>>>>>> 59652221922af32677c78ece6bf8c9f7994bb896
    color: "#3d5afe",
    title: "Physics",
    desc: "Mechanics, Thermodynamics, Electromagnetism, Optics, and Modern Physics",
    chapters: 25,
    questions: 400,
  },
  {
    key: "Chemistry",
<<<<<<< HEAD
    icon: "📗",
=======
    image: "https://www.svgrepo.com/show/179525/flask-chemistry.svg",
>>>>>>> 59652221922af32677c78ece6bf8c9f7994bb896
    color: "#43a047",
    title: "Chemistry",
    desc: "Physical, Organic, and Inorganic Chemistry concepts",
    chapters: 30,
    questions: 400,
  },
  {
    key: "Mathematics",
<<<<<<< HEAD
    icon: "📙",
=======
    image: "https://cdn-icons-png.flaticon.com/256/3771/3771278.png",
>>>>>>> 59652221922af32677c78ece6bf8c9f7994bb896
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
<<<<<<< HEAD
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
=======
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 max-w-7xl mx-auto px-4">
        {SUBJECTS.map((subj) => (
          <div
            key={subj.key}
            className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer p-8 flex flex-col gap-4 border-t-4 hover:scale-[1.02] min-h-[300px]"
            style={{ borderTopColor: subj.color }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 flex items-center justify-center bg-gray-50 rounded-2xl">
                <img
                  src={subj.image}
                  alt={`${subj.title} Icon`}
                  className="w-10 h-10"
                  style={{ filter: `hue-rotate(0deg) saturate(1.2)` }}
                />
              </div>
              <h2 className="font-bold text-xl text-gray-900">{subj.title}</h2>
            </div>
            <div className="text-gray-600 text-base leading-relaxed mb-4">
              {subj.desc}
            </div>
            <div className="flex items-center gap-6 mb-6 text-gray-500 text-sm font-medium">
              <span className="flex items-center gap-2">
                <span role="img" aria-label="chapters">
                  📄
                </span>
                {subj.chapters} chapters
              </span>
              <span className="flex items-center gap-2">
                <span role="img" aria-label="questions">
                  📚
                </span>
>>>>>>> 59652221922af32677c78ece6bf8c9f7994bb896
                {subj.questions} questions
              </span>
            </div>
            <button
<<<<<<< HEAD
              className="bg-[#2563eb] hover:bg-[#1976d2] text-white font-semibold rounded-lg px-6 py-2 mt-4 transition-all"
=======
              className="bg-[#2563eb] hover:bg-[#1976d2] text-white font-semibold rounded-xl px-8 py-3 mt-auto transition-all duration-200 text-base"
>>>>>>> 59652221922af32677c78ece6bf8c9f7994bb896
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
