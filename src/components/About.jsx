import React from "react";
import aboutImg from "../assets/images/about.png";
const About = () => {
  const info = [
    { text: "Completed Projects", count: "10" },
    { text: "LinkedIn Connections ", count: "7k" },
    // { text: "Companies Work", count: "06" },
  ];
  return (
    <section id="about" className="lg:py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center justify-center md:gap-6 gap-12 px-10 max-w-7xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 mx-auto md:mr-10">
                👋 Hey there! My name is Prince Kushwaha, a web developer
                passionate about creating engaging and scalable web
                applications. I'm a B.Tech graduate in Computer Science from
                Vindhya Institute of Technology and Science. <br /> <br />
                At CodingSpark, I interned as a front-end developer, focusing on HTML, CSS,
                JavaScript, and React.js.  <br />
                I have contributed to projects like
                LearnHub, an educational platform, and WebMeet, a real-time
                video conferencing app, applying my technical skills in
                practical scenarios and collaborating with industry
                professionals. <br /> <br />
                Additionally, I published the research paper
                "SmartLearnHub: AI-Driven Education" in IJRASET, exploring
                AI-driven educational platforms and adaptive learning paths. I
                am passionate about continuous learning and innovation. <br /> <br />
                 I am excited to join a dynamic team where I can contribute to
                impactful projects and grow as a professional. Let's connect and
                explore opportunities to collaborate.
              </p>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a href="./src/assets/Resume.pdf" download>
                <button className="btn-primary">Download CV</button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:-mt-20  mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
