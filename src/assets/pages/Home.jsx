import TechCarousel from "../../components/Carousel";
import Footer from "../../components/footer";
import Hero from "../../components/hero";
import Header from "../../components/header";
import ProjectsSection from "../../components/ProjectsSection";

const HomePage = () => {
  return (
    <div className='bg-[#131313] text-text min-h-screen relative'>
      <Header />
      <Hero />
      <TechCarousel />
      <ProjectsSection />
      <Footer />
    </div>
  );
};

export default HomePage;
