import BlurText from "../assets/animation/BlurText";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";

export default function Home() {
  return (
    <div className='min-h-screen '>
      {/* Hero Section */}
      <main className='pt-24 pb-24 px-8'>
        <div className='max-w-5xl mx-auto text-center'>
          {/* Main Heading */}
          <h1 className='text-5xl md:text-7xl font-light text-gray-800  md:leading-tight  mb-12'>
            <span className='text-xl md:text-4xl'>
              Hi,I'm
              <span className='text-accent font-normal'> Neb</span>
            </span>
            <br />

            <BlurText
              text=' Software & AI Engineer'
              delay={150}
              animateBy='words'
              direction='top'
              //onAnimationComplete={handleAnimationComplete}
              className='text-center md:pl-22 font-monofett'
            />
          </h1>

          {/* Subheading */}
          <p className=''></p>
          <BlurText
            text="I'm a passionate software engineer with a focus on building clean,
            interactive, and efficient applications.I’ve been diving into AI to
            help small businesses make smarter decisions."
            delay={150}
            animateBy='words'
            direction='top'
            //onAnimationComplete={handleAnimationComplete}
            className='md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed'
          />

          {/* CTA Section */}
          <div className='space-y-8'>
            <p className='text-gray-700 text-lg font-light'>Have a project ?</p>

                <a href="mailto:rubenloic8@gmail.com" className='bg-accent text-white rounded-full px-12 py-3 md:text-lg font-medium shadow-lg transition-all inline-block'>
                  Let's Get In touch
                </a>
          </div>
        </div>
      </main>
    </div>
  );
}
