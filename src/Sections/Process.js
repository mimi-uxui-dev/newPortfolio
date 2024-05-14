import React, { useEffect } from "react";
import smallline from "../assets/images/Vector 5.svg";
import ScrollReveal from "scrollreveal";

function Process() {
  useEffect(() => {
    ScrollReveal().reveal(".p1", { delay: 500 });
    ScrollReveal().reveal(".p2", { delay: 800 });
  });
  return (
    <article className="container flex-row-top mt200 space-between">
      <div className="container-header flex-row-center gap24 mb80 p1">
        <h1 className="bebas48">Process</h1>
        <img src={smallline} alt="" />
        <p className="supreme24reg flex-row-center gap10">
          How I get things done
        </p>
      </div>
      <p className="supreme18light max-width467 p2">
        I prioritize in-depth research and analysis of your market, customers,
        competition opportunities to guide the design and development of every
        project. This aids me to establish a list of goals for your project.
        <br />
        <br />
        Next, I adopt a structured approach to deliver your project that
        includes sketched ideas and brainstorming, creating wireframes, static
        designs, front-end coding, back-end development and user testing.
        <br />
        <br />
        Furthermore, I continuously track, review, and analyze the success of
        your project, ensuring it is meeting its core goals.
      </p>
    </article>
  );
}

export default Process;
