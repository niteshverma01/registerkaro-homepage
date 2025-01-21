import React from "react";

const FAQSection = () => {
  const demoQuestions = [
    "Can I recover deleted files from desktop with this software?",
    "Is this software compatible with Mac and Windows?",
    "How secure is the recovery process?",
    "Can I recover files from external drives?",
    "What file types can be recovered?",
  ];

  return (
    <section className="bg-white py-10 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-center text-lg font-semibold text-yellow-700 mb-6">
          FAQ
        </h2>
        <h3 className="text-center text-2xl font-bold text-gray-900 mb-8">
          Frequent Ask Questions
        </h3>

        <div className="space-y-4">
          {demoQuestions.map((question, index) => (
            <div
              key={index}
              className="flex justify-end items-center bg-white shadow rounded-md hover:shadow-lg transition-shadow bg-gradient-to-br from-[#bd883d] via-[#245b92] to-[#1c4670]"
            >
              <div className="flex justify-evenly w-[99%] bg-white p-4 ">
                <div className="text-gray-800 font-medium w-[90%]">{question}</div>
                <div className="text-blue-500 text-xl text-center w-[10%]">&gt;</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <button
            className={
              "mt-6 bg-[#1c4670] text-slate-50 pl-8 pr-8 pt-2 pb-2 rounded-md font-semibold text-center shadow-md"
            }
          >
            Show More
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
