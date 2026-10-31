import portrait from "../assets/images/hero-dev.png";
import Button from "./ui/button";

const Hero = () => (
  <section className="hero-section" id="home">
    <div className="portrait-frame">
      <div className="portrait-orbit" aria-hidden="true" />
      <div className="portrait-image-mask">
        <img className="hero-portrait" src={portrait} alt="Portrait of Neb" />
      </div>
      <span className="portrait-caption">ENGINEER · CAMEROON</span>
    </div>

    <p className="eyebrow"><span className="status-dot" /> Open to meaningful projects</p>
    <h1>
      I build things
      <br />
      for the <span>real world.</span>
    </h1>
    <p className="hero-description">
      Hey, I&apos;m Neb — a software engineer making thoughtful web products,
      developer tools, and practical AI experiences.
    </p>
    <div className="hero-actions">
      <Button href="#projects" variant="default">Explore my work <span aria-hidden="true">↓</span></Button>
      <a className="text-link" href="mailto:rubenloic8@gmail.com">Get in touch <span aria-hidden="true">↗</span></a>
    </div>
  </section>
);

export default Hero;
