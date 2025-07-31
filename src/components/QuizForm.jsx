<<<<<<< HEAD
import React, { useState } from "react";
=======
import React, { useState, useEffect, useMemo } from "react";
>>>>>>> 59652221922af32677c78ece6bf8c9f7994bb896
import { useLocation, useNavigate } from "react-router-dom";
import quizData from "../Data/quizData";
import HintPop from "./hint_pop";
import SuggestionPop from "./Suggestion_pop";
import { motion as Motion } from "framer-motion";
<<<<<<< HEAD
=======
import useQuiz from "./useQuiz";
>>>>>>> 59652221922af32677c78ece6bf8c9f7994bb896

const QuizForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
<<<<<<< HEAD
=======
  const { state, dispatch } = useQuiz();
>>>>>>> 59652221922af32677c78ece6bf8c9f7994bb896
  const {
    testType = "JEE",
    subject = "Physics",
    chapter = "Mechanics",
  } = location.state || {};

<<<<<<< HEAD
  const questions = quizData?.[testType]?.[subject]?.[chapter] || [];
=======
  const questions = useMemo(
    () => quizData?.[testType]?.[subject]?.[chapter] || [],
    [testType, subject, chapter]
  );
>>>>>>> 59652221922af32677c78ece6bf8c9f7994bb896
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [questionSuggestions, setQuestionSuggestions] = useState({});
<<<<<<< HEAD
  const [answers, setAnswers] = useState([]);
=======

  // Initialize quiz data when component mounts
  useEffect(() => {
    if (questions.length > 0) {
      // Add IDs to questions if they don't have them
      const questionsWithIds = questions.map((q, index) => ({
        ...q,
        id: q.id || `question_${index}`,
      }));

      dispatch({
        type: "SET_QUIZ_DATA",
        payload: {
          questions: questionsWithIds,
          examName: testType,
          subjectName: subject,
          chapterName: chapter,
        },
      });
    }
  }, [testType, subject, chapter, questions, dispatch]);
>>>>>>> 59652221922af32677c78ece6bf8c9f7994bb896

  const totalQuestions = questions.length;
  const currentQuestion = questions[currentQuestionIndex];

  const handleNext = () => {
<<<<<<< HEAD
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
=======
    // Save the current answer
    const questionId =
      currentQuestion?.id || `question_${currentQuestionIndex}`;
    if (selectedOption !== null) {
      dispatch({
        type: "SET_ANSWER",
        payload: {
          questionId: questionId,
          answer: selectedOption,
        },
      });
    }

    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      // Load the next question's answer if it exists
      const nextQuestionId =
        questions[currentQuestionIndex + 1]?.id ||
        `question_${currentQuestionIndex + 1}`;
      const nextAnswer = state.answers[nextQuestionId];
      setSelectedOption(nextAnswer !== undefined ? nextAnswer : null);
    } else {
      // Calculate results from state.answers
      let correctCount = 0;
      let incorrectCount = 0;

      questions.forEach((question, idx) => {
        const qId = question.id || `question_${idx}`;
        const answer = state.answers[qId];
        if (answer !== undefined && answer !== null) {
          if (question.correctAnswer === answer) {
            correctCount++;
          } else {
            incorrectCount++;
          }
        }
      });

      // Add current answer to count if not saved yet
      if (selectedOption !== null) {
        if (currentQuestion.correctAnswer === selectedOption) {
          correctCount++;
        } else {
          incorrectCount++;
        }
      }

      navigate("/analysis", {
        state: {
          answers: state.answers,
>>>>>>> 59652221922af32677c78ece6bf8c9f7994bb896
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
<<<<<<< HEAD
      setSelectedOption(answers[currentQuestionIndex - 1] ?? null);
=======
      // Load the previous question's answer if it exists
      const prevQuestionId =
        questions[currentQuestionIndex - 1]?.id ||
        `question_${currentQuestionIndex - 1}`;
      const prevAnswer = state.answers[prevQuestionId];
      setSelectedOption(prevAnswer !== undefined ? prevAnswer : null);
>>>>>>> 59652221922af32677c78ece6bf8c9f7994bb896
    }
  };

  if (!currentQuestion) {
    return <div>No questions found for this chapter.</div>;
  }

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-white flex flex-col items-center">
      <div className="w-full max-w-3xl px-2 pt-10">
        {/* Header */}
        <div className="flex justify-center items-center relative">
          <h1 className="m-0 font-bold text-2xl">
            {testType} - {subject}
          </h1>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 font-bold text-base bg-white rounded-lg px-4 py-1 shadow">
=======
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center py-8">
      <div className="w-full max-w-5xl px-6">
        {/* Header */}
        <div className="flex justify-center items-center relative mb-8">
          <h1 className="m-0 font-bold text-3xl text-gray-800">
            {testType} - {subject}
          </h1>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 font-bold text-lg bg-white rounded-xl px-6 py-3 shadow-lg border border-blue-200">
>>>>>>> 59652221922af32677c78ece6bf8c9f7994bb896
            Question: {currentQuestionIndex + 1} / {totalQuestions}
          </div>
        </div>
        {/* Progress Bar */}
<<<<<<< HEAD
        <div className="mt-6 w-full">
          <div className="h-1.5 bg-[#e3eafc] rounded overflow-hidden mb-6">
            <div
              className="h-full bg-[#1976d2] transition-all"
=======
        <div className="w-full mb-8">
          <div className="h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-500 ease-out rounded-full"
>>>>>>> 59652221922af32677c78ece6bf8c9f7994bb896
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
<<<<<<< HEAD
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
=======
          className="bg-white rounded-3xl shadow-2xl max-w-4xl mx-auto p-12 border border-blue-100"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="flex items-center gap-6 mb-8">
            <h2 className="m-0 font-bold text-2xl text-gray-800">
              Question {currentQuestionIndex + 1}
            </h2>
            <span className="text-blue-700 bg-blue-50 rounded-2xl px-6 py-3 font-bold shadow-md border border-blue-200 ml-auto min-w-[140px] text-center text-base">
              Asked in: {currentQuestion.year || "N/A"}
            </span>
            <button
              className="ml-3 bg-yellow-50 border-2 border-yellow-200 rounded-xl px-5 py-3 text-lg cursor-pointer hover:bg-yellow-100 hover:border-yellow-300 hover:text-yellow-700 transition-all duration-300 font-medium shadow-md"
>>>>>>> 59652221922af32677c78ece6bf8c9f7994bb896
              onClick={() => setShowHint(true)}
            >
              💡 Hint
            </button>
            <button
<<<<<<< HEAD
              className="bg-[#f5faff] border border-[#e3eafc] rounded px-3 py-1 text-base cursor-pointer hover:bg-[#e3eafc] hover:border-[#1976d2] hover:text-[#1976d2] transition"
=======
              className="bg-green-50 border-2 border-green-200 rounded-xl px-5 py-3 text-lg cursor-pointer hover:bg-green-100 hover:border-green-300 hover:text-green-700 transition-all duration-300 font-medium shadow-md"
>>>>>>> 59652221922af32677c78ece6bf8c9f7994bb896
              onClick={() => setShowSuggestion(true)}
            >
              💬 Suggestions
            </button>
          </div>
<<<<<<< HEAD
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
=======
          <p className="mt-8 text-lg leading-relaxed text-gray-700 font-medium">
            {currentQuestion.text}
          </p>
          {currentQuestion.image && (
            <div className="mt-6 text-center">
              <img
                src={currentQuestion.image}
                alt="Question visual"
                className="max-w-full rounded-xl shadow-lg border border-gray-200"
              />
            </div>
          )}
          <div className="mt-10">
            {currentQuestion.options.map((option, index) => (
              <div
                key={index}
                className={`flex items-center mb-6 cursor-pointer rounded-2xl border-2 transition-all duration-300 px-8 py-5 text-lg font-medium shadow-md hover:shadow-lg ${
                  selectedOption === index
                    ? "bg-blue-50 border-blue-400 shadow-lg transform scale-105"
                    : "bg-white border-gray-200 hover:bg-blue-25 hover:border-blue-300"
>>>>>>> 59652221922af32677c78ece6bf8c9f7994bb896
                }`}
                onClick={() => setSelectedOption(index)}
              >
                <input
                  type="radio"
                  name="option"
                  readOnly
                  checked={selectedOption === index}
<<<<<<< HEAD
                  className="mr-4"
                />
                <label className="cursor-pointer">{option}</label>
=======
                  className="mr-6 w-5 h-5"
                />
                <label className="cursor-pointer leading-relaxed">
                  {option}
                </label>
>>>>>>> 59652221922af32677c78ece6bf8c9f7994bb896
              </div>
            ))}
          </div>
        </Motion.div>
        {/* Navigation Buttons */}
<<<<<<< HEAD
        <div className="flex justify-center gap-4 mt-8 mb-8">
=======
        <div className="flex justify-center gap-8 mt-12 mb-12">
>>>>>>> 59652221922af32677c78ece6bf8c9f7994bb896
          {/* Previous Button */}
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
<<<<<<< HEAD
            className={`px-7 py-3 rounded-lg border font-medium text-base transition
              ${
                currentQuestionIndex === 0
                  ? "bg-white border-[#e3eafc] text-gray-400 cursor-not-allowed opacity-60"
                  : "bg-white border-[#e3eafc] text-gray-900 hover:bg-[#f0f7ff] hover:border-[#1976d2] hover:text-[#1976d2] cursor-pointer"
              }`}
          >
            &lt; Previous
=======
            className={`px-10 py-4 rounded-2xl border-2 font-bold text-lg transition-all duration-300 shadow-lg flex items-center justify-center
              ${
                currentQuestionIndex === 0
                  ? "bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed opacity-50"
                  : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 hover:shadow-xl transform hover:scale-105 cursor-pointer"
              }`}
          >
            <img
              src="https://www.svgrepo.com/show/199349/previous-back.svg"
              alt="Previous"
              className="w-6 h-6 mr-3 filter"
              style={{
                filter:
                  currentQuestionIndex === 0
                    ? "grayscale(100%) opacity(0.5)"
                    : "none",
              }}
            />
            Previous
>>>>>>> 59652221922af32677c78ece6bf8c9f7994bb896
          </button>
          {/* Next/Submit Button */}
          <button
            onClick={handleNext}
<<<<<<< HEAD
            className={`px-7 py-3 rounded-lg border font-medium text-base transition
              border-[#F97316] text-[#F97316] bg-white hover:bg-[#FDBA74] hover:border-[#F97316] hover:text-white cursor-pointer`}
          >
            {currentQuestionIndex === totalQuestions - 1
              ? "Submit"
              : selectedOption === null
              ? "Skip"
              : "Next"}
=======
            className="px-10 py-4 rounded-2xl border-2 font-bold text-lg transition-all duration-300 shadow-lg flex items-center justify-center
              border-orange-400 text-orange-600 bg-white hover:bg-orange-500 hover:border-orange-500 hover:text-white hover:shadow-xl transform hover:scale-105 cursor-pointer"
          >
            {currentQuestionIndex === totalQuestions - 1 ? (
              <>
                <img
                  src="https://www.svgrepo.com/show/199351/next.svg"
                  alt="Submit"
                  className="w-6 h-6 mr-3"
                />
                Submit Quiz
              </>
            ) : selectedOption === null ? (
              <>
                <img
                  src="https://www.svgrepo.com/show/199351/next.svg"
                  alt="Skip"
                  className="w-6 h-6 mr-3"
                />
                Skip
              </>
            ) : (
              <>
                <img
                  src="https://www.svgrepo.com/show/199351/next.svg"
                  alt="Next"
                  className="w-6 h-6 mr-3"
                />
                Next
              </>
            )}
>>>>>>> 59652221922af32677c78ece6bf8c9f7994bb896
          </button>
        </div>
      </div>
      {/* HintPop Modal */}
      {showHint && (
        <div
<<<<<<< HEAD
          className="fixed inset-0 bg-black/25 flex items-center justify-center z-[9999]"
=======
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-[9999] backdrop-blur-sm"
>>>>>>> 59652221922af32677c78ece6bf8c9f7994bb896
          onClick={() => setShowHint(false)}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <HintPop question={currentQuestion.text} />
<<<<<<< HEAD
            <div className="text-center mt-4">
              <button
                onClick={() => setShowHint(false)}
                className="px-5 py-2 rounded bg-[#e3eafc] text-[#1976d2] border-none cursor-pointer font-medium"
=======
            <div className="text-center mt-6">
              <button
                onClick={() => setShowHint(false)}
                className="px-8 py-3 rounded-xl bg-blue-500 text-white border-none cursor-pointer font-bold text-lg hover:bg-blue-600 transition-all duration-300 shadow-lg"
>>>>>>> 59652221922af32677c78ece6bf8c9f7994bb896
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
