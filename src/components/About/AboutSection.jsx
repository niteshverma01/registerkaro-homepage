const AboutSection = () => {
  return (
    <section className="bg-gray-50 py-4">
      <div className="flex flex-wrap justify-between items-center px-4 md:px-20 gap-2 ">
        <div className="w-full md:w-[60%]">
          <h2 className="text-yellow-500 text-sm tracking-wide uppercase">
            Welcome to spanRegisterKaro.in
          </h2>
          <h1 className="text-3xl font-semibold mt-2">About <span className="text-yellow-500">Register Karo</span></h1>
          <p className="text-gray-600 mt-4">
            We have been using Inteligencia as our DevOps vendor for our field
            service applications over the last couple of years and I’m extremely
            pleased with their performance, ability to execute, and willingness
            to adapt in our ever-changing environment. Perry is an outstanding
            leader who is fanatical about customer satisfaction. He has built a
            solid team which has consistently delivered on projects thereby
            exceeding everyone’s expectations.
          </p>
          <p className="text-gray-600 mt-4">
            I would strongly recommend their services to any organization that
            is looking for solid, reliable, and predictable outcomes.
          </p>
          <button className={"mt-6 bg-[#1c4670] text-slate-50 pl-8 pr-8 pt-2 pb-2 rounded-md font-semibold text-center shadow-md"}>Learn More</button>
        </div>
        <div className="w-[60%] md:w-[35%] flex justify-center">
          <img
            src="static/about.png"
            alt="About Us"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
