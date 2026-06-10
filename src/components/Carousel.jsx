import { useEffect, useRef } from "react";
import { SiGithub } from "react-icons/si";
import Separator from "./ui/separator";
import Postgres from "../assets/images/skills/postgreesql.png";
import Nextjs from "../assets/images/skills/next.js-logo.avif";
import Nestjs from "../assets/images/skills/nest.js-logo.avif";
import Docker from "../assets/images/skills/docker-logo.gif";
import Pandas from "../assets/images/skills/pandas.svg";
import Fastapi from "../assets/images/skills/fastapi.png";
import Python from "../assets/images/skills/python.png";
import Scikit from "../assets/images/skills/scikit.png";
import Tensorflow from "../assets/images/skills/Tensorflow_logo.svg.png";
import Ts from "../assets/images/skills/ts.webp";
import Reactjs from "../assets/images/skills/react.png";
import Hardhat from "../assets/images/skills/hardhat.png";
import Solidity from "../assets/images/skills/solidity.png";
import Wordpress from "../assets/images/skills/wordpress.png";

const technologies = [
  {
    name: "React (js/Native)",
    icon: <img src={Reactjs} className='text-indigo-600 w-22 h-22' />,
  },
  {
    name: "Typescript",
    icon: <img src={Ts} className='text-blue-600 w-18 h-18' />,
  },
  {
    name: "Python",
    icon: (
      <img src={Python} className='text-indigo-600 w-18 h-18 bg-background' />
    ),
  },
  // {
  //   name: "Solidity",
  //   icon: <img src={Solidity} className='text-indigo-600 w-22 h-22' />,
  // },
  {
    name: "PostgreSQL",
    icon: <img src={Postgres} className='text-indigo-600 w-18 h-18' />,
  },
  { name: "GitHub", icon: <SiGithub className='text-gray-800 w-14 h-14' /> },
  {
    name: "Docker",
    icon: <img src={Docker} className='text-indigo-600 w-18 h-18' />,
  },
  {
    name: "Nextjs",
    icon: <img src={Nextjs} className='text-indigo-600 w-18 h-18' />,
  },
  {
    name: "Nestjs",
    icon: <img src={Nestjs} className='text-indigo-600 w-18 h-18' />,
  },
  {
    name: "FastAPI",
    icon: <img src={Fastapi} className='text-indigo-600 w-18 h-18' />,
  },
  // {
  //   name: "Pandas",
  //   icon: <img src={Pandas} className='text-indigo-600 w-18 h-18' />,
  // },
  // {
  //   name: "Scikit-learn",
  //   icon: <img src={Scikit} className='text-indigo-600 w-18 h-18' />,
  // },
  // {
  //   name: "TensorFlow",
  //   icon: <img src={Tensorflow} className='text-indigo-600 w-18 h-18' />,
  // },
  // {
  //   name: "Hardhat",
  //   icon: <img src={Hardhat} className='text-indigo-600 w-18 h-18' />,
  // },
  {
    name: "WordPress",
    icon: <img src={Wordpress} className='text-indigo-600 w-18 h-18' />,
  },
];

export default function TechCarousel() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const scroll = () => {
      scrollPosition += scrollSpeed;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
    };

    const intervalId = setInterval(scroll, 20);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id='experiences'>
      <div className='text-center'>
        <Separator id='experiences' title='Tools and Technologies' />

        <div className='relative w-full max-w-6xl mx-auto overflow-hidden'>
          {/* Left fade overlay */}
          <div className='absolute left-0 top-0 bottom-0 w-24  z-10 pointer-events-none' />

          {/* Right fade overlay */}
          <div className='absolute right-0 top-0 bottom-0 w-24  z-10 pointer-events-none' />

          {/* Scrolling container */}
          <div
            ref={scrollRef}
            className='flex gap-8 overflow-x-hidden py-4 px-8'
            style={{ scrollBehavior: "auto" }}
          >
            {/* Duplicate the items for seamless loop */}
            {[...technologies, ...technologies].map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className='flex items-center gap-3 flex-shrink-0 px-4 py-2'
              >
                <span className='text-xl'>{tech.icon}</span>
                <span className='text-base font-medium text-gray-700 whitespace-nowrap'>
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
