import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="home-page">
      <header className="hero-section">
        <h1 className="hero-title">Master Your Competitive Exams</h1>
        <p className="hero-subtitle">
          Practice with thousands of questions from JEE, NEET, UPSC, GATE, and more. Get AI-powered hints and track your progress.
        </p>
        <button className="app-btn hero-btn" onClick={() => navigate('/exams')}>
          <span role="img" aria-label="start quiz"></span> Start Quiz
        </button>
      </header>

      <section className="features-section">
        <h2 className="features-title">Why Choose Our Platform?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3 className="feature-card-title">Comprehensive Question Bank</h3>
            <p className="feature-card-text">Access thousands of questions from previous years across all major competitive exams.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💡</div>
            <h3 className="feature-card-title">AI-Powered Hints</h3>
            <p className="feature-card-text">Get intelligent hints when you're stuck, powered by advanced AI technology.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏆</div>
            <h3 className="feature-card-title">Track Progress</h3>
            <p className="feature-card-text">Monitor your performance with detailed analytics and score tracking.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 