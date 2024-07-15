import React from "react";
import hireMe from "../assets/images/hireMe.png";
const Hireme = () => {
  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
      </div>
      
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] lg:mt-24 mt-10 flex gap-6 lg:flex-row flex-col-reverse items-center">
        <div>
          <h2 className="text-2xl font-semibold">
          Looking for a Web developer to join your team?
          </h2>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
            Are you in search of a passionate web developer who can transform
            your ideas into engaging and scalable web applications? Your search
            ends here!  <br /> <br />
            
            I am Prince Kushwaha, a dedicated web developer with
            hands-on experience in both front-end and back-end development.
            Armed with a Bachelor of Technology in Computer Science from Rajiv
            Gandhi Proudyogiki Vishwavidyalaya, I have cultivated my skills
            through practical experience and continuous learning.
          </p>
          <button className="btn-primary mt-10">Say Hello</button>
        </div>
        <img
          src={hireMe}
          alt=""
          className="lg:h-[27rem] h-80 lg:absolute bottom-0 -right-3 object-cover"
        />
      </div>
    </section>
  );
};

export default Hireme;
