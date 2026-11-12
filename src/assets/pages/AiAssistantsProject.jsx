import { Link } from "react-router";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Badge from "../../components/ui/badge";
import g1 from "../images/projects/galaxy/g1.jpeg";
import g2 from "../images/projects/galaxy/g2.jpeg";
import c1 from "../images/projects/galaxy/mfiles-chat.png";
import c2 from "../images/projects/galaxy/mfiles-chat2.png";

const stack = [
  "C# (.NET / M-Files VAF)",
  "JavaScript (M-Files UIX)",
  "Node.js",
  "WhatsApp Business API",
  "Gemini API",
  "Grok API",
];

const AiAssistantsProjectPage = () => (
  <div className="portfolio-shell">
    <Header />
    <main className="project-detail page-width">
      <Link className="project-back-link" to="/#projects">
        <span aria-hidden="true">←</span> Back to selected work
      </Link>

      <header className="project-detail-hero">
        <div className="project-detail-title">
          <p className="eyebrow">PROJECT / AI PROTOTYPING</p>
          <h1>Prototypage d&apos;Assistants IA <span>(M-Files &amp; Kamer Flash)</span></h1>
        </div>
        <div className="project-detail-actions">
          <p className="project-internal-note">
            Projet interne / Architecture documentée
          </p>
        </div>
        <div className="project-detail-stack" aria-label="Technology stack">
          {stack.map((technology) => (
            <Badge key={technology} variant="secondary">{technology}</Badge>
          ))}
        </div>
      </header>

      <div className="project-detail-content">
        <section className="project-detail-section">
          <p className="project-section-index">01 / CONTEXTE</p>
          <div>
            <h2>Contexte &amp; Objectif</h2>
            <p>
              Chez Galaxy Conseils, l&apos;objectif était d&apos;explorer
              l&apos;automatisation intelligente en interne et de préparer la
              relaunch du marketplace Kamer Flash. Plutôt que d&apos;acheter
              des extensions IA coûteuses, la mission était de développer des
              Preuves de Concept (PoC) pour valider la faisabilité technique de
              solutions maison, avec l&apos;ambition à terme de les publier sur
              le marketplace M-Files.
            </p>
          </div>
        </section>

        <section className="project-detail-section">
          <p className="project-section-index">02 / INGÉNIERIE</p>
          <div>
            <h2>Défi Technique Majeur</h2>
            <p>
              Deux défis d&apos;intégration distincts : (a) Maîtriser les SDK
              propriétaires de M-Files (VAF pour le back-end, UIX pour le
              front-end) pour répliquer des fonctionnalités d&apos;analyse
              documentaire complexes ; (b) Gérer les contraintes strictes de
              l&apos;API WhatsApp Business (webhooks, numéros dédiés, validation
              des templates) pour assurer une communication fiable avec un
              modèle de langage.
            </p>
          </div>
        </section>

        <section className="project-detail-section">
          <p className="project-section-index">03 / ARCHITECTURE</p>
          <div>
            <h2>Solution &amp; Choix d’Architecture</h2>
            <ul className="project-iterations">
              <li>
                <strong>Assistant Documentaire (M-Files) :</strong>{" "}
                Développement d&apos;une Vault Application personnalisée. Le
                front-end (UIX/JS) affiche un panneau de chat contextuel.
                Lorsqu&apos;un document est sélectionné, le back-end (VAF/C#)
                intercepte l&apos;action, appelle l&apos;API Gemini, et renvoie
                un résumé structuré ou extrait des métadonnées.
              </li>
              <li>
                <strong>Chatbot WhatsApp (Kamer Flash) :</strong> Création
                d&apos;un service Node.js écoutant les webhooks de l&apos;API
                WhatsApp Business. Les messages reçus sont routés vers le
                modèle Grok pour générer des réponses automatiques.
                L&apos;architecture était conçue pour intégrer ultérieurement
                une couche RAG connectée à la base de données WooCommerce du
                site.
              </li>
            </ul>
          </div>
        </section>

        <section className="project-detail-section">
          <p className="project-section-index">04 / RÉSULTAT</p>
          <div>
            <h2>Résultat / Impact</h2>
            <p>
              Livraison de deux MVP fonctionnels validant la viabilité
              technique des deux approches. Le PoC M-Files a démontré qu&apos;une
              alternative interne aux extensions payantes était réalisable,
              ouvrant la voie à une potentielle publication sur le M-Files
              Marketplace. Le bot WhatsApp a établi les fondations solides pour
              l&apos;automatisation du service client de Kamer Flash.
            </p>
          </div>
        </section>

        <section className="project-gallery-section">
          <div className="project-gallery-heading">
            <div>
              <p className="project-section-index">05 / VISUELS</p>
              <h2>Galerie / Preuves</h2>
            </div>
            <p>Assistant documentaire M-Files et chatbot Kamer Flash.</p>
          </div>

          <section className="project-evidence-section">
            <div className="project-evidence-heading">
              <p className="eyebrow">M-FILES</p>
              <h3>Assistant Documentaire</h3>
            </div>
            <div className="project-gallery-grid">
              <figure className="project-gallery-figure project-gallery-diagram">
                <img
                  className="project-gallery-image project-gallery-image-natural"
                  src={c1}
                  alt="Diagramme de séquence de l’assistant documentaire M-Files avec le backend VAF et l’API Gemini"
                  loading="lazy"
                />
                <figcaption>
                  Flux de données entre le client M-Files, le backend VAF et
                  l&apos;API Gemini pour une analyse documentaire contextuelle
                </figcaption>
              </figure>
            </div>
          </section>

          <section className="project-evidence-section">
            <div className="project-evidence-heading">
              <p className="eyebrow">KAMER FLASH / WHATSAPP</p>
              <h3>Chatbot et intégration</h3>
            </div>
            <div className="project-gallery-grid">
              <figure className="project-gallery-figure">
                <img
                  className="project-gallery-image project-gallery-image-natural"
                  src={g1}
                  alt="Conversation WhatsApp avec l’assistant de Kamer Flash"
                  loading="lazy"
                />
                <figcaption>Conversation avec l’assistant WhatsApp Kamer Flash</figcaption>
              </figure>
              <figure className="project-gallery-figure">
                <img
                  className="project-gallery-image project-gallery-image-natural"
                  src={g2}
                  alt="Échange client et réponse du chatbot Galaxy sur WhatsApp"
                  loading="lazy"
                />
                <figcaption>Réponse automatisée aux questions d’un client</figcaption>
              </figure>
            
              <figure className="project-gallery-figure project-gallery-diagram">
                <img
                  className="project-gallery-image project-gallery-image-natural"
                  src={c2}
                  alt="Diagramme de séquence du flux asynchrone du chatbot WhatsApp, du webhook à la réponse du LLM"
                  loading="lazy"
                />
                <figcaption>
                  Flux asynchrone typique d&apos;un bot WhatsApp, depuis le
                  webhook jusqu&apos;à la réponse du LLM
                </figcaption>
              </figure>
            </div>
          </section>
        </section>
      </div>
    </main>
    <Footer />
  </div>
);

export default AiAssistantsProjectPage;
