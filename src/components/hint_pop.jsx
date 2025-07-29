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
        console.error("Error generating hint:", error);
        setHint("Error generating hint. Please try again.");
      }
      setLoading(false);
    };

    if (question) {
      fetchHint();
    }
  }, [question]);

  return (
    <div className="max-w-sm mx-auto p-6 bg-white rounded-2xl shadow-2xl">
      <h3 className="text-xl font-bold mb-3 text-[#1976d2]">AI Hint</h3>
      <p className="text-gray-500 mb-4">
        Get a helpful hint for this question.
      </p>
      {loading ? (
        <div className="text-center py-8 text-gray-400 text-base">
          Generating hint...
        </div>
      ) : (
        <div className="bg-yellow-50 px-4 py-3 rounded-lg text-yellow-700 min-h-[40px] text-center font-medium">
          {hint}
        </div>
      )}
    </div>
  );
};

export default HintPop;
