import React, { useState } from "react";

// User avatar logic with gender-based icons
const getAvatar = (user, gender) => {
  if (user === "You") {
    return (
      <img
        src="https://icon-library.com/images/boy-icon-png/boy-icon-png-10.jpg"
        alt="Male Avatar"
        className="w-9 h-9 rounded-full"
      />
    );
  }
  if (gender === "female" || user === "StudyBuddy123") {
    return (
      <img
        src="https://tse4.mm.bing.net/th/id/OIP.a9137B32ljxbh-d58GkiuQHaHk?r=0&cb=thvnextc2&rs=1&pid=ImgDetMain&o=7&rm=3"
        alt="Female Avatar"
        className="w-9 h-9 rounded-full"
      />
    );
  }
  // Default male
  return (
    <img
      src="https://icon-library.com/images/boy-icon-png/boy-icon-png-10.jpg"
      alt="Male Avatar"
      className="w-9 h-9 rounded-full"
    />
  );
};

// Vibe SVG icon (custom, filled and outline)
const VibeIcon = ({ filled = false, size = 20 }) =>
  filled ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <g fill="none" fillRule="evenodd">
        <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
        <path
          fill="#ff4d4f"
          d="M9.5 1A2.5 2.5 0 0 0 7 3.5v6.962a4.7 4.7 0 0 0-.87-.584c-1.02-.518-2.01-.438-3.053-.012c-.84.345-1.107 1.308-.747 2.028l2.842 5.684A8 8 0 0 0 12.326 22H13a8 8 0 0 0 8-8V6.5a2.5 2.5 0 0 0-5 0v1.55a2.5 2.5 0 0 0-2 .45a2.5 2.5 0 0 0-2-.45V3.5A2.5 2.5 0 0 0 9.5 1m6.5 9.5a.5.5 0 1 0-1 0v.5a1 1 0 1 1-2 0v-.5a.5.5 0 1 0-1 0V12a1 1 0 1 1-2 0V3.5a.5.5 0 1 0-1 0V13a1 1 0 0 1-1.78.625c-.925-1.156-1.517-1.72-1.995-1.964a1.2 1.2 0 0 0-.835-.117l2.57 5.14A6 6 0 0 0 12.326 20H13a6 6 0 0 0 6-6V6.5a.5.5 0 1 0-1 0V12a1 1 0 1 1-2 0z"
        />
      </g>
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <g fill="none" fillRule="evenodd">
        <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
        <path
          fill="none"
          stroke="#222"
          strokeWidth="1.5"
          d="M9.5 1A2.5 2.5 0 0 0 7 3.5v6.962a4.7 4.7 0 0 0-.87-.584c-1.02-.518-2.01-.438-3.053-.012c-.84.345-1.107 1.308-.747 2.028l2.842 5.684A8 8 0 0 0 12.326 22H13a8 8 0 0 0 8-8V6.5a2.5 2.5 0 0 0-5 0v1.55a2.5 2.5 0 0 0-2 .45a2.5 2.5 0 0 0-2-.45V3.5A2.5 2.5 0 0 0 9.5 1m6.5 9.5a.5.5 0 1 0-1 0v.5a1 1 0 1 1-2 0v-.5a.5.5 0 1 0-1 0V12a1 1 0 1 1-2 0V3.5a.5.5 0 1 0-1 0V13a1 1 0 0 1-1.78.625c-.925-1.156-1.517-1.72-1.995-1.964a1.2 1.2 0 0 0-.835-.117l2.57 5.14A6 6 0 0 0 12.326 20H13a6 6 0 0 0 6-6V6.5a.5.5 0 1 0-1 0V12a1 1 0 1 1-2 0z"
        />
      </g>
    </svg>
  );

const SuggestionPop = ({
  onClose,
  suggestions: initialPropsSuggestions = [],
  onAddSuggestion,
}) => {
  const [suggestion, setSuggestion] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [vibed, setVibed] = useState({});

  // For demo, StudyBuddy123 is female, others are male
  const getGender = (user) => (user === "StudyBuddy123" ? "female" : "male");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!suggestion.trim()) return;
    setSubmitting(true);
    setTimeout(() => {
      const newSuggestions = [
        {
          text: suggestion,
          user: "You",
          date: new Date().toLocaleDateString(),
          likes: 0,
          gender: "male",
        },
        ...initialPropsSuggestions,
      ];
      onAddSuggestion(newSuggestions);
      setSuggestion("");
      setSubmitting(false);
    }, 700);
  };

  const handleVibe = (idx) => {
    const isVibed = vibed[idx];
    const newSuggestions = initialPropsSuggestions.map((s, i) =>
      i === idx ? { ...s, likes: Math.max(0, s.likes + (isVibed ? -1 : 1)) } : s
    );
    setVibed((prev) => ({ ...prev, [idx]: !isVibed }));
    onAddSuggestion(newSuggestions);
  };

  return (
    <div
      className="fixed inset-0 bg-black/20 flex items-center justify-center z-[9999]"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="pt-6 px-8 pb-0 rounded-t-2xl relative">
          <button
            onClick={onClose}
            className="absolute right-5 top-5 text-2xl text-gray-400 hover:text-gray-600"
            aria-label="Close"
          >
            ×
          </button>
          <div className="flex items-center gap-2">
            <span className="text-[#1976d2] font-semibold text-lg flex items-center gap-1.5">
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                <path
                  d="M3 21v-2a4 4 0 0 1 4-4h7a4 4 0 0 1 4 4v2"
                  stroke="#1976d2"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="12"
                  cy="7"
                  r="4"
                  stroke="#1976d2"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Community Suggestions
            </span>
          </div>
          <div className="text-gray-500 text-sm mt-1">
            Share your insights or learn from other students' suggestions
          </div>
        </div>
        {/* Suggestions List */}
        <div className="flex-1 overflow-y-auto pt-2 pb-2 max-h-[320px]">
          {initialPropsSuggestions.length === 0 ? (
            <div className="text-gray-400 text-center mt-8 text-base">
              No suggestions yet. Be the first to help!
            </div>
          ) : (
            initialPropsSuggestions.map((s, idx) => {
              const isVibed = vibed[idx];
              return (
                <div
                  key={idx}
                  className="flex items-start gap-3 bg-[#f8fafc] rounded-xl px-4 py-3 mx-6 mb-3 shadow-sm border border-[#e3eafc] relative"
                >
                  <div className="w-9 h-9 rounded-full bg-[#e3eafc] flex items-center justify-center overflow-hidden flex-shrink-0">
                    {getAvatar(s.user, s.gender || getGender(s.user))}
                  </div>
                  <div className="flex-1">
                    <div className="text-base text-gray-900 mb-1">{s.text}</div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="bg-[#e3eafc] text-[#1976d2] rounded-md px-2 py-0.5 text-xs font-medium">
                        {s.user}
                      </span>
                      <span className="text-gray-400 text-xs">{s.date}</span>
                      <button
                        onClick={() => handleVibe(idx)}
                        className={`ml-auto flex items-center gap-1.5 rounded-xl px-3 py-1 font-semibold text-sm border transition
                          ${
                            isVibed
                              ? "bg-[#fff1f0] border-[#ff4d4f] text-[#ff4d4f] shadow"
                              : "bg-white border-[#e3eafc] text-gray-700 hover:bg-[#f0f7ff]"
                          }
                        `}
                        aria-label="Vibe"
                      >
                        <VibeIcon filled={isVibed} size={20} />
                        <span>
                          {s.likes} {isVibed ? "vibed" : "vibe"}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
        {/* Comment Input at Bottom */}
        <form
          onSubmit={handleSubmit}
          className="border-t border-[#e3eafc] bg-[#f8fafc] rounded-b-2xl px-6 py-4 flex items-center gap-3 shadow-sm"
        >
          <div className="w-9 h-9 rounded-full bg-[#e3eafc] flex items-center justify-center overflow-hidden flex-shrink-0">
            <img
              src="https://icon-library.com/images/boy-icon-png/boy-icon-png-10.jpg"
              alt="Your Avatar"
              className="w-9 h-9 rounded-full"
            />
          </div>
          <input
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
            placeholder="Add a comment..."
            className="flex-1 border border-[#b6d0ff] rounded-xl px-4 py-2 text-base outline-none bg-white mr-2 transition"
            disabled={submitting}
            maxLength={250}
          />
          <button
            type="submit"
            disabled={submitting || !suggestion.trim()}
            className={`flex items-center gap-1.5 rounded-xl px-4 py-2 font-semibold text-base transition
              ${
                submitting || !suggestion.trim()
                  ? "bg-[#b6d0ff] cursor-not-allowed"
                  : "bg-[#1976d2] hover:bg-[#2563eb] cursor-pointer"
              } text-white shadow`}
          >
            <span className="text-lg">➤</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SuggestionPop;
