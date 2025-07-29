import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import quizData from "../Data/quizData";
import HintPop from "./hint_pop";
import SuggestionPop from "./Suggestion_pop";
import { motion as Motion } from "framer-motion";

const QuizForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
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
    setAnswers((prev) => {
      const updated = [...prev];
      updated[currentQuestionIndex] = selectedOption;
      return updated;
    });

    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
    } else {
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
    <div className="min-h-screen bg-white flex flex-col items-center">
      <div className="w-full max-w-3xl px-2 pt-10">
        {/* Header */}
        <div className="flex justify-center items-center relative">
          <h1 className="m-0 font-bold text-2xl">
            {testType} - {subject}
          </h1>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 font-bold text-base bg-white rounded-lg px-4 py-1 shadow">
            Question: {currentQuestionIndex + 1} / {totalQuestions}
          </div>
        </div>
        {/* Progress Bar */}
        <div className="mt-6 w-full">
          <div className="h-1.5 bg-[#e3eafc] rounded overflow-hidden mb-6">
            <div
              className="h-full bg-[#1976d2] transition-all"
              style={{
                width: `${
                  ((currentQuestionIndex + 1) / totalQuestions) * 100
                }%`,
              }}
            ></div>
          </div>
        </div>
        {/* Quiz Card */}
        <Motion.div
          className="bg-white rounded-2xl shadow-lg max-w-2xl mx-auto p-8 mt-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4">
            <h2 className="m-0 font-semibold text-lg">
              Question {currentQuestionIndex + 1}
            </h2>
            <span className="text-[#1976d2] bg-[#e3eafc] rounded-full px-4 py-1 font-semibold shadow border border-[#b6d0ff] ml-auto min-w-[120px] text-center text-sm">
              Asked in: {currentQuestion.year || "N/A"}
            </span>
            <button
              className="ml-2 bg-[#f5faff] border border-[#e3eafc] rounded px-3 py-1 text-base cursor-pointer hover:bg-[#e3eafc] hover:border-[#1976d2] hover:text-[#1976d2] transition"
              onClick={() => setShowHint(true)}
            >
              💡 Hint
            </button>
            <button
              className="bg-[#f5faff] border border-[#e3eafc] rounded px-3 py-1 text-base cursor-pointer hover:bg-[#e3eafc] hover:border-[#1976d2] hover:text-[#1976d2] transition"
              onClick={() => setShowSuggestion(true)}
            >
              💬 Suggestions
            </button>
          </div>
          <p className="mt-6 text-base">{currentQuestion.text}</p>
          {currentQuestion.image && (
            <div className="mt-4 text-center">
              <img
                src={currentQuestion.image}
                alt="Question visual"
                className="max-w-full rounded"
              />
            </div>
          )}
          <div className="mt-8">
            {currentQuestion.options.map((option, index) => (
              <div
                key={index}
                className={`flex items-center mb-4 cursor-pointer rounded-lg border transition px-5 py-3 text-base ${
                  selectedOption === index
                    ? "bg-[#f0f7ff] border-2 border-[#1976d2] shadow"
                    : "bg-white border border-[#e3eafc] hover:bg-[#e3eafc] hover:border-[#1976d2]"
                }`}
                onClick={() => setSelectedOption(index)}
              >
                <input
                  type="radio"
                  name="option"
                  readOnly
                  checked={selectedOption === index}
                  className="mr-4"
                />
                <label className="cursor-pointer">{option}</label>
              </div>
            ))}
          </div>
        </Motion.div>
        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-8 mb-8">
          {/* Previous Button */}
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className={`px-7 py-3 rounded-lg border font-medium text-base transition
              ${
                currentQuestionIndex === 0
                  ? "bg-white border-[#e3eafc] text-gray-400 cursor-not-allowed opacity-60"
                  : "bg-white border-[#e3eafc] text-gray-900 hover:bg-[#f0f7ff] hover:border-[#1976d2] hover:text-[#1976d2] cursor-pointer"
              }`}
          >
            &lt; Previous
          </button>
          {/* Next/Submit Button */}
          <button
            onClick={handleNext}
            className={`px-7 py-3 rounded-lg border font-medium text-base transition
              border-[#F97316] text-[#F97316] bg-white hover:bg-[#FDBA74] hover:border-[#F97316] hover:text-white cursor-pointer`}
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
          className="fixed inset-0 bg-black/25 flex items-center justify-center z-[9999]"
          onClick={() => setShowHint(false)}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <HintPop question={currentQuestion.text} />
            <div className="text-center mt-4">
              <button
                onClick={() => setShowHint(false)}
                className="px-5 py-2 rounded bg-[#e3eafc] text-[#1976d2] border-none cursor-pointer font-medium"
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
