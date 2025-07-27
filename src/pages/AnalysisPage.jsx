import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AnalysisPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const answers = location.state?.answers || [];
  const correctCount = location.state?.correctCount || 0;
  const incorrectCount = location.state?.incorrectCount || 0;
  const totalQuestions = location.state?.totalQuestions || answers.length || 5;
  const testType = location.state?.testType || "General";
  const notAttempted = totalQuestions - (correctCount + incorrectCount);

  // Calculations
  const accuracyRate = totalQuestions
    ? ((correctCount / totalQuestions) * 100).toFixed(1)
    : 0;
  const completionRate = totalQuestions
    ? (((correctCount + incorrectCount) / totalQuestions) * 100).toFixed(1)
    : 0;
  const avgTime = location.state?.avgTime || 0; // in seconds

  // Gauge chart (simple SVG)
  const solved = correctCount + incorrectCount;
  const solvedPercent = totalQuestions ? solved / totalQuestions : 0;
  const correctPercent = totalQuestions ? correctCount / totalQuestions : 0;
  const incorrectPercent = totalQuestions ? incorrectCount / totalQuestions : 0;

  const gaugeAngle = (percent) => percent * 180;

  return (
    <div style={{ minHeight: "100vh", background: "#fff", padding: 0 }}>
      <div style={{ maxWidth: 900, margin: "0 auto", paddingTop: 40 }}>
        {/* Gauge Card */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "40px 0 0 0",
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: 24,
              boxShadow: "0 4px 32px rgba(25,118,210,0.08)",
              padding: "32px 40px",
              minWidth: 420,
              display: "flex",
              alignItems: "center",
              gap: 32,
            }}
          >
            {/* Gauge SVG */}
            <div style={{ width: 180, height: 110, position: "relative" }}>
              <svg width="180" height="110" viewBox="0 0 180 110">
                {/* Background arc */}
                <path
                  d="M20,100 A80,80 0 0,1 160,100"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="16"
                />
                {/* Correct arc */}
                <path
                  d="M20,100 A80,80 0 0,1 160,100"
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="16"
                  strokeDasharray={`${gaugeAngle(correctPercent)} 999`}
                  strokeDashoffset="0"
                  style={{ transition: "stroke-dasharray 0.6s" }}
                />
                {/* Incorrect arc */}
                <path
                  d="M20,100 A80,80 0 0,1 160,100"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="16"
                  strokeDasharray={`${gaugeAngle(incorrectPercent)} 999`}
                  strokeDashoffset={gaugeAngle(correctPercent)}
                  style={{ transition: "stroke-dasharray 0.6s" }}
                />
              </svg>
              <div
                style={{
                  position: "absolute",
                  top: 48,
                  left: 0,
                  width: "100%",
                  textAlign: "center",
                  fontWeight: 700,
                  fontSize: 32,
                  color: "#222",
                }}
              >
                {solved}/{totalQuestions}
              </div>
              <div
                style={{
                  position: "absolute",
                  top: 84,
                  left: 0,
                  width: "100%",
                  textAlign: "center",
                  fontWeight: 600,
                  fontSize: 18,
                  color: "#22c55e",
                  letterSpacing: 0.5,
                }}
              >
                Solved
              </div>
              <div
                style={{
                  position: "absolute",
                  top: 104,
                  left: 0,
                  width: "100%",
                  textAlign: "center",
                  fontWeight: 400,
                  fontSize: 14,
                  color: "#888",
                }}
              >
                {notAttempted} Attempting
              </div>
            </div>
            {/* Stats */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  marginBottom: 8,
                }}
              >
                <div
                  style={{
                    background: "#f6fef9",
                    border: "1.5px solid #22c55e",
                    color: "#22c55e",
                    borderRadius: 12,
                    padding: "10px 28px",
                    fontWeight: 600,
                    fontSize: 18,
                    minWidth: 120,
                    textAlign: "center",
                  }}
                >
                  Correct <span style={{ marginLeft: 8 }}>{correctCount}</span>
                </div>
              </div>
              <div
                style={{
                  background: "#fff6f6",
                  border: "1.5px solid #ef4444",
                  color: "#ef4444",
                  borderRadius: 12,
                  padding: "10px 28px",
                  fontWeight: 600,
                  fontSize: 18,
                  minWidth: 120,
                  textAlign: "center",
                  marginBottom: 8,
                }}
              >
                Incorrect{" "}
                <span style={{ marginLeft: 8 }}>{incorrectCount}</span>
              </div>
              <div
                style={{
                  background: "#f3f4f6",
                  border: "1.5px solid #e5e7eb",
                  color: "#222",
                  borderRadius: 12,
                  padding: "10px 28px",
                  fontWeight: 600,
                  fontSize: 18,
                  minWidth: 120,
                  textAlign: "center",
                }}
              >
                Not Attempted
                <span style={{ marginLeft: 8 }}>{notAttempted}</span>
              </div>
            </div>
          </div>
        </div>
        {/* Performance Analysis */}
        <div
          style={{
            margin: "40px auto 0 auto",
            maxWidth: 600,
            background: "#fff",
            borderRadius: 16,
            boxShadow: "0 2px 12px rgba(25,118,210,0.06)",
            padding: "32px 32px 24px 32px",
          }}
        >
          <div
            style={{
              fontWeight: 700,
              fontSize: 22,
              marginBottom: 18,
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span role="img" aria-label="target">
              🎯
            </span>
            Performance Analysis
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ flex: 1 }}>Accuracy Rate</span>
              <span
                style={{
                  color: "#ef4444",
                  fontWeight: 700,
                  fontSize: 18,
                  background: "#fff6f6",
                  borderRadius: 8,
                  padding: "2px 16px",
                  minWidth: 70,
                  textAlign: "right",
                }}
              >
                {accuracyRate}%
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ flex: 1 }}>Completion Rate</span>
              <span
                style={{
                  color: "#1976d2",
                  fontWeight: 700,
                  fontSize: 18,
                  background: "#e3eafc",
                  borderRadius: 8,
                  padding: "2px 16px",
                  minWidth: 70,
                  textAlign: "right",
                }}
              >
                {completionRate}%
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ flex: 1 }}>Average Time per Question</span>
              <span
                style={{
                  color: "#222",
                  fontWeight: 700,
                  fontSize: 18,
                  background: "#f3f4f6",
                  borderRadius: 8,
                  padding: "2px 16px",
                  minWidth: 70,
                  textAlign: "right",
                }}
              >
                {avgTime ? `${(avgTime / 60).toFixed(1)}m` : "0.0m"}
              </span>
            </div>
          </div>
        </div>
        {/* Action Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 18,
            marginTop: 36,
          }}
        >
          <button
            style={{
              background: "#fff",
              border: "1.5px solid #1976d2",
              color: "#1976d2",
              borderRadius: 8,
              padding: "10px 28px",
              fontWeight: 600,
              fontSize: "1em",
              cursor: "pointer",
              transition: "background 0.2s, border 0.2s, color 0.2s",
            }}
            onClick={() => navigate("/review", { state: location.state })}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "#e3eafc";
              e.currentTarget.style.color = "#1976d2";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "#fff";
              e.currentTarget.style.color = "#1976d2";
            }}
          >
            ⟳ Review Answers
          </button>
          <button
            style={{
              background: "#1976d2",
              border: "none",
              color: "#fff",
              borderRadius: 8,
              padding: "10px 28px",
              fontWeight: 600,
              fontSize: "1em",
              cursor: "pointer",
              transition: "background 0.2s",
            }}
            onClick={() => navigate("/")}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "#1453a3";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "#1976d2";
            }}
          >
            🏠 Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnalysisPage;
