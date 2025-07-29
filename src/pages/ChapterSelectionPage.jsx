import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CHAPTERS_DATA = {
  Physics: [
    {
      key: "mechanics",
      title: "Mechanics",
      desc: "Practice questions from mechanics",
      questions: 50,
      difficulty: "Medium",
      difficultyColor: "bg-orange-500",
    },
    {
      key: "thermo",
      title: "Thermodynamics",
      desc: "Practice questions from thermodynamics",
      questions: 30,
      difficulty: "Hard",
      difficultyColor: "bg-red-600",
    },
    {
      key: "em",
      title: "Electromagnetism",
      desc: "Practice questions from electromagnetism",
      questions: 45,
      difficulty: "Hard",
      difficultyColor: "bg-red-600",
    },
    {
      key: "optics",
      title: "Optics",
      desc: "Practice questions from optics",
      questions: 25,
      difficulty: "Medium",
      difficultyColor: "bg-orange-500",
    },
    {
      key: "modern",
      title: "Modern Physics",
      desc: "Practice questions from modern physics",
      questions: 35,
      difficulty: "Hard",
      difficultyColor: "bg-red-600",
    },
  ],
  // Add other subjects here...
};

const ChapterSelectionPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { testType, subject } = location.state || {
    testType: "JEE",
    subject: "Physics",
  };

  const chapters = CHAPTERS_DATA[subject] || [];

  const handleStartQuiz = (chapterKey) => {
    const chapterObj = chapters.find((c) => c.key === chapterKey);
    navigate("/quiz", {
      state: { testType, subject, chapter: chapterObj.title },
    });
  };

  return (
    <div className="min-h-screen bg-[#f7f9fc] py-12 px-2">
      <div
        className="mb-6 text-blue-700 font-semibold cursor-pointer flex items-center w-fit hover:underline"
        onClick={() => navigate(-1)}
      >
        <span className="mr-1 text-xl">←</span> Back to Subjects
      </div>
      <h1 className="text-2xl md:text-3xl font-extrabold text-center text-[#1976d2] mb-2">
        {testType} - {subject}
      </h1>
      <p className="text-lg text-gray-600 text-center mb-10">
        Select a chapter to start your quiz
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {chapters.map((chapter) => (
          <div
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer p-7 flex flex-col gap-3 border border-transparent hover:border-blue-200"
            key={chapter.key}
          >
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-bold text-lg text-gray-900">
                {chapter.title}
              </h2>
              <div
                className={`px-3 py-1 rounded-lg text-xs font-bold text-white ${chapter.difficultyColor}`}
              >
                {chapter.difficulty}
              </div>
            </div>
            <p className="text-gray-600 text-sm">{chapter.desc}</p>
            <div className="flex items-center gap-2 mt-2 text-gray-500 text-xs font-medium">
              <span role="img" aria-label="questions">
                📚
              </span>
              {chapter.questions} questions available
            </div>
            <button
              className="bg-[#2563eb] hover:bg-[#1976d2] text-white font-semibold rounded-lg px-6 py-2 mt-4 transition-all"
              onClick={() => handleStartQuiz(chapter.key)}
            >
              ▷ Start Quiz
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChapterSelectionPage;
