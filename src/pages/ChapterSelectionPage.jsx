import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CHAPTERS_DATA = {
  Physics: [
    {
      key: "mechanics",
      title: "Mechanics",
      desc: "Practice questions from mechanics",
      questions: 50,
<<<<<<< HEAD
      difficulty: "Medium",
      difficultyColor: "bg-orange-500",
=======
      image: "https://www.svgrepo.com/show/475285/book.svg",
>>>>>>> 59652221922af32677c78ece6bf8c9f7994bb896
    },
    {
      key: "thermo",
      title: "Thermodynamics",
      desc: "Practice questions from thermodynamics",
      questions: 30,
<<<<<<< HEAD
      difficulty: "Hard",
      difficultyColor: "bg-red-600",
=======
      image: "https://www.svgrepo.com/show/475285/book.svg",
>>>>>>> 59652221922af32677c78ece6bf8c9f7994bb896
    },
    {
      key: "em",
      title: "Electromagnetism",
      desc: "Practice questions from electromagnetism",
      questions: 45,
<<<<<<< HEAD
      difficulty: "Hard",
      difficultyColor: "bg-red-600",
=======
      image: "https://www.svgrepo.com/show/475285/book.svg",
>>>>>>> 59652221922af32677c78ece6bf8c9f7994bb896
    },
    {
      key: "optics",
      title: "Optics",
      desc: "Practice questions from optics",
      questions: 25,
<<<<<<< HEAD
      difficulty: "Medium",
      difficultyColor: "bg-orange-500",
=======
      image: "https://www.svgrepo.com/show/475285/book.svg",
>>>>>>> 59652221922af32677c78ece6bf8c9f7994bb896
    },
    {
      key: "modern",
      title: "Modern Physics",
      desc: "Practice questions from modern physics",
      questions: 35,
<<<<<<< HEAD
      difficulty: "Hard",
      difficultyColor: "bg-red-600",
=======
      image: "https://www.svgrepo.com/show/475285/book.svg",
>>>>>>> 59652221922af32677c78ece6bf8c9f7994bb896
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
<<<<<<< HEAD
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
=======
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 max-w-7xl mx-auto px-4">
        {chapters.map((chapter) => (
          <div
            className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer p-8 flex flex-col gap-4 border border-transparent hover:border-blue-200 hover:scale-[1.02] min-h-[280px]"
            key={chapter.key}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 flex items-center justify-center bg-gray-50 rounded-2xl">
                  <img
                    src={chapter.image}
                    alt={`${chapter.title} Icon`}
                    className="w-10 h-10"
                  />
                </div>
                <h2 className="font-bold text-xl text-gray-900">
                  {chapter.title}
                </h2>
              </div>
              <div
                className={`px-4 py-2 rounded-xl text-sm font-bold text-white ${chapter.difficultyColor}`}
>>>>>>> 59652221922af32677c78ece6bf8c9f7994bb896
              >
                {chapter.difficulty}
              </div>
            </div>
<<<<<<< HEAD
            <p className="text-gray-600 text-sm">{chapter.desc}</p>
            <div className="flex items-center gap-2 mt-2 text-gray-500 text-xs font-medium">
=======
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              {chapter.desc}
            </p>
            <div className="flex items-center gap-3 mb-6 text-gray-500 text-sm font-medium">
>>>>>>> 59652221922af32677c78ece6bf8c9f7994bb896
              <span role="img" aria-label="questions">
                📚
              </span>
              {chapter.questions} questions available
            </div>
            <button
<<<<<<< HEAD
              className="bg-[#2563eb] hover:bg-[#1976d2] text-white font-semibold rounded-lg px-6 py-2 mt-4 transition-all"
=======
              className="bg-[#2563eb] hover:bg-[#1976d2] text-white font-semibold rounded-xl px-8 py-3 mt-auto transition-all duration-200 text-base"
>>>>>>> 59652221922af32677c78ece6bf8c9f7994bb896
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
