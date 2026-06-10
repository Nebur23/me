import TechCarousel from "../../components/Carousel";
import Footer from "../../components/footer";
import Home from "../../components/GlassHeader";
import Header from "../../components/header";
import Hero from "../../components/hero";
import ProjectsSection from "../../components/ProjectsSection";
import SkillsSection from "../../components/SkillsSection";
//import Squares from "../animation/Squares";

const HomePage = () => {
  return (
    <div className='bg-[#131313] text-text min-h-screen relative'>
      <Header />
      <Home />
      {/* <Hero /> */}
      {/* <SkillsSection /> */}
      <TechCarousel />
      <ProjectsSection />
      <Footer />
    </div>
  );
};

export default HomePage;
