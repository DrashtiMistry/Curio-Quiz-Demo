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
      difficultyColor: "#f57c00",
    },
    {
      key: "thermo",
      title: "Thermodynamics",
      desc: "Practice questions from thermodynamics",
      questions: 30,
      difficulty: "Hard",
      difficultyColor: "#d32f2f",
    },
    {
      key: "em",
      title: "Electromagnetism",
      desc: "Practice questions from electromagnetism",
      questions: 45,
      difficulty: "Hard",
      difficultyColor: "#d32f2f",
    },
    {
      key: "optics",
      title: "Optics",
      desc: "Practice questions from optics",
      questions: 25,
      difficulty: "Medium",
      difficultyColor: "#f57c00",
    },
    {
      key: "modern",
      title: "Modern Physics",
      desc: "Practice questions from modern physics",
      questions: 35,
      difficulty: "Hard",
      difficultyColor: "#d32f2f",
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
    // Find the chapter object by key
    const chapterObj = chapters.find((c) => c.key === chapterKey);
    // Use the title property (capitalized) for quizData lookup
    navigate("/quiz", {
      state: { testType, subject, chapter: chapterObj.title },
    });
  };

  return (
    <div className="chapter-selection-page">
      <div className="back-link" onClick={() => navigate(-1)}>
        <span className="back-arrow">←</span> Back to Subjects
      </div>
      <h1 className="chapter-selection-title">
        {testType} - {subject}
      </h1>
      <p className="chapter-selection-subtitle">
        Select a chapter to start your quiz
      </p>
      <div className="chapter-cards-grid">
        {chapters.map((chapter) => (
          <div className="chapter-card" key={chapter.key}>
            <div className="chapter-card-header">
              <h2 className="chapter-title">{chapter.title}</h2>
              <div
                className="chapter-difficulty"
                style={{ backgroundColor: chapter.difficultyColor }}
              >
                {chapter.difficulty}
              </div>
            </div>
            <p className="chapter-desc">{chapter.desc}</p>
            <div className="chapter-meta">
              <span>
                <span role="img" aria-label="questions">
                  📚
                </span>{" "}
                {chapter.questions} questions available
              </span>
            </div>
            <button
              className="app-btn chapter-btn"
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
