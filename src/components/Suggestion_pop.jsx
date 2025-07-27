import React, { useState } from "react";

// User avatar logic with gender-based icons
const getAvatar = (user, gender) => {
  if (user === "You") {
    return (
      <img
        src="https://icon-library.com/images/boy-icon-png/boy-icon-png-10.jpg"
        alt="Male Avatar"
        style={{ width: 36, height: 36, borderRadius: "50%" }}
      />
    );
  }
  if (gender === "female" || user === "StudyBuddy123") {
    return (
      <img
        src="https://tse4.mm.bing.net/th/id/OIP.a9137B32ljxbh-d58GkiuQHaHk?r=0&cb=thvnextc2&rs=1&pid=ImgDetMain&o=7&rm=3"
        alt="Female Avatar"
        style={{ width: 36, height: 36, borderRadius: "50%" }}
      />
    );
  }
  // Default male
  return (
    <img
      src="https://icon-library.com/images/boy-icon-png/boy-icon-png-10.jpg"
      alt="Male Avatar"
      style={{ width: 36, height: 36, borderRadius: "50%" }}
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
  const [vibed, setVibed] = useState({}); // {idx: true/false}

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
          gender: "male", // or "female" if you want to support gender selection
        },
        ...initialPropsSuggestions,
      ];
      onAddSuggestion(newSuggestions);
      setSuggestion("");
      setSubmitting(false);
    }, 700);
  };

  // Toggle vibe: if vibed, remove vibe; if not, add vibe
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
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.18)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: 18,
          boxShadow: "0 8px 32px rgba(25,118,210,0.12)",
          maxWidth: 440,
          width: "100%",
          padding: 0,
          position: "relative",
          display: "flex",
          flexDirection: "column",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            padding: "22px 32px 0 32px",
            borderTopLeftRadius: 18,
            borderTopRightRadius: 18,
          }}
        >
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              right: 18,
              top: 18,
              background: "none",
              border: "none",
              fontSize: 22,
              color: "#888",
              cursor: "pointer",
            }}
            aria-label="Close"
          >
            ×
          </button>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span
              style={{
                color: "#1976d2",
                fontWeight: 600,
                fontSize: "1.18rem",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
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
          <div style={{ color: "#5c6f8c", fontSize: "0.98em", marginTop: 2 }}>
            Share your insights or learn from other students' suggestions
          </div>
        </div>
        {/* Suggestions List */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "8px 0 0 0",
            margin: "0 0 0 0",
            maxHeight: 320,
          }}
        >
          {initialPropsSuggestions.length === 0 ? (
            <div
              style={{
                color: "#888",
                fontSize: "0.98em",
                textAlign: "center",
                marginTop: 32,
              }}
            >
              No suggestions yet. Be the first to help!
            </div>
          ) : (
            initialPropsSuggestions.map((s, idx) => {
              const isVibed = vibed[idx];
              return (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                    background: "#f8fafc",
                    borderRadius: 12,
                    padding: "14px 16px",
                    margin: "0 24px 14px 24px",
                    boxShadow: "0 1px 6px rgba(25,118,210,0.06)",
                    border: "1px solid #e3eafc",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      fontSize: 28,
                      marginTop: 2,
                      flexShrink: 0,
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      background: "#e3eafc",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "hidden",
                    }}
                  >
                    {getAvatar(s.user, s.gender || getGender(s.user))}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontSize: "1.04em",
                        color: "#222",
                        marginBottom: 4,
                      }}
                    >
                      {s.text}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        marginTop: 4,
                      }}
                    >
                      <span
                        style={{
                          background: "#e3eafc",
                          color: "#1976d2",
                          borderRadius: 6,
                          padding: "2px 10px",
                          fontSize: "0.95em",
                          fontWeight: 500,
                        }}
                      >
                        {s.user}
                      </span>
                      <span style={{ color: "#888", fontSize: "0.95em" }}>
                        {s.date}
                      </span>
                      <button
                        onClick={() => handleVibe(idx)}
                        style={{
                          marginLeft: "auto",
                          background: isVibed ? "#fff1f0" : "#fff",
                          border: isVibed
                            ? "1.5px solid #ff4d4f"
                            : "1px solid #e3eafc",
                          color: isVibed ? "#ff4d4f" : "#222",
                          fontSize: "1em",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          gap: 6,
                          borderRadius: 16,
                          padding: "2px 14px 2px 10px",
                          fontWeight: 600,
                          boxShadow: isVibed
                            ? "0 1px 8px rgba(255,77,79,0.08)"
                            : "0 1px 4px rgba(25,118,210,0.04)",
                          transition:
                            "background 0.15s, border 0.15s, color 0.15s",
                        }}
                        aria-label="Vibe"
                      >
                        <span style={{ marginRight: 2 }}>
                          <VibeIcon filled={isVibed} size={20} />
                        </span>
                        <span style={{ color: isVibed ? "#ff4d4f" : "#222" }}>
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
          style={{
            borderTop: "1px solid #e3eafc",
            background: "#f8fafc",
            borderBottomLeftRadius: 18,
            borderBottomRightRadius: 18,
            padding: "18px 24px 16px 24px",
            display: "flex",
            alignItems: "center",
            gap: 10,
            boxShadow: "0 -2px 8px rgba(25,118,210,0.03)",
          }}
        >
          <div
            style={{
              fontSize: 26,
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: "#e3eafc",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              overflow: "hidden",
            }}
          >
            <img
              src="https://icon-library.com/images/boy-icon-png/boy-icon-png-10.jpg"
              alt="Your Avatar"
              style={{ width: 36, height: 36, borderRadius: "50%" }}
            />
          </div>
          <input
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
            placeholder="Add a comment..."
            style={{
              flex: 1,
              border: "1.5px solid #b6d0ff",
              borderRadius: 18,
              padding: "10px 16px",
              fontSize: "1.05em",
              outline: "none",
              background: "#fff",
              marginRight: 8,
              boxSizing: "border-box",
              transition: "border 0.2s",
            }}
            disabled={submitting}
            maxLength={250}
          />
          <button
            type="submit"
            disabled={submitting || !suggestion.trim()}
            style={{
              background: submitting ? "#b6d0ff" : "#1976d2",
              color: "#fff",
              border: "none",
              borderRadius: 16,
              padding: "8px 18px",
              fontWeight: 600,
              fontSize: "1em",
              cursor:
                submitting || !suggestion.trim() ? "not-allowed" : "pointer",
              boxShadow: submitting
                ? "none"
                : "0 2px 8px rgba(25,118,210,0.08)",
              transition: "background 0.2s",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <span style={{ fontSize: 18 }}>➤</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SuggestionPop;
