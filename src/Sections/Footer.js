import React, { useEffect } from "react";
import arrow from "../assets/images/arrow-up.svg";
import t from "../assets/images/Twitter - Dark.svg";
import ig from "../assets/images/Instagram - Dark.svg";
import lin from "../assets/images/LinkedIn - Dark.svg";
import medium from "../assets/images/Subtract.svg";
import ScrollReveal from "scrollreveal";

function Footer() {
  const sm = [
    {
      id: 1,
      link: "https://twitter.com/MimiKhoudour",
      iconimg: t,
    },
    {
      id: 2,
      link: "https://www.instagram.com/mimikhoudour_official/",
      iconimg: ig,
    },
    {
      id: 3,
      link: "https://www.linkedin.com/in/mimi-khoudour/",
      iconimg: lin,
    },
    // {
    //   id: 4,
    //   link: "..",
    //   iconimg: medium,
    // },
  ];
  useEffect(() => {
    ScrollReveal().reveal("footer", { delay: 500 });
  });
  return (
    <footer className="container mt200">
      <div className="flex-row-center space-between top">
        <h1>
          interested in working
          <br />
          <span>together</span> with me?
        </h1>
        <a href="mailto:hey@mimikhoudour.com" className="button filled-button">
          Let's connect
          <img src={arrow} alt="" />
        </a>
      </div>

      <div className="centerr flex-row-center space-between">
        <div className="sm">
          <p>Follow me</p>
          {sm.map((s) => (
            <a
              className="smlink"
              key={s.id}
              target="_blank"
              href={s.link}
              rel="noreferrer"
            >
              <img src={s.iconimg} alt="Mimi Khoudour UX" />
            </a>
          ))}
        </div>
        <div>
          <p>Reach-out</p>
          <a className="liink" href="mailto:hey@mimikhoudour.com">
            Hey@Mimikhoudour.com
          </a>
        </div>
      </div>

      <p className="buttom">©Mimi T.Khoudour 2023</p>
    </footer>
  );
}

export default Footer;
