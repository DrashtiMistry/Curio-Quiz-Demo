import React, { useEffect, useState } from "react";
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const HintPop = ({ question }) => {
  const [hint, setHint] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchHint = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" +
            GEMINI_API_KEY,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: [
                {
                  parts: [
                    {
                      text: `Give a helpful hint for this question: ${question}`,
                    },
                  ],
                },
              ],
            }),
          }
        );
        const data = await response.json();
        console.log("Gemini API response:", data);
        let aiHint = "";
        if (
          data &&
          data.candidates &&
          data.candidates[0] &&
          data.candidates[0].content &&
          data.candidates[0].content.parts &&
          data.candidates[0].content.parts[0] &&
          data.candidates[0].content.parts[0].text
        ) {
          aiHint = data.candidates[0].content.parts[0].text;
        } else if (
          data &&
          data.candidates &&
          data.candidates[0] &&
          data.candidates[0].content &&
          data.candidates[0].content.text
        ) {
          aiHint = data.candidates[0].content.text;
        } else if (data?.candidates?.[0]?.output) {
          aiHint = data.candidates[0].output;
        } else {
          aiHint = "No hint generated. Please try again.";
        }
        setHint(aiHint);
      } catch (error) {
        setHint("Error generating hint. Please try again.");
      }
      setLoading(false);
    };

    if (question) {
      fetchHint();
    }
  }, [question]);

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "0 auto",
        padding: 24,
        background: "#fff",
        borderRadius: 12,
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
      }}
    >
      <h3 style={{ marginBottom: 12 }}>AI Hint</h3>
      <p style={{ color: "#888", marginBottom: 16 }}>
        Get a helpful hint for this question.
      </p>
      {loading ? (
        <div style={{ textAlign: "center", padding: 24 }}>
          Generating hint...
        </div>
      ) : (
        <div
          style={{
            background: "#fffbe6",
            padding: 16,
            borderRadius: 8,
            color: "#8a6d3b",
            minHeight: 40,
            textAlign: "center",
          }}
        >
          {hint}
        </div>
      )}
    </div>
  );
};

export default HintPop;
