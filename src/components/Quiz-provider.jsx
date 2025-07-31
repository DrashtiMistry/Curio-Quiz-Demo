import React, { createContext, useReducer } from "react";

export const QuizContext = createContext();
const initialState = {
  questions: [],
  answers: {},
  examName: "",
  subjectName: "",
  chapterName: "",
  currentQuestionIndex: 0,
  isCompleted: false,
  score: 0,
};

const quizReducer = (state, action) => {
  switch (action.type) {
    case "SET_QUIZ_DATA":
      return {
        ...state,
        questions: action.payload.questions,
        examName: action.payload.examName,
        subjectName: action.payload.subjectName,
        chapterName: action.payload.chapterName,
      };
    case "SET_ANSWER":
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.payload.questionId]: action.payload.answer,
        },
      };
    case "SET_CURRENT_QUESTION":
      return {
        ...state,
        currentQuestionIndex: action.payload,
      };
    case "COMPLETE_QUIZ":
      return {
        ...state,
        isCompleted: true,
        score: action.payload.score,
      };
    case "RESET_QUIZ":
      return initialState;
    default:
      return state;
  }
};

export const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};
