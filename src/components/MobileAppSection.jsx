import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const MobileAppSection = () => {
  return (
    <div className="bg-blue-900 text-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold mb-4">Manage Your Services by your Mobile Phone</h2>
          <p className="text-lg mb-6">
            Download our app to manage and track your services. Our app enables
            you to stay in touch with our experts and aids you in tracking your
            progress.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="flex items-center bg-white text-gray-900 font-semibold px-4 py-2 rounded-md shadow hover:shadow-lg"
            >
              <FaApple className="text-2xl mr-2" /> Get it on App Store
            </a>
            <a
              href="#"
              className="flex items-center bg-white text-gray-900 font-semibold px-4 py-2 rounded-md shadow hover:shadow-lg"
            >
              <FaGooglePlay className="text-2xl mr-2" /> Get it on Google Play
            </a>
          </div>
        </div>

        {/* Image Content */}
        <div className="md:w-1/2 flex justify-center md:justify-end max-h-[500px]">
          <div className=" max-h-[100%] overflow-hidden">
            <img
              src="static/mobile_image.png"
              alt="Phone 2"
              className="w-60 md:w-72 lg:w-60"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAppSection;
