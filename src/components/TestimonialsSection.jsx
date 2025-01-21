import React, { useRef } from "react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
      author: "Chris",
      role: "President and CEO, PrintReach, USA",
      rating: 4.5,
      avatar: "👤",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      author: "Jane",
      role: "CEO, TechCorp, USA",
      rating: 4,
      avatar: "👩‍💼",
    },
    {
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
      author: "Mark",
      role: "Founder, InnovateX, UK",
      rating: 5,
      avatar: "👨‍💻",
    },
    {
      text: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
      author: "Alice",
      role: "CTO, DevSolutions, USA",
      rating: 4.8,
      avatar: "👩‍💻",
    },
    {
      text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
      author: "John",
      role: "Manager, BuildWell, Canada",
      rating: 4.2,
      avatar: "👨‍🔧",
    },
  ];

  const scrollRef = useRef(null);

  const handleNext = () => {
    scrollRef.current.scrollBy({ left: 500, behavior: "smooth" });
  };

  const handlePrev = () => {
    scrollRef.current.scrollBy({ left: -500, behavior: "smooth" });
  };

  return (
    <div className="bg-blue-900 py-16 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">What People Say About Us</h1>
      </div>

      <div className="relative px-4 md:px-10">
        <div className="absolute top-1/2 transform -translate-y-1/2 left-4">
          <button
            onClick={handlePrev}
            className="bg-yellow-500 text-blue-900 p-3 rounded-full shadow-md hover:bg-yellow-600"
          >
            &#8592;
          </button>
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 right-4">
          <button
            onClick={handleNext}
            className="bg-yellow-500 text-blue-900 p-3 rounded-full shadow-md hover:bg-yellow-600"
          >
            &#8594;
          </button>
        </div>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 scrollbar-hide scroll-smooth px-4"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-lg shadow-lg p-6 flex-shrink-0 w-80 md:w-96"
            >
              <div className="mb-4">
                <span className="text-4xl text-yellow-500">&ldquo;</span>
                <p className="text-gray-700 mt-4 line-clamp-5">{testimonial.text}</p>
              </div>
              <div className="flex items-center mt-6">
                <div className="w-12 h-12 flex justify-center items-center rounded-full bg-gray-200 text-2xl mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-bold text-lg">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mt-4">
                {Array.from({ length: 5 }, (_, i) => (
                  <span
                    key={i}
                    className={`text-yellow-500 text-lg ${
                      i < Math.floor(testimonial.rating) ? "" : "opacity-50"
                    }`}
                  >
                    &#9733;
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
