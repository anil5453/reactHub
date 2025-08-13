import React from "react";
import illustration from "../pics/9963641.jpg";

export default function Home() {
  return (
    <div className="home-wrapper">
      <div className="marquee-container rounded-5">
      <div className="marquee-text">
        Build. Learn. React. — Where concepts meet creation.
      </div>
    </div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <p className="tagline animate-fadein">New Zen Info Tech Solution</p>
          <h1 className="animate-slideup">
            Online <span className="highlight">React</span> Learning Hub
          </h1>
          <p className="animate-fadein-delay">
  Master React the fun way — with interactive lessons, smooth animations, and real-world projects!
</p>
<p className="animate-fadein-delay2">
  Brought to you by the ReactHub team — with 15+ hands-on projects that turn theory into skill.
</p>
<p className="animate-fadein-delay3">
  Ready to see my work.... Check out my portfolio below 🚀
</p>

          <a
            href="https://anil5453.github.io/myprotfo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="discover-btn animate-bounce">Discover more+</button>
          </a>
        </div>

        <div className="hero-image animate-float">
          <img src={illustration} alt="Learning illustration" />
        </div>
      </section>
    </div>
  );
}
