import React from "react";


import Java from "../assets/images/java.png";
import HTML from "../assets/images/HTML.png";
import CSS from "../assets/images/CSS.png";
import Js from "../assets/images/js1.png";
import Bootstrap from "../assets/images/bootstrap1.png";
import Tailwind from "../assets/images/Tailwind Css.png";
import reactLogo from "../assets/images/react.png";
import Next from "../assets/images/Nextjs.png";
import Node from "../assets/images/node.png";
import Express from "../assets/images/express1.png";
import Mongo from "../assets/images/MongoDB1.png";
import Git from "../assets/images/git.png";
import Github from "../assets/images/github.png";
import { Link } from "react-router-dom";

const skills = [
  { img: Java, name: "React.js" },
  { img: HTML, name: "React.js" },
  { img: CSS, name: "React.js" },
  { img: Js, name: "React.js" },
  { img: Bootstrap, name: "React.js" },
  { img: Tailwind, name: "React.js" },
  { img: reactLogo, name: "React.js" },
  { img: Next, name: "React.js" },
  { img: Node, name: "React.js" },
  { img: Mongo, name: "React.js" },
  { img: Git, name: "React.js" },
  { img: Github, name: "React.js" },
  
];

let comp = "https://www.codingspark.in/"

const handleLinkClick = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};


const SkillsExp = () => {
  return (
    <div id="skills">
      <div className="text-center my-10">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span> And <span className="text-cyan-600">Experience</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
      </div>

      <div className="flex flex-wrap lg:flex-nowrap justify-center gap-20  ">
        <div className="flex flex-wrap justify-center gap-8 w-[35rem]">
          {skills.map((item, i) => (
            <div key={i} className="text-center">
              <div className="my-4 border rounded-full p-6 bg-[#303841] border-[#303841]">
                <img src={item.img} alt={item.name} className="w-16" />
              </div>
              <p className="text-lg font-semibold">{item.name}</p>
            </div>
          ))}
        </div>

        <div className="md:mt-10 px-4">
          <div className="flex flex-wrap md:flex-nowrap gap-5">
            <div className=" text-lg font-bold text-cyan-600">2023</div>

            <div className=" md:w-[30rem] ">
              <h4 className=" text-lg font-semibold ">Front-end Developer Intern </h4>
              <Link
                to=""
                onClick={() => handleLinkClick(comp)}
              >
                <p className=" text-gray-400 hover:underline hover:text-blue-500 my-1 mb-3">CodingSpark</p> 
              </Link>
              <div className="my-2">
                - Frontend Developer intern at codingSprak, specializing in
                HTML, CSS, and JavaScript.
              </div>
              <div className="my-2">
                - Active participation in developing front-end solutions, and
                honing skills under the guidance of industry professionals.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsExp;
