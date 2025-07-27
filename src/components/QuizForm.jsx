import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // <-- Add useNavigate
import quizData from "../Data/quizData";
import HintPop from "./hint_pop";
import SuggestionPop from "./Suggestion_pop";

const QuizForm = () => {
  const location = useLocation();
  const navigate = useNavigate(); // <-- Add this line
  const {
    testType = "JEE",
    subject = "Physics",
    chapter = "Mechanics",
  } = location.state || {};

  const questions = quizData?.[testType]?.[subject]?.[chapter] || [];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [questionSuggestions, setQuestionSuggestions] = useState({});
  const [answers, setAnswers] = useState([]);

  const totalQuestions = questions.length;
  const currentQuestion = questions[currentQuestionIndex];

  const handleNext = () => {
    // Save answer if selected
    setAnswers((prev) => {
      const updated = [...prev];
      updated[currentQuestionIndex] = selectedOption;
      return updated;
    });

    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
    } else {
      // On submit, calculate stats and navigate to AnalysisPage
      let correctCount = 0;
      let incorrectCount = 0;
      questions.forEach((q, idx) => {
        if (answers[idx] === undefined && idx !== currentQuestionIndex) return;
        const answer =
          idx === currentQuestionIndex ? selectedOption : answers[idx];
        if (answer === undefined) return;
        if (q.correctOption === answer) correctCount++;
        else incorrectCount++;
      });
      navigate("/analysis", {
        state: {
          answers: [
            ...answers.slice(0, currentQuestionIndex),
            selectedOption,
            ...answers.slice(currentQuestionIndex + 1),
          ],
          correctCount,
          incorrectCount,
          totalQuestions,
          testType,
        },
      });
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedOption(answers[currentQuestionIndex - 1] ?? null);
    }
  };

  if (!currentQuestion) {
    return <div>No questions found for this chapter.</div>;
  }

  return (
    <div
      className="quiz-container"
      style={{ minHeight: "100vh", background: "#fff" }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto", paddingTop: 40 }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <h1 style={{ margin: 0, fontWeight: 700, fontSize: "2rem" }}>
            {testType} - {subject}
          </h1>
          <div
            style={{
              position: "absolute",
              right: 0,
              top: "50%",
              transform: "translateY(-50%)",
              fontWeight: "bold",
              fontSize: "1rem",
              background: "#fff",
              borderRadius: 8,
              padding: "4px 16px",
              boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
            }}
          >
            Question: {currentQuestionIndex + 1} / {totalQuestions}
          </div>
        </div>
        {/* Progress Bar */}
        <div style={{ margin: "24px 0 0 0", width: "100%" }}>
          <div
            style={{
              height: 6,
              background: "#e3eafc",
              borderRadius: 3,
              overflow: "hidden",
              marginBottom: 24,
            }}
          >
            <div
              style={{
                width: `${
                  ((currentQuestionIndex + 1) / totalQuestions) * 100
                }%`,
                height: "100%",
                background: "#1976d2",
                transition: "width 0.3s",
              }}
            ></div>
          </div>
        </div>
        {/* Quiz Card */}
        <div
          className="quiz-card"
          style={{
            background: "#fff",
            borderRadius: 16,
            boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
            maxWidth: 700,
            margin: "0 auto",
            padding: "32px 32px 24px 32px",
            marginTop: 0,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <h2 style={{ margin: 0, fontWeight: 600, fontSize: "1.2rem" }}>
              Question {currentQuestionIndex + 1}
            </h2>
            <span
              style={{
                fontSize: "0.98em",
                color: "#1976d2",
                background: "#e3eafc",
                borderRadius: "999px",
                padding: "4px 18px",
                fontWeight: 600,
                boxShadow: "0 1px 4px rgba(25, 118, 210, 0.08)",
                border: "1px solid #b6d0ff",
                marginLeft: "auto",
                letterSpacing: "0.02em",
                display: "inline-block",
                minWidth: 120,
                textAlign: "center",
              }}
            >
              Asked in: {currentQuestion.year || "N/A"}
            </span>
            <button
              className="hint-btn"
              style={{
                marginLeft: "auto",
                marginRight: 8,
                background: "#f5faff",
                border: "1px solid #e3eafc",
                borderRadius: 6,
                padding: "4px 12px",
                fontSize: "1em",
                cursor: "pointer",
              }}
              onClick={() => setShowHint(true)}
            >
              💡 Hint
            </button>
            <button
              className="suggestions-btn"
              style={{
                background: "#f5faff",
                border: "1px solid #e3eafc",
                borderRadius: 6,
                padding: "4px 12px",
                fontSize: "1em",
                cursor: "pointer",
              }}
              onClick={() => setShowSuggestion(true)} // <-- Show suggestion pop
            >
              💬 Suggestions
            </button>
          </div>
          <p
            className="question-text"
            style={{ marginTop: 24, fontSize: "1.1rem" }}
          >
            {currentQuestion.text}
          </p>
          {currentQuestion.image && (
            <div className="question-image-wrapper" style={{ marginTop: 16 }}>
              <img
                src={currentQuestion.image}
                alt="Question visual"
                className="question-image"
                style={{ maxWidth: "100%", borderRadius: 8 }}
              />
            </div>
          )}
          <div className="options-list" style={{ marginTop: 32 }}>
            {currentQuestion.options.map((option, index) => (
              <div
                key={index}
                className={`option-item ${
                  selectedOption === index ? "selected" : ""
                }`}
                onClick={() => setSelectedOption(index)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 18,
                  cursor: "pointer",
                  borderRadius: 8,
                  border:
                    selectedOption === index
                      ? "2px solid #1976d2"
                      : "1px solid #e3eafc",
                  padding: "14px 18px",
                  background: selectedOption === index ? "#f0f7ff" : "#fff",
                  fontSize: "1.05em",
                  transition: "border 0.2s, background 0.2s",
                }}
              >
                <input
                  type="radio"
                  name="option"
                  readOnly
                  checked={selectedOption === index}
                  style={{ marginRight: 14 }}
                />
                <label style={{ cursor: "pointer" }}>{option}</label>
              </div>
            ))}
          </div>
        </div>
        {/* Navigation Buttons */}
        <div
          className="quiz-navigation"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 16,
            marginTop: 32,
            marginBottom: 32,
          }}
        >
          {/* Previous Button (blue theme) */}
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            style={{
              padding: "10px 28px",
              borderRadius: 8,
              border: "1px solid #e3eafc",
              background: "#fff",
              fontWeight: 500,
              fontSize: "1em",
              cursor: currentQuestionIndex === 0 ? "not-allowed" : "pointer",
              opacity: currentQuestionIndex === 0 ? 0.6 : 1,
              transition: "background 0.2s, border 0.2s, color 0.2s",
            }}
            onMouseOver={(e) => {
              if (currentQuestionIndex !== 0) {
                e.currentTarget.style.background = "#f0f7ff";
                e.currentTarget.style.border = "1.5px solid #1976d2";
                e.currentTarget.style.color = "#1976d2";
              }
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "#fff";
              e.currentTarget.style.border = "1px solid #e3eafc";
              e.currentTarget.style.color = "#222";
            }}
          >
            &lt; Previous
          </button>

          {/* Next/Submit Button (orange theme) */}
          <button
            onClick={handleNext}
            style={{
              padding: "10px 28px",
              borderRadius: 8,
              border: "1px solid #F97316",
              background: "#fff",
              fontWeight: 500,
              fontSize: "1em",
              color: "#F97316",
              cursor: "pointer",
              transition: "background 0.2s, border 0.2s, color 0.2s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "#FDBA74";
              e.currentTarget.style.border = "1.5px solid #F97316";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "#fff";
              e.currentTarget.style.border = "1px solid #F97316";
              e.currentTarget.style.color = "#F97316";
            }}
          >
            {currentQuestionIndex === totalQuestions - 1
              ? "Submit"
              : selectedOption === null
              ? "Skip"
              : "Next"}
          </button>
        </div>
      </div>
      {/* HintPop Modal */}
      {showHint && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
          onClick={() => setShowHint(false)}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <HintPop question={currentQuestion.text} />
            <div style={{ textAlign: "center", marginTop: 16 }}>
              <button
                onClick={() => setShowHint(false)}
                style={{
                  padding: "8px 20px",
                  borderRadius: 6,
                  background: "#e3eafc",
                  color: "#1976d2",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: 500,
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      {/* SuggestionPop Modal */}
      {showSuggestion && (
        <SuggestionPop
          onClose={() => setShowSuggestion(false)}
          suggestions={questionSuggestions[currentQuestionIndex] || []}
          onAddSuggestion={(newSuggestions) => {
            setQuestionSuggestions((prev) => ({
              ...prev,
              [currentQuestionIndex]: newSuggestions,
            }));
          }}
        />
      )}
    </div>
  );
};

export default QuizForm;
