import { Link } from "react-router";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Badge from "../../components/ui/badge";
import Button from "../../components/ui/button";
import appPreview from "../images/projects/mentorguru.png";
import certificate from "../images/projects/mentor guru/Yebga Ruben.png";
import productionEvidence from "../images/projects/mentor guru/prod.png";
import day2 from "../images/projects/mentor guru/day-2.png";
import day3 from "../images/projects/mentor guru/day3.png";
import day4 from "../images/projects/mentor guru/day-4.png";
import day5 from "../images/projects/mentor guru/day-5.png";
import day6 from "../images/projects/mentor guru/day-6.png";
import day7 from "../images/projects/mentor guru/day-7.png";
import day8 from "../images/projects/mentor guru/day-8.png";
import day10 from "../images/projects/mentor guru/day-10.png";
import day11 from "../images/projects/mentor guru/day-11.png";

const stack = [
  "React Native",
  "Expo",
  "Appwrite Auth",
  "Appwrite Database",
  "Appwrite Storage",
  "Google Play Console",
];

const testingScreenshots = [
  { day: "Day 2", src: day2 },
  { day: "Day 3", src: day3 },
  { day: "Day 4", src: day4 },
  { day: "Day 5", src: day5 },
  { day: "Day 6", src: day6 },
  { day: "Day 7", src: day7 },
  { day: "Day 8", src: day8 },
  { day: "Day 10", src: day10 },
  { day: "Day 11", src: day11 },
  { day: "Production access checklist", src: productionEvidence },
];

const MentorGuruProjectPage = () => (
  <div className="portfolio-shell">
    <Header />
    <main className="project-detail page-width">
      <Link className="project-back-link" to="/#projects">
        <span aria-hidden="true">←</span> Back to selected work
      </Link>

      <header className="project-detail-hero">
        <div className="project-detail-title">
          <p className="eyebrow">PROJECT / MOBILE E-LEARNING</p>
          <h1>Mentor Guru</h1>
          <p className="project-detail-summary">
            A community learning app connecting Cameroon GCE students with
            mentors and revision resources.
          </p>
        </div>
        <div className="project-detail-actions">
          <Button
            href="https://github.com/Nebur23/mentor-guru-mapp"
            target="_blank"
            rel="noreferrer"
            variant="outline"
          >
            View source on GitHub <span aria-hidden="true">↗</span>
          </Button>
          <Button
            href={certificate}
            target="_blank"
            rel="noreferrer"
            variant="outline"
          >
            View Not Just Hack certificate <span aria-hidden="true">↗</span>
          </Button>
        </div>
        <div className="project-detail-stack" aria-label="Technology stack">
          {stack.map((technology) => (
            <Badge key={technology} variant="secondary">{technology}</Badge>
          ))}
        </div>
      </header>

      <div className="project-detail-content">
        <section className="project-detail-section">
          <p className="project-section-index">01 / OVERVIEW</p>
          <div>
            <h2>Context &amp; Goal</h2>
            <p>
              Students preparing for the GCE in Cameroon lacked a central and
              accessible platform for video-based educational content and
              supplementary resources tailored to their curriculum. Although
              solutions existed, we identified a specific need for a simple
              community hub focused on local realities. The goal was to develop
              a mobile e-learning app that makes it easier to access mentors
              and revision materials.
            </p>
          </div>
        </section>

        <section className="project-detail-section">
          <p className="project-section-index">02 / ENGINEERING</p>
          <div>
            <h2>Main Technical Challenge</h2>
            <p>
              Beyond development, the most complex challenge was the deployment
              and validation process on the Google Play Store. For a first
              developer account, Google requires a 14-day consecutive closed
              testing period with at least 12 active testers. Coordinating this
              phase, ensuring the app complied with all of Google&apos;s
              policies, and maintaining tester engagement was a test of rigor
              and project management.
            </p>
          </div>
        </section>

        <section className="project-detail-section">
          <p className="project-section-index">03 / ARCHITECTURE</p>
          <div>
            <h2>Solution &amp; Architecture Choices</h2>
            <p>To deliver a functional product quickly, we chose a modern, unified stack:</p>
            <ul className="project-iterations">
              <li>
                <strong>Frontend:</strong> React Native with Expo for rapid
                cross-platform development and a smooth user experience.
              </li>
              <li>
                <strong>Backend:</strong> Appwrite, an open-source BaaS, to
                securely manage authentication, the course database, and video
                storage without maintaining complex server infrastructure.
              </li>
              <li>
                <strong>Deployment:</strong> A dedicated tester group through
                Google Play Console to validate builds and meet publishing
                requirements.
              </li>
            </ul>
          </div>
        </section>

        <section className="project-detail-section">
          <p className="project-section-index">04 / OUTCOME</p>
          <div>
            <h2>Result &amp; Impact</h2>
            <p>
              The app was successfully deployed on the Google Play Store after
              completing the 14-day testing period, earning us an official
              certificate at the Not Just Dev hackathon. The app has since been
              removed from the store for account management reasons, but the
              architecture and deployment experience remain fully documented
              in the source code.
            </p>
          </div>
        </section>

        <section className="project-gallery-section">
          <div className="project-gallery-heading">
            <div>
              <p className="project-section-index">05 / VISUALS</p>
              <h2>Gallery &amp; Evidence</h2>
            </div>
            <p>App overview, closed-testing progress, and hackathon certificate.</p>
          </div>

          <section className="project-evidence-section">
            <div className="project-evidence-heading">
              <p className="eyebrow">APPLICATION</p>
              <h3>App preview &amp; interface</h3>
            </div>
            <div className="project-gallery-grid">
              <figure className="project-gallery-figure">
                <img
                  className="project-gallery-image project-gallery-image-wide"
                  src={appPreview}
                  alt="Mentor Guru promotional artwork for Cameroon GCE exam preparation"
                  loading="lazy"
                />
                <figcaption>Mentor Guru app promotional preview</figcaption>
              </figure>
             
            </div>
          </section>

          <section className="project-evidence-section">
            <div className="project-evidence-heading">
              <p className="eyebrow">GOOGLE PLAY CONSOLE</p>
              <h3>14-day closed-testing evidence</h3>
              <p>
                Progress screenshots showing the tester opt-in period and
                production access checklist.
              </p>
            </div>
            <div className="project-gallery-grid">
              {testingScreenshots.map((screenshot) => (
                <figure className="project-gallery-figure" key={screenshot.day}>
                  <img
                    className="project-gallery-image"
                    src={screenshot.src}
                    alt={`Google Play Console closed-testing status: ${screenshot.day}`}
                    loading="lazy"
                  />
                  <figcaption>{screenshot.day}</figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section className="project-evidence-section">
            <div className="project-evidence-heading">
              <p className="eyebrow">RECOGNITION</p>
              <h3>Not Just Hack certificate</h3>
            </div>
            <div className="project-gallery-grid project-certificate-grid">
              <figure className="project-gallery-figure">
                <a
                  className="project-certificate-link"
                  href={certificate}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open the Not Just Hack 2024 certificate"
                >
                  <img
                    className="project-gallery-image project-gallery-certificate-image"
                    src={certificate}
                    alt="Certificate of participation awarded to Yebga Ruben for Not Just Hack 2024"
                    loading="lazy"
                  />
                </a>
                <figcaption>Official certificate — Not Just Hack 2024</figcaption>
              </figure>
            </div>
          </section>
        </section>
      </div>
    </main>
    <Footer />
  </div>
);

export default MentorGuruProjectPage;
