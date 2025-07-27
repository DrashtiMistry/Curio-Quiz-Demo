import React from 'react';
import { useNavigate } from 'react-router-dom';

const EXAMS = [
  {
    key: 'JEE',
    title: 'JEE (Joint Entrance Examination)',
    desc: 'Engineering entrance exam for IITs, NITs, and other technical institutes',
    subjects: ['Physics', 'Chemistry', 'Mathematics'],
    questions: 1200,
    duration: 3,
    difficulty: 'High',
    difficultyColor: '#3d5afe',
    icon: '📘',
  },
  {
    key: 'NEET',
    title: 'NEET (National Eligibility cum Entrance Test)',
    desc: 'Medical entrance exam for MBBS, BDS, and other medical courses',
    subjects: ['Physics', 'Chemistry', 'Biology'],
    questions: 800,
    duration: 3,
    difficulty: 'High',
    difficultyColor: '#3d5afe',
    icon: '📗',
  },
  {
    key: 'UPSC',
    title: 'UPSC (Union Public Service Commission)',
    desc: 'Civil services examination for IAS, IPS, and other government services',
    subjects: ['General Studies', 'Optional Subject', 'Essay'],
    questions: 2000,
    duration: 'Varies',
    difficulty: 'Very High',
    difficultyColor: '#d32f2f',
    icon: '📙',
  },
  {
    key: 'GATE',
    title: 'GATE (Graduate Aptitude Test in Engineering)',
    desc: 'Entrance exam for M.Tech admissions and PSU recruitments',
    subjects: ['Engineering Mathematics', 'Core Subject', 'General Aptitude'],
    questions: 1500,
    duration: 3,
    difficulty: 'High',
    difficultyColor: '#3d5afe',
    icon: '📕',
  },
  {
    key: 'GUJCET',
    title: 'GUJCET (Gujarat Common Entrance Test)',
    desc: 'State-level entrance exam for engineering and pharmacy courses in Gujarat',
    subjects: ['Physics', 'Chemistry', 'Mathematics'],
    questions: 600,
    duration: 3,
    difficulty: 'Medium',
    difficultyColor: '#f57c00',
    icon: '📗',
  },
  {
    key: 'NDA',
    title: 'NDA (National Defence Academy)',
    desc: 'Entrance exam for Indian Army, Navy, and Air Force',
    subjects: ['Mathematics', 'General Ability Test'],
    questions: 900,
    duration: 4.5,
    difficulty: 'Medium',
    difficultyColor: '#f57c00',
    icon: '📕',
  },
];

const ExamSelectionPage = () => {
  const navigate = useNavigate();

  const handleExamSelect = (exam) => {
    navigate('/test-type', { state: { exam } });
  };

  return (
    <div className="exam-selection-page">
      <h1 className="exam-selection-title">Choose Your Exam</h1>
      <p className="exam-selection-subtitle">Select the competitive exam you want to practice for</p>
      <div className="exam-cards-grid">
        {EXAMS.map((exam) => (
          <div
            className="exam-card"
            key={exam.key}
            onClick={() => handleExamSelect(exam)}
          >
            <div className="exam-card-header">
              <div className="exam-icon" style={{ backgroundColor: exam.difficultyColor }}>{exam.icon}</div>
              <div className="exam-difficulty" style={{ backgroundColor: exam.difficultyColor }}>
                {exam.difficulty}
              </div>
            </div>
            <h2 className="exam-title">{exam.title}</h2>
            <p className="exam-desc">{exam.desc}</p>
            <div className="exam-subjects">
              <span>Subjects:</span>
              {exam.subjects.map(s => <div key={s} className="subject-tag">{s}</div>)}
            </div>
            <div className="exam-meta">
              <span><span role="img" aria-label="questions">📚</span> {exam.questions} questions</span>
              <span><span role="img" aria-label="duration">🕒</span> {exam.duration} hours</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExamSelectionPage; 