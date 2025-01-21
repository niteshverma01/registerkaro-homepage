import React from "react";

const VideoIntroductionSection = () => {
  return (
    <section className="bg-top_strip_blue py-12">
      <div className="flex flex-wrap justify-between items-center px-4 gap-2 md:px-20 w-full">
        <div className="w-full md:w-[48%] text-white">
          <h1 className="text-3xl font-semibold">Our Video Introductions</h1>
          <p className="text-gray-300 mt-4">
            Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna
            vulputate pellentesque a diam tincidunt apis dui.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-start">
              <div className="text-yellow-500 text-2xl mr-4">💡</div>
              <div>
                <h3 className="text-xl font-bold">Explore ideas together</h3>
                <p className="text-gray-300">
                  Engage audience segments and finally create actionable
                  insights. Amplify vertical integration.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-yellow-500 text-2xl mr-4">💡</div>
              <div>
                <h3 className="text-xl font-bold">Bring those ideas to life</h3>
                <p className="text-gray-300">
                  Engage audience segments and finally create actionable
                  insights. Amplify vertical integration.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[70%] md:w-[48%] flex justify-center">
          <div className="relative">
            <img
              src="static/youtube_video.png"
              alt="Video Introduction"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoIntroductionSection;
