import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import useQuiz from "../components/useQuiz";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  ArrowLeft,
  CheckCircle,
  XCircle,
  MinusCircle,
} from "../components/icons";
import Loader from "../components/Loader";

export default function ReviewPage() {
  const { state } = useQuiz();
  const navigate = useNavigate();

  // Debug logging
  console.log("ReviewPage state:", state);
  console.log("Questions:", state.questions);
  console.log("Answers:", state.answers);

  useEffect(() => {
    if (state.questions.length === 0) {
      navigate("/exams");
    }
  }, [state.questions.length, navigate]);

  if (state.questions.length === 0) {
    return <Loader />;
  }

  return (
    <Motion.div
      className="container max-w-4xl py-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Motion.div
        className="flex items-center gap-4 mb-6"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        <button
          onClick={() => navigate("/analysis")}
          className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Analysis
        </button>
      </Motion.div>

      <Motion.div
        className="text-center mb-8"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        <h1 className="text-3xl font-bold mb-2">Answer Review</h1>
        <p className="text-gray-600">
          {state.examName} - {state.subjectName}
        </p>
      </Motion.div>

      <div className="space-y-6">
        {state.questions.map((question, index) => {
          const userAnswer = state.answers[question.id];
          const isCorrect = userAnswer === question.correctAnswer;
          const isSkipped = userAnswer === null || userAnswer === undefined;

          return (
            <Motion.div
              key={question.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="overflow-hidden">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">
                      Question {index + 1}
                    </CardTitle>
                    <div className="flex items-center gap-2">
                      {question.year && (
                        <Badge variant="outline">{question.year}</Badge>
                      )}
                      <Badge
                        variant={
                          isSkipped
                            ? "secondary"
                            : isCorrect
                            ? "default"
                            : "destructive"
                        }
                        className="flex items-center gap-1"
                      >
                        {isSkipped ? (
                          <>
                            <MinusCircle className="h-3 w-3" />
                            Skipped
                          </>
                        ) : isCorrect ? (
                          <>
                            <CheckCircle className="h-3 w-3" />
                            Correct
                          </>
                        ) : (
                          <>
                            <XCircle className="h-3 w-3" />
                            Incorrect
                          </>
                        )}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg mb-6 leading-relaxed">
                    {question.text}
                  </p>

                  <div className="space-y-3 mb-6">
                    {question.options.map((option, optionIndex) => {
                      const isUserAnswer = userAnswer === optionIndex;
                      const isCorrectAnswer =
                        optionIndex === question.correctAnswer;

                      let className =
                        "w-full p-4 text-left rounded-lg border-2 transition-all ";

                      if (isCorrectAnswer) {
                        className += "border-green-500 bg-green-50 ";
                      } else if (isUserAnswer && !isCorrect) {
                        className += "border-red-500 bg-red-50 ";
                      } else {
                        className += "border-gray-200 ";
                      }

                      return (
                        <Motion.div
                          key={optionIndex}
                          className={className}
                          whileHover={{ scale: 1.01 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="flex items-center">
                            <div
                              className={`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center ${
                                isCorrectAnswer
                                  ? "border-green-500 bg-green-500"
                                  : isUserAnswer && !isCorrect
                                  ? "border-red-500 bg-red-500"
                                  : "border-gray-300"
                              }`}
                            >
                              {(isCorrectAnswer ||
                                (isUserAnswer && !isCorrect)) && (
                                <div className="w-2 h-2 rounded-full bg-white" />
                              )}
                            </div>
                            <span className="font-medium mr-2">
                              {String.fromCharCode(65 + optionIndex)}.
                            </span>
                            <span>{option}</span>
                            {isCorrectAnswer && (
                              <CheckCircle className="h-4 w-4 text-green-600 ml-auto" />
                            )}
                            {isUserAnswer && !isCorrect && (
                              <XCircle className="h-4 w-4 text-red-600 ml-auto" />
                            )}
                          </div>
                        </Motion.div>
                      );
                    })}
                  </div>

                  {question.explanation && (
                    <Motion.div
                      className="bg-blue-50 p-4 rounded-lg"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      <h4 className="font-medium text-blue-900 mb-2">
                        Explanation:
                      </h4>
                      <p className="text-sm text-blue-800 leading-relaxed">
                        {question.explanation}
                      </p>
                    </Motion.div>
                  )}
                </CardContent>
              </Card>
            </Motion.div>
          );
        })}
      </div>

      <Motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      >
        <button
          onClick={() => navigate("/chapters")}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
        >
          Back to Chapters
        </button>
      </Motion.div>
    </Motion.div>
  );
}
