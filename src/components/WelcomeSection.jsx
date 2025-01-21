

const WelcomeSection = () => {
  return (
    <section className="bg-gradient-to-r from-yellow-500 to-blue-900 text-white py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm font-semibold uppercase mb-2">1% of the industry</p>
        <h2 className="text-3xl font-bold mb-6">Welcome to your new digital reality. Now.</h2>
        <div className="flex justify-center items-center mb-6">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-2/3 md:w-1/2 px-4 py-2 rounded-l-md text-gray-900"
          />
          <button className="bg-[#ffa229] hover:bg-[#ff9029] px-6 py-2 rounded-r-md font-semibold">
            Submit
          </button>
        </div>
        <div className="flex justify-center space-x-6 text-sm">
          <div className="flex items-center space-x-2">
            <span className="text-green-400">✔</span>
            <p>Instant results</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-green-400">✔</span>
            <p>User-friendly interface</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-green-400">✔</span>
            <p>Personalized customization</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
