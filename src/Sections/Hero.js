import React, { useEffect } from "react";
import smallline from "../assets/images/small-line1.svg";
import arrow from "../assets/images/arrow-up.svg";
import ScrollReveal from "scrollreveal";

function Hero() {
  useEffect(() => {
    ScrollReveal().reveal(".hero", { delay: 100 });

    ScrollReveal().reveal(".h3", { delay: 500 });
    ScrollReveal().reveal(".h1", { delay: 700 });
    ScrollReveal().reveal(".h2", { delay: 1000 });
    ScrollReveal().reveal(".c1", { delay: 1300 });
    ScrollReveal().reveal(".c2", { delay: 1600 });
  });

  return (
    <article className="hero container gif">
      <div>
        {/* TOP */}
        <div>
          <h3 className="h3 supreme24med">
            Hey! <br /> I'm Mimi T. Khoudour, currently working as a Freelnacer
            remotely for a Swiss startup called FounderStudio AG, I blend
          </h3>
          <h1 className="h1 bebas108">creativity AND functionality</h1>
          <h2 className="h2 supreme32reg mb64 flex-end">
            to create products that people
            <br /> love, rely on, and thoroughly enjoy.
          </h2>
        </div>
        {/* BUTTOM */}
        <div className="flex-row-center space-between ">
          <div className="flex-row-center gap16 c1">
            <h4 className="bebas24">Brande Identity</h4>
            <img src={smallline} alt="Mimi Khoudour" />
            <h4 className="bebas24">ui/ux</h4>
            <img src={smallline} alt="Mimi Khoudour" />
            <h4 className="bebas24">development</h4>
            <img src={smallline} alt="Mimi Khoudour" />
            <h4 className="bebas24">No-code websites</h4>
          </div>
          <a
            target="_blank"
            href="mailto:hey@mimikhoudour.com"
            rel="noreferrer"
            className="button filled-button c2"
          >
            Let's Connect
            <img src={arrow} alt="" />
          </a>
        </div>
      </div>

      <div class="scroll-downs scrollicon">
        <div class="mousey">
          <div class="scroller"></div>
        </div>
      </div>
    </article>
  );
}

export default Hero;
