import React from "react";

const HappyClientsSection = () => {
  const clients = [
    "🌟",
    "🚀",
    "📊",
    "🎨",
    "🔧",
    "💼",
    "🌍",
    "⚡",
    "📱",
    "🖥️",
    "🛍️",
    "📦",
    "🏆",
    "💡",
    "🔒",
    "📂",
    "🌟",
    "🚀",
  ];

  return (
    <div className="bg-gray-50 py-12 flex flex-col justify-center items-center">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold">Our Happy Clients</h1>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.
        </p>
      </div>

      <div className="flex gap-6 px-4 md:px-20 flex-wrap justify-center">
        {clients.map((emoji, index) => (
          <div
            key={index}
            className="relative w-16 h-16 md:w-20 md:h-20 flex justify-center items-center bg-white rounded-full shadow-md"
          >
            <div className="text-4xl md:text-5xl">{emoji}</div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="text-blue-600 hover:underline flex items-center justify-center">
          Show more
          <span className="ml-2">&rarr;</span>
        </button>
      </div>
    </div>
  );
};

export default HappyClientsSection;
