import React from "react";
import { useNavigate } from "react-router-dom";

const EXAMS = [
  {
    key: "JEE",
    title: "JEE (Joint Entrance Examination)",
    desc: "Engineering entrance exam for IITs, NITs, and other technical institutes",
    subjects: ["Physics", "Chemistry", "Mathematics"],
    questions: 1200,
    duration: 3,
    difficulty: "High",
    difficultyColor: "bg-blue-600",
    image: "https://www.svgrepo.com/show/288255/exam.svg",
  },
  {
    key: "NEET",
    title: "NEET (National Eligibility cum Entrance Test)",
    desc: "Medical entrance exam for MBBS, BDS, and other medical courses",
    subjects: ["Physics", "Chemistry", "Biology"],
    questions: 800,
    duration: 3,
    difficulty: "High",
    difficultyColor: "bg-blue-600",
    image: "https://www.svgrepo.com/show/288255/exam.svg",
  },
  {
    key: "UPSC",
    title: "UPSC (Union Public Service Commission)",
    desc: "Civil services examination for IAS, IPS, and other government services",
    subjects: ["General Studies", "Optional Subject", "Essay"],
    questions: 2000,
    duration: "Varies",
    difficulty: "Very High",
    difficultyColor: "bg-red-600",
    image: "https://www.svgrepo.com/show/288255/exam.svg",
  },
  {
    key: "GATE",
    title: "GATE (Graduate Aptitude Test in Engineering)",
    desc: "Entrance exam for M.Tech admissions and PSU recruitments",
    subjects: ["Engineering Mathematics", "Core Subject", "General Aptitude"],
    questions: 1500,
    duration: 3,
    difficulty: "High",
    difficultyColor: "bg-blue-600",
    image: "https://www.svgrepo.com/show/288255/exam.svg",
  },
  {
    key: "GUJCET",
    title: "GUJCET (Gujarat Common Entrance Test)",
    desc: "State-level entrance exam for engineering and pharmacy courses in Gujarat",
    subjects: ["Physics", "Chemistry", "Mathematics"],
    questions: 600,
    duration: 3,
    difficulty: "Medium",
    difficultyColor: "bg-orange-500",
    image: "https://www.svgrepo.com/show/288255/exam.svg",
  },
  {
    key: "NDA",
    title: "NDA (National Defence Academy)",
    desc: "Entrance exam for Indian Army, Navy, and Air Force",
    subjects: ["Mathematics", "General Ability Test"],
    questions: 900,
    duration: 4.5,
    difficulty: "Medium",
    difficultyColor: "bg-orange-500",
    image: "https://www.svgrepo.com/show/288255/exam.svg",
  },
];

const ExamSelectionPage = () => {
  const navigate = useNavigate();

  const handleExamSelect = (exam) => {
    navigate("/test-type", { state: { exam } });
  };

  return (
    <div className="min-h-screen bg-[#f7f9fc] py-12 px-2">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center text-[#1976d2] mb-2">
        Choose Your Exam
      </h1>
      <p className="text-lg text-gray-600 text-center mb-10">
        Select the competitive exam you want to practice for
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 max-w-7xl mx-auto px-4">
        {EXAMS.map((exam) => (
          <div
            key={exam.key}
            className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer p-8 flex flex-col gap-4 border border-transparent hover:border-blue-200 hover:scale-[1.02] min-h-[320px]"
            onClick={() => handleExamSelect(exam)}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-16 h-16 flex items-center justify-center bg-gray-50 rounded-2xl">
                <img
                  src={exam.image}
                  alt={`${exam.key} Icon`}
                  className="w-12 h-12 text-gray-600"
                />
              </div>
              <div
                className={`px-4 py-2 rounded-xl text-sm font-bold text-white ${exam.difficultyColor}`}
              >
                {exam.difficulty}
              </div>
            </div>
            <h2 className="font-bold text-xl text-gray-900 mb-2">
              {exam.title}
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              {exam.desc}
            </p>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-gray-500 text-sm font-medium">
                Subjects:
              </span>
              {exam.subjects.map((s) => (
                <span
                  key={s}
                  className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-sm font-semibold"
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between mt-auto pt-4 text-base text-gray-500 font-medium border-t border-gray-100">
              <span>
                <span role="img" aria-label="questions">
                  📚
                </span>{" "}
                {exam.questions} questions
              </span>
              <span>
                <span role="img" aria-label="duration">
                  🕒
                </span>{" "}
                {exam.duration} hours
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExamSelectionPage;
