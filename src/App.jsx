
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TestTypePage from "./pages/TestTypePage";
import QuizForm from "./components/QuizForm";
import AnalysisPage from "./pages/AnalysisPage";
import Layout from "./Layouts/Layout";
import ExamSelectionPage from "./pages/ExamSelectionPage";
import ChapterSelectionPage from "./pages/ChapterSelectionPage";
import ReviewPage from "./pages/ReviewPage";
import { QuizProvider } from "./components/quiz-provider";

function App() {
  return (
    <QuizProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/exams" element={<ExamSelectionPage />} />
            <Route path="/test-type" element={<TestTypePage />} />
            <Route path="/chapters" element={<ChapterSelectionPage />} />
            <Route path="/quiz" element={<QuizForm />} />
            <Route path="/analysis" element={<AnalysisPage />} />
            <Route path="/review" element={<ReviewPage />} />
          </Routes>
        </Layout>
      </Router>
    </QuizProvider>
  );
}

export default App;
