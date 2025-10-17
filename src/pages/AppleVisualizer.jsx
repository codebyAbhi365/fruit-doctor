import React from "react";
import { useNavigate } from "react-router-dom";

const stages = [
  { id: 0, name: "Stage 0", subtitle: "Healthy Apple" },
  { id: 1, name: "Stage 1", subtitle: "Early Infection" },
  { id: 2, name: "Stage 2", subtitle: "Advanced Infection" },
  { id: 3, name: "Stage 3", subtitle: "Severe Infection" },
  { id: 4, name: "Stage 4", subtitle: "Ripening" },
  { id: 5, name: "Stage 5", subtitle: "Harvest Ready" },
];

export default function AppleStageChecker() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center py-6 px-4 gap-6">
      <h1 className="text-2xl font-bold text-green-700 mb-2">🍎 Apple Stage Checker</h1>
      <p className="text-gray-600 mb-6 text-center">Select a stage to view detailed information</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-md">
        {stages.map((stage, index) => (
          <div
            key={stage.id}
            className={`bg-white p-4 rounded-lg shadow-md cursor-pointer border-2 hover:scale-105 transform transition 
            ${index % 2 === 0 ? "border-green-500" : "border-orange-500"}`}
            onClick={() => navigate(`/stage/${stage.id}`)}
          >
            <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center mb-2">
              {stage.id}
            </div>
            <h2 className="font-semibold text-gray-800">{stage.name}</h2>
            <p className="text-gray-500 text-sm">{stage.subtitle}</p>
          </div>
        ))}
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md mt-6 max-w-md text-gray-700">
        <h3 className="font-semibold mb-2">How to use Stage Checker</h3>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>Select the stage that matches your apple's current development</li>
          <li>View the 3D model and detailed information</li>
          <li>Follow the care tips for optimal growth</li>
          <li>Monitor progression through stages</li>
        </ol>
      </div>
    </div>
  );
}




