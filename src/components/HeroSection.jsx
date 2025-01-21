import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { IoGridOutline } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa6";
import { IoIosPlayCircle } from "react-icons/io";

const HeroSection = () => {
  const renderGoogleRating = (googleRating = 4.5) => {
    const starsArray = [];
    const fullStars = Math.floor(googleRating); // Number of full stars
    const hasHalfStar = googleRating % 1 !== 0; // Check if there's a fractional part

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      starsArray.push(<FaStar key={`full-${i}`} className="text-yellow-500" />);
    }

    // Add half star if applicable
    if (hasHalfStar) {
      starsArray.push(<FaStarHalf key="half" className="text-yellow-500" />);
    }

    return <>{starsArray}</>;
  };

  return (
    <section className="relative h-[85%] w-full bg-gradient-to-br from-[#ffffff] via-[#fff6ea] to-[#e6eef8]">
      {/* Background Image */}
      <div className="hidden lg:block absolute bg-right-bottom h-full bg-[url('/static/hero_img.png')] bg-no-repeat w-full bg-contain z-[0]"></div>

      {/* Right and Left Sections */}
      <div className="h-full w-full flex justify-between ">
        {/* Left Section */}
        <div className="w-full lg:w-5/12 pt-5 font-light pl-10 h-full flex flex-col justify-around">
          <div className="flex justify-start items-center font-semibold">
            Google Rating: {renderGoogleRating()}
          </div>
          <div className="text-5xl font-medium">
            Your trusted partner for compliance business needs
          </div>
          <hr></hr>
          <p className="text-lg font-medium">
            An online business compliance platform that helps entrepreneurs and
            other individuals with various, registrations, tax filings, and
            other legal matters.
          </p>

          {/* Stats Container */}
          <div className="flex justify-between font-medium flex-wrap md:flex-nowrap">
            <div className="flex justify-center items-center space-x-4 ">
              <div>
                <IoGridOutline size={40} />
              </div>
              <div>
                <div className="font-extrabold text-xl bg-gradient-to-br from-[#bd883d] via-[#245b92] to-[#1c4670] text-transparent bg-clip-text">
                  4.5+
                </div>
                <div className="">Customer Rating</div>
              </div>
            </div>
            <div className="flex justify-center items-center space-x-4">
              <div>
                <FaUsers size={40} />
              </div>
              <div>
                <div className="font-extrabold text-xl bg-gradient-to-br from-[#bd883d] via-[#245b92] to-[#1c4670] text-transparent bg-clip-text">
                  20,000+
                </div>
                <div>Clients</div>
              </div>
            </div>
            <div className="flex justify-center items-center space-x-4 ">
              <div>
                <FaHandshake size={40} />
              </div>
              <div>
                <div className="font-extrabold text-xl bg-gradient-to-br from-[#bd883d] via-[#245b92] to-[#1c4670] text-transparent bg-clip-text">
                  99.8%
                </div>
                <div>Financial Stability</div>
              </div>
            </div>
          </div>

          {/* Talk to and see work button */}
          <div className="flex justify-start space-x-8">
            <button className={"bg-[#1c4670] text-slate-50 pl-8 pr-8 pt-2 pb-2 rounded-md font-semibold text-center shadow-md"}>Talk an Expert</button>
            <button className="flex justify-between items-center space-x-2 cursor-pointer pd-2">
              <IoIosPlayCircle className="text-[#fc4a29] text-2xl" />
              <div className="font-medium">See how it works</div>
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="hidden lg:w-[40%] xl:w-[15%] w-full md:flex md:flex-col mt-10 justify-start space-y-5"> 
          <div className="pb-2 pt-2 pr-5 pl-5 rounded-l-xl bg-white shadow-md cursor-pointer">
            Annual Compliance
          </div>
          <div className="pb-2 pt-2 pr-5 pl-5 rounded-l-xl bg-white shadow-md cursor-pointer">
            Payroll services
          </div>
          <div className="pb-2 pt-2 pr-5 pl-5 rounded-l-xl bg-white shadow-md cursor-pointer">
            Company formation
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
