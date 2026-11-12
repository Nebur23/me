import { Link } from "react-router";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Badge from "../../components/ui/badge";
import Button from "../../components/ui/button";
import yigilHome from "../images/projects/yigil/Screenshot 2026-11-12 192733.png";

const stack = [
  "React Router v7 (SSR)",
  "NestJS",
  "Supabase",
  "Docker",
  "GitHub Actions",
  "Render",
];

const YigilProjectPage = () => (
  <div className="portfolio-shell">
    <Header />
    <main className="project-detail page-width">
      <Link className="project-back-link" to="/#projects">
        <span aria-hidden="true">←</span> Back to selected work
      </Link>

      <header className="project-detail-hero">
        <div className="project-detail-title">
          <p className="eyebrow">PROJECT / E-LEARNING</p>
          <h1>Yigil <span>— Web E-Learning Platform</span></h1>
          <p className="project-detail-summary">
            A browser-accessible learning hub for GCE students, with video
            courses and educational resources.
          </p>
        </div>
        <div className="project-detail-actions">
          <Button
            href="https://github.com/Nebur23/mystudies"
            target="_blank"
            rel="noreferrer"
            variant="outline"
          >
            View source on GitHub <span aria-hidden="true">↗</span>
          </Button>
          <Button
            href="https://yigil.onrender.com"
            target="_blank"
            rel="noreferrer"
            variant="outline"
          >
            Visit live site <span aria-hidden="true">↗</span>
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
              After the Not Just Dev hackathon, I wanted to take Mentor Guru
              beyond its Android mobile version. The observation: a native app
              excludes some students and imposes an installation barrier. The
              goal of Yigil was to bring that same mission—offering a central
              hub of video courses and educational resources for GCE
              students—to the web, so it would be equally accessible to iOS and
              Android users from a simple browser, with features equivalent to
              the mobile version.
            </p>
          </div>
        </section>

        <section className="project-detail-section">
          <p className="project-section-index">02 / ENGINEERING</p>
          <div>
            <h2>Main Technical Challenge</h2>
            <p>
              The core of the challenge was the immersive video streaming
              experience. Courses are hosted on our YouTube channel (Master
              Your Studies), but a standard YouTube embed exposes users to
              native controls, recommendations, and a click that sends them
              back to YouTube—an unacceptable distraction for an educational
              platform. It was necessary to remove the native interface and
              manually rebuild a player with its own controls (play/pause,
              timeline navigation, playback speed, volume) via the video
              playback API, while ensuring smooth, uninterrupted playback.
            </p>
          </div>
        </section>

        <section className="project-detail-section">
          <p className="project-section-index">03 / ARCHITECTURE</p>
          <div>
            <h2>Solution &amp; Architecture Choices</h2>
            <p>
              I opted for a modern full-stack architecture, designed for
              performance and maintainability:
            </p>
            <ul className="project-iterations">
              <li>
                <strong>Frontend:</strong> React Router v7 in full-stack
                server-side rendering mode, for optimal SEO and fast load times.
              </li>
              <li>
                <strong>Backend:</strong> NestJS, chosen for its modular, typed
                (TypeScript) structure, ideal for cleanly exposing course APIs
                and managing business logic.
              </li>
              <li>
                <strong>Data:</strong> Supabase for authentication, a relational
                database, and storage, which allowed us to ship quickly
                without maintaining database infrastructure.
              </li>
              <li>
                <strong>Video player:</strong> Custom controls developed on the
                player API, with the complete masking of native YouTube
                elements for total immersion.
              </li>
            </ul>
          </div>
        </section>

        <section className="project-detail-section">
          <p className="project-section-index">04 / DELIVERY</p>
          <div>
            <h2>Result / Impact &amp; CI/CD</h2>
            <p>
              The project is deployed and functional on Render, with an automated
              CI/CD pipeline: every push to the main branch triggers a GitHub
              Action that builds the frontend and backend Docker images,
              publishes them to Docker Hub, then triggers the automatic
              deployment of the latest version on Render. Result: a
              zero-manual production release flow, environment isolation
              through containers, and an e-learning platform truly accessible
              to all students, regardless of their phone.
            </p>
          </div>
        </section>

        <section className="project-gallery-section">
          <div className="project-gallery-heading">
            <div>
              <p className="project-section-index">05 / VISUALS</p>
              <h2>Gallery / Evidence</h2>
            </div>
            <p>Product interface, video player, and deployment pipeline.</p>
          </div>

          <section className="project-evidence-section">
            <div className="project-evidence-heading">
              <p className="eyebrow">WEB INTERFACE</p>
              <h3>Yigil in the browser</h3>
            </div>
            <div className="project-gallery-grid">
              <figure className="project-gallery-figure">
                <img
                  className="project-gallery-image"
                  src={yigilHome}
                  alt="Yigil home page promoting GCE courses and video learning"
                  loading="lazy"
                />
                <figcaption>Yigil home page and course introduction</figcaption>
              </figure>
              <div className="project-gallery-placeholder">
                <span>Course and practice screens</span>
                <span className="gallery-placeholder-hint">
                  Add more web interface screenshots here
                </span>
              </div>
            </div>
          </section>

          <section className="project-evidence-section">
            <div className="project-evidence-heading">
              <p className="eyebrow">CUSTOM VIDEO PLAYER</p>
              <h3>Immersive course playback</h3>
              <p>
                A screenshot of the custom player controls without the native
                YouTube interface will be added here.
              </p>
            </div>
            <div className="project-gallery-grid">
              <div className="project-gallery-placeholder project-gallery-placeholder-full">
                <span>Custom player screenshot</span>
                <span className="gallery-placeholder-hint">
                  Show play, timeline, speed, and volume controls
                </span>
              </div>
            </div>
          </section>

          <section className="project-evidence-section">
            <div className="project-evidence-heading">
              <p className="eyebrow">CI/CD</p>
              <h3>Automated deployment pipeline</h3>
              <p>GitHub Actions → Docker Hub → Render</p>
            </div>
            <div className="project-gallery-grid">
              <div className="project-gallery-placeholder project-gallery-placeholder-full">
                <span>GitHub Actions pipeline screenshot</span>
                <span className="gallery-placeholder-hint">
                  Add a capture of the Docker build and deployment workflow
                </span>
              </div>
            </div>
          </section>
        </section>
      </div>
    </main>
    <Footer />
  </div>
);

export default YigilProjectPage;
