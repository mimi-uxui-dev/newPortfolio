import React, { useEffect } from "react";
import arrow from "../assets/images/arrow-up2.svg";
import smallline from "../assets/images/Vector 5.svg";
import projectimg from "../assets/images/projectimg.png";
import arrow1 from "../assets/images/arrow-up.svg";

import img1 from "../assets/images/01.png";
import img2 from "../assets/images/02.png";
import img3 from "../assets/images/03.png";
import img4 from "../assets/images/04.png";
import img5 from "../assets/images/05.png";
import img6 from "../assets/images/06.png";
import img7 from "../assets/images/07.png";
import img8 from "../assets/images/08.png";
import img9 from "../assets/images/09.png";
import img10 from "../assets/images/10.png";
import ScrollReveal from "scrollreveal";

function RecentWork() {
  useEffect(() => {
    ScrollReveal().reveal(".project-card", { interval: 500 });
  });

  return (
    <article id="projects" className="container recentwork">
      <div className="container-header flex-row-center gap24">
        <h1 className="bebas48">Projects</h1>
        <img src={smallline} alt="" />
        {/* <a className="supreme24reg flex-row-center gap10" href="/projects">
            Show All <img src={arrow} alt="" />
          </a> */}
      </div>
      <div className="row">
        {/* Project1 */}
        <div className="project-card">
          <img src={img1} alt="" />
          <div className="project-card-details">
            <h6 className="mb16 supreme24bold">Coworking Emmenhof</h6>
            <p className="supreme18light">
              An inspiring hub for innovative minds, a coworking space that
              fosters collaboration, creativity, and productivity in a vibrant
              and flexible work environment
            </p>
            <div className="project-cta">
              <a
                href="https://www.figma.com/proto/RE1cRI5lwZ5lu3Pf57N7T3/cowork?page-id=0%3A1&type=design&node-id=2-2&viewport=497%2C307%2C0.09&scaling=min-zoom"
                className="button"
                target="_blank"
                rel="noreferrer"
              >
                View Project
                <img src={arrow1} alt="" />
              </a>
            </div>
          </div>
        </div>
        {/* Project2 */}
        <div className="project-card">
          <img src={img3} alt="" />
          <div className="project-card-details">
            <h6 className="mb16 supreme24bold">AllDrop</h6>
            <p className="supreme18light">
              Get rewarded for #HODLing your NFT's. Partnered With the most
              known NFT artists And collection creators, to bring you incredible
              rewards just for holding favorite NFT's.
            </p>
            <div className="project-cta">
              <a
                href="https://www.figma.com/proto/4B1LLT43QUM9hi1JUYOmJy/All-drop?page-id=0%3A1&type=design&node-id=1-11&viewport=666%2C533%2C0.16&scaling=min-zoom&starting-point-node-id=1%3A177"
                className="button"
                target="_blank"
                rel="noreferrer"
              >
                View Project
                <img src={arrow1} alt="" />
              </a>
              <a
                href="https://alldrop.io/"
                className="button"
                target="_blank"
                rel="noreferrer"
              >
                Website Link
                <img src={arrow1} alt="" />
              </a>
            </div>
          </div>
        </div>
        {/* Project3 */}
        <div className="project-card">
          <img src={img5} alt="" />
          <div className="project-card-details">
            <h6 className="mb16 supreme24bold">MSC</h6>
            <p className="supreme18light">
              Reviving the spirit of British classics with our one-stop online
              shop for authentic parts, catering to the needs of every British
              classic car enthusiast
            </p>
            <div className="project-cta">
              <a
                href="https://www.figma.com/file/upH08Zb0V1f7uldTdZSPir/MSC?type=design&node-id=0%3A1&t=gVaeDJZUo1tFvXNM-1"
                className="button"
                target="_blank"
                rel="noreferrer"
              >
                View Project
                <img src={arrow1} alt="" />
              </a>
            </div>
          </div>
        </div>
        {/* Project4 */}
        <div className="project-card">
          <img src={img7} alt="" />
          <div className="project-card-details">
            <h6 className="mb16 supreme24bold">NextPatron</h6>
            <p className="supreme18light">
              Empowering startups with the vital fuel for growth, NextPatron are
              dedicated venture capitalists offering strategic funding and
              guidance to fuel founders entrepreneurial journey
            </p>
            <div className="project-cta">
              <a
                href="https://www.figma.com/proto/iGrCGFhunRoJW4vFRCXzfN/NextPatron?page-id=0%3A1&type=design&node-id=71-397&viewport=1169%2C439%2C0.15&scaling=min-zoom"
                className="button"
                target="_blank"
                rel="noreferrer"
              >
                View Project
                <img src={arrow1} alt="" />
              </a>
              <a
                href="https://nextpatron.ch/"
                className="button"
                target="_blank"
                rel="noreferrer"
              >
                Live Website
                <img src={arrow1} alt="" />
              </a>
            </div>
          </div>
        </div>
        {/* Project5 */}
        <div className="project-card">
          <img src={img9} alt="" />
          <div className="project-card-details">
            <h6 className="mb16 supreme24bold">FounderStudio</h6>
            <p className="supreme18light">
              Fundraising is easy with FounderStudio, accessible and fun! An
              innovative VideoPitch App allows Founders to raise funds from the
              crowd.
            </p>
            <div className="project-cta">
              <a
                href="https://www.figma.com/proto/fqR3jrOKYznJvGfkMvKgRw/FounderStudio_Landing?page-id=141%3A109&type=design&node-id=1429-4123&viewport=939%2C1934%2C0.12&scaling=min-zoom&starting-point-node-id=1429%3A4123"
                className="button"
                target="_blank"
                rel="noreferrer"
              >
                View Project
                <img src={arrow1} alt="" />
              </a>
            </div>
          </div>
        </div>

        {/* Project1 */}
        <div className="project-card">
          <img src={img2} alt="" />
          <div className="project-card-details">
            <h6 className="mb16 supreme24bold">Rust Coaches</h6>
            <p className="supreme18light">
              Elevate your Rust gameplay with our exclusive platform connecting
              passionate gamers to skilled coaches, providing personalized
              strategies and training to dominate the virtual world
            </p>
            <div className="project-cta">
              <a
                href="https://www.figma.com/proto/Iy4SJt8cHABSAXmrewE3mh/Rust-Coaches?page-id=0%3A1&type=design&node-id=1-63&viewport=1561%2C705%2C0.15&scaling=min-zoom&starting-point-node-id=1%3A419"
                className="button"
                target="_blank"
                rel="noreferrer"
              >
                View Project
                <img src={arrow1} alt="" />
              </a>
              <a
                href="https://www.figma.com/file/Iy4SJt8cHABSAXmrewE3mh/Rust-Coaches?type=design&node-id=0%3A1&t=r7yepgC35N7E3rda-1"
                className="button"
                target="_blank"
                rel="noreferrer"
              >
                Project Screens
                <img src={arrow1} alt="" />
              </a>
            </div>
          </div>
        </div>
        {/* Project2 */}
        <div className="project-card">
          <img src={img10} alt="" />
          <div className="project-card-details">
            <h6 className="mb16 supreme24bold">Esport Legacy</h6>
            <p className="supreme18light">
              Step into a world where gaming meets learning. Our immersive
              platform offers exhilarating live gaming events alongside
              comprehensive courses taught by top-tier gamers, empowering you to
              level up your gameplay and achieve mastery.
            </p>
            <div className="project-cta">
              <a
                href="https://www.figma.com/file/1NWocyo1b8TqWe7Nf27ZLw/Esport-Legacy?type=design&node-id=0%3A1&t=MbQnM6ZtttbuvWvz-1"
                className="button"
                target="_blank"
                rel="noreferrer"
              >
                Project Screens
                <img src={arrow1} alt="" />
              </a>
            </div>
          </div>
        </div>
        {/* Project3 */}
        <div className="project-card">
          <img src={img4} alt="" />
          <div className="project-card-details">
            <h6 className="mb16 supreme24bold">E-learning platform</h6>
            <p className="supreme18light">
              Empowering individuals with diverse abilities and those facing
              unemployment, our dedicated e-learning platform provides a
              supportive environment to develop crucial skills, unlocking
              opportunities for sustainable employment and personal growth
            </p>
            <div className="project-cta">
              <a
                href="https://www.figma.com/proto/a276BcpjmVypaespMMbM8c/Online-Video-Course-Platform?page-id=0%3A1&type=design&node-id=9-2&viewport=230%2C606%2C0.64&scaling=min-zoom"
                className="button"
                target="_blank"
                rel="noreferrer"
              >
                Project Screens
                <img src={arrow1} alt="" />
              </a>
            </div>
          </div>
        </div>
        {/* Project4 */}
        <div className="project-card">
          <img src={img6} alt="" />
          <div className="project-card-details">
            <h6 className="mb16 supreme24bold">NoLimitTuning</h6>
            <p className="supreme18light">
              Embark on the ride of a lifetime with our premier online
              destination, offering a vast selection of motorcycles and
              top-quality gear for riders of all levels. Experience the thrill,
              safety, and style you deserve
            </p>
            <div className="project-cta">
              <a
                href="https://www.figma.com/proto/DGMPvCKhfgDZrU2ohVFok5/No-Limit-Tuning?page-id=0%3A1&type=design&node-id=1-3&viewport=519%2C593%2C0.22&scaling=min-zoom"
                className="button"
                target="_blank"
                rel="noreferrer"
              >
                Project Screens
                <img src={arrow1} alt="" />
              </a>
            </div>
          </div>
        </div>
        {/* Project5 */}
        <div className="project-card">
          <img src={img8} alt="" />
          <div className="project-card-details">
            <h6 className="mb16 supreme24bold">Arbinauts</h6>
            <p className="supreme18light">
              Empowering pioneers to reach for the stars with our cutting-edge
              launchpad built on the revolutionary Arbitrum network. Seamlessly
              launch and scale your stellar projects with unparalleled speed,
              security, and efficiency.
            </p>
            <div className="project-cta">
              <a
                href="https://www.figma.com/proto/g6v24auDv48rJEE3DAAOiv/d?page-id=0%3A1&type=design&node-id=1-46&viewport=545%2C1072%2C0.14&scaling=min-zoom"
                className="button"
                target="_blank"
                rel="noreferrer"
              >
                Project Screens
                <img src={arrow1} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default RecentWork;
