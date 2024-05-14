import React, { useEffect } from "react";
import smallline from "../assets/images/Vector 5.svg";
import line from "../assets/images/Vector 1.svg";
import ScrollReveal from "scrollreveal";

function Services() {
  useEffect(() => {
    ScrollReveal().reveal(".service-card", { interval: 500 });
  });

  const services = [
    {
      id: 1,
      title: "Graphic design",
      p: "Building brands that can make their own mark in the marketplace.",
      details: ["Brand identity", "Digital Graphics", "Illustrations 2D/3D"],
    },
    {
      id: 2,
      title: "UI / UX",
      p: "Shaping website interfaces and experiences that convert leads to customers.",
      details: ["Adobe Suite", "Figma"],
    },
    {
      id: 3,
      title: "Development",
      p: "Coding from zero for ultimate flexibility is my expertise, I’m fluent in ",
      details: ["HTML/CSS/Javascript", "ReactJS/NextJS"],
    },
    {
      id: 4,
      title: "No-Code websites",
      p: "Scaling business through modern code-free platforms to build digital experiences.",
      details: ["Webflow", "Framer"],
    },
  ];

  return (
    <article className="container mt200">
      <div className="container-header flex-row-center gap24 mb80">
        <h1 className="bebas48">Services</h1>
        <img src={smallline} alt="" />
        <p className="supreme24reg flex-row-center gap10">
          what i can do for you
        </p>
      </div>

      <div className="services-grid">
        {services.map((s) => (
          <div key={s.id} className="service-card">
            <div>
              <h1 className="supreme22med"> {s.title} </h1>
              <p className="supreme15light ">{s.p}</p>
            </div>
            <ul>
              {s.details.map((d) => (
                <li className="flex-row-center gap8 supreme15reg">
                  <img src={line} alt="" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </article>
  );
}

export default Services;
