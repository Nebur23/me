import Footer from "../../components/footer";
import Hero from "../../components/hero";
import Header from "../../components/header";
import ProjectsSection from "../../components/ProjectsSection";
import AboutSection from "../../components/about";

const HomePage = () => {
  return (
    <div className="portfolio-shell">
      <Header />
      <Hero />
      <ProjectsSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default HomePage;
