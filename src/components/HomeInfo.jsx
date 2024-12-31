import { Link } from "react-router-dom";

const texts = {
  1: (
    <div>
      Hi, I am <span className="font-serif font-semibold blue-gradient_text">Roman</span> 👋<br /> A fullstack developer from Nepal
    </div>
  ),
  2: (
    <div>
      Learn more about my background, skills, and experience.
      <br />
      <Link to="/about">
        <button className="bg-blue-400 p-1 m-1 rounded-full px-4 cursor-pointer">About Me</button>
      </Link>
    </div>
  ),
  3: (
    <div>
      Check out my projects to see what I've built.
      <br />
      <Link to="/projects">
        <button className="bg-blue-400 p-1 m-1 rounded-full px-4 cursor-pointer">View Projects</button>
      </Link>
    </div>
  ),
  4: (
    <div >
      Get in touch with me for collaborations or inquiries.<br />
      <Link to="/contact">
        <button className="bg-blue-400 p-1 m-1  rounded-xl px-4 cursor-pointer">Let's talk</button>
      </Link>
    </div>
  ),
};



function HomeInfo({ currentStage }) {

  return (
    <div className="sm:text-xl sm:leading-snug text-center mx-5 px-7">
      {texts[currentStage]}
    </div>
  );
}

export default HomeInfo;