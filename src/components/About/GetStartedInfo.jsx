import React from "react";

const GetStartedInfo = () => {
  const steps = [
    {
      icon: "📄",
      title: "Fill up Application Form",
      bgColor: "bg-red-500",
    },
    {
      icon: "💳",
      title: "Make Online Payment",
      bgColor: "bg-green-500",
    },
    {
      icon: "👨‍💻",
      title: "Executive will Process Application",
      bgColor: "bg-orange-500",
    },
    {
      icon: "📧",
      title: "Get Confirm Mail",
      bgColor: "bg-gray-500",
    },
  ];

  return (
    <section className="bg-orange-500 p-6">
      <div className="flex md:justify-between justify-center items-center flex-wrap gap-2">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex justify-center gap-2 flex-wrap items-center text-center text-white md:w-[auto]"
          >
            <div
              className={`w-16 h-16 flex justify-center items-center rounded-full ${step.bgColor}`}
            >
              <span className="text-3xl">{step.icon}</span>
            </div>
            <p className="mt-2 font-medium text-sm">{step.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GetStartedInfo;
