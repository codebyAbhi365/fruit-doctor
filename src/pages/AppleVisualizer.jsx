import React from "react";
import { useNavigate } from "react-router-dom";

// Updated stages array with full, static class names for styling
const stages = [
  { id: 0, name: "Stage 0", subtitle: "Initial Growth", borderColor: "border-green-500", bgColor: "bg-green-500" },
  { id: 1, name: "Stage 1", subtitle: "Early Development", borderColor: "border-yellow-500", bgColor: "bg-yellow-500" },
  { id: 2, name: "Stage 2", subtitle: "Growing Phase", borderColor: "border-blue-500", bgColor: "bg-blue-500" },
  { id: 3, name: "Stage 3", subtitle: "Maturation", borderColor: "border-red-500", bgColor: "bg-red-500" },
  { id: 4, name: "Stage 4", subtitle: "Ripening", borderColor: "border-orange-500", bgColor: "bg-orange-500" },
  { id: 5, name: "Stage 5", subtitle: "Harvest Ready", borderColor: "border-purple-500", bgColor: "bg-purple-500" },
];

export default function AppleStageChecker() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8 px-4">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Apple Stage Checker</h1>
        <p className="text-gray-600 text-lg">Select a stage to view detailed information</p>
      </div>

      {/* Stages Grid */}
      <div className="w-full max-w-md mb-12">
        <div className="grid grid-cols-2 gap-4">
          {stages.map((stage) => (
            <div
              key={stage.id}
              className={`bg-white border-2 rounded-lg shadow-sm cursor-pointer hover:shadow-md hover:scale-105 transform transition-all duration-300 ${stage.borderColor}`}
              onClick={() => navigate(`/stage/${stage.id}`)}
            >
              <div className="flex flex-col items-center text-center p-4">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 text-white font-bold text-2xl ${stage.bgColor}`}
                >
                  {stage.id}
                </div>
                <h3 className="font-semibold text-gray-800 text-md">{stage.name}</h3>
                <p className="text-gray-500 text-sm">{stage.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How to use section */}
      <div className="w-full max-w-md bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">How to use Stage Checker</h2>
        <ol className="space-y-3 text-md text-gray-700 list-decimal list-inside">
          <li>Select the stage that matches your apple's current development.</li>
          <li>View the 3D model and detailed information.</li>
          <li>Follow the care tips for optimal growth.</li>
          <li>Monitor progression through the stages.</li>
        </ol>
      </div>
    </div>
  );
}
