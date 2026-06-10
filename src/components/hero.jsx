import BlurText from "../assets/animation/BlurText";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import Button from "./ui/button";
import { useState } from 'react'


export default function Hero() {

  return (


    <div>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-accent to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
             Software Engineer
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
              Hi, I'm Neb! an Engineer working across enterprise systems, backend engineering, and infrastructure administration.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button text="Let's Get In Touch" mail="rubenloic8@gmail.com" />
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-accent to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
      </div>
    </div>


    // <div className='min-h-screen '>
    //   {/* Hero Section */}
    //   <main className='pt-24 pb-24 px-8'>
    //     <div className='max-w-5xl mx-auto text-center'>
    //       {/* Main Heading */}
    //       <h1 className='text-5xl md:text-7xl font-light text-white  md:leading-tight  mb-12'>
    //         <span className='text-xl md:text-4xl'>
    //           Hi,I'm
    //           <span className='text-accent font-normal'> Neb</span>
    //         </span>
    //         <br />

    //         <BlurText
    //           text=' Software Engineer'
    //           delay={150}
    //           animateBy='words'
    //           direction='top'
    //           //onAnimationComplete={handleAnimationComplete}
    //           className='text-center pl-10 md:pl-32 font-monofett'
    //         />
    //       </h1>

    //       {/* Subheading */}
    //       <p className=''></p>
    //       <BlurText
    //         text="I'm a passionate software engineer with a focus on building clean,
    //         interactive, and efficient applications.I’ve been diving into AI to
    //         help small businesses make smarter decisions."
    //         delay={150}
    //         animateBy='words'
    //         direction='top'
    //         //onAnimationComplete={handleAnimationComplete}
    //         className='md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed text-white'
    //       />

    //       {/* CTA Section */}

    //       <Button text="Let's Get In touch" mail="rubenloic8@gmail.com" />
    //     </div>
    //   </main>
    // </div>
  );
}
