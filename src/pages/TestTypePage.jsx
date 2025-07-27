import React from 'react';
import { useNavigate } from 'react-router-dom';

const SUBJECTS = [
  {
    key: 'Physics',
    icon: '📘',
    color: '#3d5afe',
    title: 'Physics',
    desc: 'Mechanics, Thermodynamics, Electromagnetism, Optics, and Modern Physics',
    chapters: 25,
    questions: 400,
  },
  {
    key: 'Chemistry',
    icon: '📗',
    color: '#43a047',
    title: 'Chemistry',
    desc: 'Physical, Organic, and Inorganic Chemistry concepts',
    chapters: 30,
    questions: 400,
  },
  {
    key: 'Mathematics',
    icon: '📙',
    color: '#8e24aa',
    title: 'Mathematics',
    desc: 'Algebra, Calculus, Coordinate Geometry, and Trigonometry',
    chapters: 20,
    questions: 400,
  },
];

const TestTypePage = () => {
  const navigate = useNavigate();

  const handleStart = (subject) => {
    navigate('/chapters', { state: { testType: 'JEE', subject } });
  };

  return (
    <div className="test-type-page">
      <div className="back-link" onClick={() => navigate(-1)}>
        <span className="back-arrow">←</span> Back to Exams
      </div>
      <h1 className="test-type-title">JEE (Joint Entrance Examination)</h1>
      <p className="test-type-subtitle">Choose a subject to start practicing</p>
      <div className="subject-cards-grid">
        {SUBJECTS.map((subj) => (
          <div
            className="subject-card"
            key={subj.key}
            style={{ borderTop: `4px solid ${subj.color}` }}
          >
            <div className="subject-icon" style={{ color: subj.color }}>{subj.icon}</div>
            <h2 className="subject-title">{subj.title}</h2>
            <div className="subject-desc">{subj.desc}</div>
            <div className="subject-meta">
              <span><span role="img" aria-label="chapters">📄</span> {subj.chapters} chapters</span>
              <span><span role="img" aria-label="questions">📚</span> {subj.questions} questions</span>
            </div>
            <button
              className="app-btn subject-btn"
              onClick={() => handleStart(subj.key)}
            >
              Start Practice
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestTypePage; 