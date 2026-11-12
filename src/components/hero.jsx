import { Link } from "react-router";

const Hero = () => (
  <section className="hero-section page-width" id="home">
    <div className="hero-geometry" aria-hidden="true" />
    <div className="hero-content">
      <p className="hero-greeting">Hello, I&apos;m</p>
      <h1>Neb</h1>
      <p className="hero-role">Software Engineer &amp; Builder</p>
      <p className="hero-description">
        I build thoughtful web products, developer tools, and practical AI
        experiences in Cameroon.
      </p>
      <div className="hero-actions">
        <Link className="hero-work-link" to="#projects">
          Explore selected work <span aria-hidden="true">↓</span>
        </Link>
        <a className="hero-contact-link" href="mailto:rubenloic8@gmail.com">
          Get in touch <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
