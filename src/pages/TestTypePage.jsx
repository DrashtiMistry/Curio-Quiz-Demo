import React from "react";
import { useNavigate } from "react-router-dom";
import { FileText, BookOpen } from "lucide-react";

const SUBJECTS = [
  {
    key: "Physics",

    image: "https://www.svgrepo.com/show/288275/physics-science.svg",
    color: "#3d5afe",
    title: "Physics",
    desc: "Mechanics, Thermodynamics, Electromagnetism, Optics, and Modern Physics",
    chapters: 25,
    questions: 400,
  },
  {
    key: "Chemistry",

    image: "https://www.svgrepo.com/show/179525/flask-chemistry.svg",
    color: "#43a047",
    title: "Chemistry",
    desc: "Physical, Organic, and Inorganic Chemistry concepts",
    chapters: 30,
    questions: 400,
  },
  {
    key: "Mathematics",

    image: "https://cdn-icons-png.flaticon.com/256/3771/3771278.png",
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
    <div className="min-h-screen bg-[#f7f9fc] py-6 px-2">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className="mb-6 text-blue-600 font-semibold cursor-pointer flex items-center w-fit hover:text-blue-800 transition-colors duration-200 ml-4 mt-8 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl shadow-sm hover:shadow-md"
          onClick={() => navigate(-1)}
        >
          <span className="mr-2 text-lg">←</span> Back to Exams
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-center text-[#1976d2] mb-2">
          JEE (Joint Entrance Examination)
        </h1>
        <p className="text-lg text-gray-600 text-center mb-8">
          Choose a subject to start practicing
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
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
                <FileText className="w-4 h-4" />
                {subj.chapters} chapters
              </span>
              <span className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                {subj.questions} questions
              </span>
            </div>
            <button

              className="bg-[#2563eb] hover:bg-[#1976d2] text-white font-semibold rounded-xl px-8 py-3 mt-auto transition-all duration-200 text-base"
              onClick={() => handleStart(subj.key)}
            >
              Start Practice
            </button>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default TestTypePage;
