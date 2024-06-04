import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.svg";
import smallline from "../assets/images/small-line.svg";
import arrow from "../assets/images/arrow-up.svg";
import menu from "../assets/images/menu.svg";
import ScrollReveal from "scrollreveal";

function Header() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 0);
    });
  }, []);

  const [open, setOpen] = useState(true);
  const openMenu = () => setOpen(false);
  const closeMenu = () => setOpen(true);
  const close = () => setTimeout(() => closeMenu(), 100);

  useEffect(() => {
    ScrollReveal().reveal(".headerr", { delay: 500 });
  });

  return (
    <>
      <header className={scroll ? "fixed" : ""}>
        <div className="header container">
          <a href="/">
            <img src={logo} alt="Mimi T.Khoudour" />
          </a>
          <div className="cta">
            <div className="cta1">
              <a href="#projects">Projects</a>
            </div>
            <div className="cta1">
              <a href="/blog">Blog</a>
            </div>
            <img src={smallline} alt="" />
            <a
              href="https://calendly.com/mimi-khoudour"
              target="_blank"
              className="button"
              rel="noreferrer"
            >
              Book a call
              <img src={arrow} alt="" />
            </a>
          </div>
          {/* MOBILE */}
          <img onClick={openMenu} className="menu" src={menu} alt="" />
        </div>
      </header>
      <div className={!open ? "menu-content" : "none"}>
        <p onClick={close} className=" supreme18light x">
          CLOSE
        </p>
        <div className="cta1">
          <a onClick={close} href="#projects">
            Projects
          </a>
          {/* <a onClick={close} href="/about">
            About
          </a>
          <a onClick={close} href="/Writings">
            Writings
          </a> */}
        </div>
        <img src={smallline} alt="" />
        <a
          href="https://calendly.com/mimi-khoudour"
          target="_blank"
          className="button"
          rel="noreferrer"
        >
          Book a call
          <img src={arrow} alt="" />
        </a>
      </div>
    </>
  );
}

export default Header;
