import React from "react";
import hero from "../assets/images/hero.png";
import { Link } from "react-router-dom";

const Hero = () => {
  const social_media = [
    { name: "logo-github", link: "https://github.com/prince-kushwaha945" },
    { name: "logo-linkedin", link: "https://www.linkedin.com/in/princeku954/" },
    { name: "logo-instagram", link: "https://www.instagram.com/princekushwaha6230/" },
  ];

  const handleLinkClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="home"
      className="lg:min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={hero} alt="" className="md:w-11/12 h-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Prince Kushwaha</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Looking for Web Developer Jobs..
          </h4>
          <a href="#contact">
            <button className="btn-primary mt-8">Contact Me</button>
          </a>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-8">
            {social_media.map((icon) => (
              <div
                key={icon.name}
                className="text-gray-600 hover:text-white cursor-pointer"
              >
                <Link
                  to="#"
                  onClick={() => handleLinkClick(icon.link)}
                >
                  <ion-icon name={icon.name}></ion-icon>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
