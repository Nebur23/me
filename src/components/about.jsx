import Badge from "./ui/badge";

const skills = ["React", "TypeScript", "Next.js", "Node.js", "Python", "PostgreSQL", "Docker"];

const AboutSection = () => (
  <section className="about-section page-width" id="about">
    <div className="about-copy">
      <p className="eyebrow">A LITTLE ABOUT ME</p>
      <h2>Curious by nature.<br /><span>Engineer by trade.</span></h2>
      <p>
        I enjoy taking ideas from rough sketches to reliable software. My work
        spans frontend experiences, backend systems, and the infrastructure
        that keeps them running — with a special interest in tools that make
        everyday work a little easier.
      </p>
    </div>
    <div className="toolbox">
      <p className="eyebrow">MY EVERYDAY TOOLBOX</p>
      <div className="toolbox-list">
        {skills.map((skill) => <Badge key={skill}>{skill}</Badge>)}
      </div>
      <p className="toolbox-note">And always learning what&apos;s next.</p>
    </div>
  </section>
);

export default AboutSection;
