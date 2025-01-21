const WhyChooseSection = () => {
  const benefits = [
    {
      title: "Confidential & Safe",
      description: "All your private information is safe with us",
      icon: "🛡️",
      bgColor: "bg-red-50",
    },
    {
      title: "No Hidden Fee",
      description:
        "Everything is put before you with no hidden charges or conditions",
      icon: "✅",
      bgColor: "bg-green-50",
    },
    {
      title: "Guaranteed Satisfaction",
      description:
        "We ensure that you stay 100% satisfied with our offered services",
      icon: "😊",
      bgColor: "bg-blue-50",
    },
    {
      title: "Expert CA/CS Assistance",
      description: "Prompt support from our in-house expert professionals",
      icon: "👨‍💼",
      bgColor: "bg-pink-50",
    },
    {
      title: "Expert CA/CS Assistance",
      description: "Prompt support from our in-house expert professionals",
      icon: "👨‍💼",
      bgColor: "bg-yellow-50",
    },
  ];

  return (
    <section className="bg-gray-50 py-12 flex justify-end gap-2 w-full flex-wrap">
      <div className="md:w-[45%] w-full">
        <h2 className="text-yellow-500 text-sm tracking-wide uppercase">
          Why RegisterKaro.in
        </h2>
        <h1 className="text-3xl font-semibold mt-2">
          Why Choose Register Karo
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          It is with consistent services and results that build trust with the
          people and that in turn help us to serve the business better.
        </p>
      </div>
      {benefits.map((benefit, index) => (
        <div
          key={index}
          className={`flex flex-col items-center text-center shadow-md p-6 rounded-lg hover:shadow-lg transition-shadow w-full md:w-1/4 ${benefit.bgColor}`}
        >
          <div className="text-yellow-500 text-4xl mb-4">{benefit.icon}</div>
          <h3 className="font-bold text-lg">{benefit.title}</h3>
          <p className="text-gray-600 mt-2">{benefit.description}</p>
        </div>
      ))}
    </section>
  );
};

export default WhyChooseSection;
