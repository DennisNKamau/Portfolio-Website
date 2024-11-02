import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Amazon from "./works/Amazon";
import Apple from "./works/Apple";
import KUnity from "./works/KUnity";
import CodeAlpha from "./works/CodeAlpha";
import Splash from "./works/Splash";

const Experience = () => {
  const [workCodeAlpha, setWorkCodeAlpha] = useState(true);
  const [workKUnity, setWorkKUnity] = useState(false);
  const [workApple, setWorkApple] = useState(false);
  const [workSplash, setWorkSplash] = useState(false);
  const [workAmazon, setWorkAmazon] = useState(false);

  const handleCodeAlpha = () => {
    setWorkCodeAlpha(true);
    setWorkKUnity(false);
    setWorkApple(false);
    setWorkSplash(false);
    setWorkAmazon(false);
  };

  const handleKUnity = () => {
    setWorkCodeAlpha(false);
    setWorkKUnity(true);
    setWorkApple(false);
    setWorkSplash(false);
    setWorkAmazon(false);
  };

  const handleApple = () => {
    setWorkCodeAlpha(false);
    setWorkKUnity(false);
    setWorkApple(true);
    setWorkSplash(false);
    setWorkAmazon(false);
  };
  const handleSplash = () => {
    setWorkCodeAlpha(false);
    setWorkKUnity(false);
    setWorkApple(false);
    setWorkSplash(true);
    setWorkAmazon(false);
  };
  const handleAmazon = () => {
    setWorkCodeAlpha(false);
    setWorkKUnity(false);
    setWorkApple(false);
    setWorkSplash(false);
    setWorkAmazon(true);
  };
  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Where I have Worked" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleCodeAlpha}
            className={`${
              workCodeAlpha
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            CodeAlpha
          </li>
          <li
            onClick={handleKUnity}
            className={`${
              workKUnity
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            K-unity
          </li>
          <li
            onClick={handleApple}
            className={`${
              workApple
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Apple
          </li>
          <li
            onClick={handleSplash}
            className={`${
              workSplash
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Splash
          </li>
          <li
            onClick={handleAmazon}
            className={`${
              workAmazon
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Amazon
          </li>
        </ul>
        {workCodeAlpha && <CodeAlpha />}
        {workKUnity && <KUnity />}
        {workApple && <Apple />}
        {workSplash && <Splash />}
        {workAmazon && <Amazon />}
      </div>
    </section>
  );
};

export default Experience;
