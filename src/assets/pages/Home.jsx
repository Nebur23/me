import Footer from "../../components/footer";
import Header from "../../components/header";
import ProjectsSection from "../../components/ProjectsSection";
import AboutSection from "../../components/about";
import Hero from "../../components/hero";

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
