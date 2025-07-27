import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TestTypePage from './pages/TestTypePage';
import QuizForm from './components/QuizForm';
import AnalysisPage from './pages/AnalysisPage';
import Layout from './Layouts/Layout';
import ExamSelectionPage from './pages/ExamSelectionPage';
import ChapterSelectionPage from './pages/ChapterSelectionPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/exams" element={<ExamSelectionPage />} />
          <Route path="/test-type" element={<TestTypePage />} />
          <Route path="/chapters" element={<ChapterSelectionPage />} />
          <Route path="/quiz" element={<QuizForm />} />
          <Route path="/analysis" element={<AnalysisPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;