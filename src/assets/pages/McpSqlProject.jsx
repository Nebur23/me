import { Link } from "react-router";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Badge from "../../components/ui/badge";
import Button from "../../components/ui/button";
import screenshot180826 from "../images/projects/mcp/Screenshot 2026-03-03 180826.png";
import screenshot180843 from "../images/projects/mcp/Screenshot 2026-03-03 180843.png";
import screenshot181758 from "../images/projects/mcp/Screenshot 2026-03-03 181758.png";
import screenshot181820 from "../images/projects/mcp/Screenshot 2026-03-03 181820.png";
import screenshot181946 from "../images/projects/mcp/Screenshot 2026-03-03 181946.png";

const stack = [
  "TypeScript",
  "Bun",
  "Fastify (v2) / Express (v1)",
  "Knex.js",
  "JSON-RPC",
  "MCP SDK",
];

const screenshots = [
  {
    src: screenshot180826,
    alt: "MCP server TypeScript code alongside a Copilot database query in VS Code",
    caption: "Implementing JSON-RPC server methods in TypeScript",
  },
  {
    src: screenshot180843,
    alt: "MCP server code and Copilot tool call in the VS Code chat panel",
    caption: "Connecting Copilot to the MCP server",
  },
  {
    src: screenshot181758,
    alt: "MCP server code and an SQL tool request in VS Code",
    caption: "Inspecting the SQL tool request",
  },
  {
    src: screenshot181820,
    alt: "MCP server code with a database query displayed in Copilot chat",
    caption: "Reviewing a query sent to the server",
  },
  {
    src: screenshot181946,
    alt: "Copilot displaying structured database query results in VS Code",
    caption: "Database query results returned by the agent",
  },
];

const McpSqlProjectPage = () => (
  <div className="portfolio-shell">
    <Header />
    <main className="project-detail page-width">
      <Link className="project-back-link" to="/#projects">
        <span aria-hidden="true">←</span> Back to selected work
      </Link>

      <header className="project-detail-hero">
        <div className="project-detail-title">
          <p className="eyebrow">PROJECT / DEVELOPER TOOLS</p>
          <h1>SQL MCP Server <span>(Model Context Protocol)</span></h1>
          <p className="project-detail-summary">
            A local bridge between AI assistants and private SQL databases.
          </p>
        </div>
        <Button
          href="https://github.com/Nebur23/MCP-Sql"
          target="_blank"
          rel="noreferrer"
          variant="outline"
        >
          View source on GitHub <span aria-hidden="true">↗</span>
        </Button>
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
              AI assistants (such as Claude, ChatGPT, or GitHub Copilot) are
              powerful, but they often remain isolated from local development
              environments and private databases. The initial goal of this
              project was educational: to understand how the Model Context
              Protocol (MCP) works internally by building it from scratch,
              without an SDK. The goal then evolved into a productivity tool:
              enabling users to query and analyze a database&apos;s structure
              using natural language, through any compatible AI agent (Claude
              Code, Codex Desktop, or Copilot).
            </p>
          </div>
        </section>

        <section className="project-detail-section">
          <p className="project-section-index">02 / ENGINEERING</p>
          <div>
            <h2>Main Technical Challenge</h2>
            <p>
              The main challenge was demystifying communication between an LLM
              and an external tool. Unlike a conventional REST API, the MCP
              protocol is based on JSON-RPC. I had to manually implement
              handling for its specific methods (initialize, tools/list,
              tools/call) and understand how to map the AI&apos;s intentions
              into executable database queries.
            </p>
            <p>
              A second challenge was integrating the database driver (Knex.js):
              the server needed to intercept the tool call, execute the SQL
              query securely, and return a structured payload that the LLM
              could interpret without hallucinating.
            </p>
          </div>
        </section>

        <section className="project-detail-section">
          <p className="project-section-index">03 / ARCHITECTURE</p>
          <div>
            <h2>Solution &amp; Architecture Choices</h2>
            <p>The project was developed in two iterations:</p>
            <ul className="project-iterations">
              <li>
                <strong>V1 (Proof of concept):</strong> A bare-bones
                implementation in TypeScript, Express, and Bun. I created a
                custom HTTP endpoint to manually parse JSON-RPC payloads. For
                the MVP, I connected this server to the VS Code Copilot agent
                to test queries in real time. The connection focused on SQL
                Server, due to my professional environment at the time.
              </li>
              <li>
                <strong>V2 (Refactor in progress):</strong> To align the
                project with the 2026 MCP specification (Streamable HTTP
                transport), I am migrating the architecture to Fastify (for
                better performance) and adopting the official TypeScript MCP
                SDK. This version now targets PostgreSQL as its priority, while
                retaining a modular architecture through Knex.js to support
                other database systems in the future.
              </li>
            </ul>
          </div>
        </section>

        <section className="project-detail-section">
          <p className="project-section-index">04 / OUTCOME</p>
          <div>
            <h2>Result &amp; Impact</h2>
            <p>
              The server runs locally and allows an AI agent to inspect tables
              and execute queries safely. The project is fully open source,
              serving both as a personal productivity tool and an educational
              resource for developers who want to understand how the MCP
              protocol works beyond the abstractions provided by SDKs.
            </p>
          </div>
        </section>

        <section className="project-gallery-section">
          <div className="project-gallery-heading">
            <div>
              <p className="project-section-index">05 / VISUALS</p>
              <h2>Gallery &amp; Evidence</h2>
            </div>
            <p>Implementation and query results from VS Code.</p>
          </div>
          <div className="project-gallery-grid">
            {screenshots.map((screenshot) => (
              <figure className="project-gallery-figure" key={screenshot.src}>
                <img
                  className="project-gallery-image"
                  src={screenshot.src}
                  alt={screenshot.alt}
                  loading="lazy"
                />
                <figcaption>{screenshot.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      </div>
    </main>
    <Footer />
  </div>
);

export default McpSqlProjectPage;
