import React from "react";

function TrustedBy() {
  return (
    <section className="flex flex-col justify-between p-10">
      <div className="text-center font-bold text-lg">
        Trusted By Over 100+ Startups and freelance business
      </div>
      <div className="flex justify-evenly items-center flex-wrap p-5">
        <img
          src="static/monday.png"
          alt="Monday"
          className="h-6"
        />
        <img
          src="static/oracle.png"
          alt="Monday"
          className="h-4"
        />
        <img
          src="static/monday.png"
          alt="Monday"
          className="h-6"
        />
        <img
          src="static/oracle.png"
          alt="Monday"
          className="h-4"
        />
      </div>
    </section>
  );
}

export default TrustedBy;
