import React from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen, Clock, GraduationCap, Stethoscope, Building2, Shield, Users, FileText, Lock } from "lucide-react";

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
    // icon: GraduationCap,
    image: "https://www.svgrepo.com/show/288275/exam.svg",
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
    // icon: Stethoscope,
    image: "https://www.svgrepo.com/show/288275/exam.svg",
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
    // icon: Building2,
    image: "https://www.svgrepo.com/show/288275/exam.svg",
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
    comingSoon: true,
    // icon: Users,
    image: "https://www.svgrepo.com/show/288275/exam.svg",
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
    comingSoon: true,
    // icon: FileText,
    image: "https://www.svgrepo.com/show/288275/exam.svg",
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
    comingSoon: true,
    // icon: Shield,
    image: "https://www.svgrepo.com/show/288275/exam.svg",
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
            className={`relative bg-white rounded-3xl shadow-xl transition-all duration-300 min-h-[280px] ${
              exam.comingSoon 
                ? "opacity-60" 
                : "cursor-pointer hover:shadow-2xl hover:border-blue-200 hover:scale-[1.02] border border-transparent"
            }`}
            onClick={() => !exam.comingSoon && handleExamSelect(exam)}
          >
            <div className="p-6 flex flex-col gap-3">
              <div className="flex items-center justify-between mb-3">
                <div className="w-14 h-14 flex items-center justify-center bg-gray-50 rounded-2xl">
                  {exam.key === "JEE" && <GraduationCap size={32} className="text-gray-600" />}
                  {exam.key === "NEET" && <Stethoscope size={32} className="text-gray-600" />}
                  {exam.key === "GUJCET" && <Building2 size={32} className="text-gray-600" />}
                  {exam.key === "UPSC" && <Users size={32} className="text-gray-600" />}
                  {exam.key === "GATE" && <FileText size={32} className="text-gray-600" />}
                  {exam.key === "NDA" && <Shield size={32} className="text-gray-600" />}
                </div>
                <div
                  className={`px-3 py-1.5 rounded-xl text-sm font-bold text-white ${exam.difficultyColor}`}
                >
                  {exam.difficulty}
                </div>
              </div>

              <h2 className="font-bold text-xl text-gray-900 mb-2">
                {exam.title}
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-3">
                {exam.desc}
              </p>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-gray-500 text-sm font-medium">
                  Subjects:
                </span>
                {exam.subjects.map((s) => (
                  <span
                    key={s}
                    className="bg-blue-50 text-blue-700 px-2 py-1 rounded-lg text-sm font-semibold"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between mt-auto pt-3 text-base text-gray-500 font-medium border-t border-gray-100">
                <span className="flex items-center gap-1">
                  <BookOpen className="w-4 h-4" />
                  {exam.questions} questions
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {exam.duration} hours
                </span>
              </div>
            </div>

            {/* Coming Soon Overlay */}
            {exam.comingSoon && (
              <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-3xl flex flex-col items-center justify-center">
                <div className="bg-gray-800/90 rounded-full p-4 mb-4">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Coming Soon</h3>
                  <p className="text-gray-600 text-sm">This exam will be available soon!</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExamSelectionPage;
