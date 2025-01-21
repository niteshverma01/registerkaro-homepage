import React from "react";

const StatisticsSection = () => {
  const stats = [
    { value: "1M+", label: "CUSTOMERS" },
    { value: "12+", label: "YEARS OF EXCELLENCE" },
    { value: "41+", label: "R&D ENGINEERS" },
    { value: "78+", label: "COUNTRIES" },
    { value: "3287+", label: "PARTNERS" },
    { value: "41+", label: "AWARDS RECEIVED" },
  ];

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-yellow-500 text-sm tracking-wide uppercase">WHY REGISTER KARO</h2>
        <h3 className="text-gray-900 text-2xl font-bold mb-8">Some Numbers are important</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl font-bold mb-2 bg-gradient-to-br from-[#bd883d] to-[#1c4670] text-transparent bg-clip-text">{stat.value}</p>
              <p className="text-gray-600 font-medium uppercase text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;