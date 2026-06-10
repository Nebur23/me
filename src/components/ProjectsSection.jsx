import React from "react";
import Separator from "./ui/separator";
import MCP from "../assets/images/projects/mcp-server.png";
import MentorGuru from "../assets/images/projects/mentorguru.png";
import Allogaz from "../assets/images/projects/allogazcm.png"
import Badge from "./ui/badge";
import Button from "./ui/button";

const projects = [
  // {
  //   title: "Bizsense AI",
  //   image: Bizsense, // Replace with your own image
  //   tech: ["Nextjs", "Supabase", "fastapi", "tensorflow", "shadcn", "docker"],
  //   description:
  //     "An AI-enhanced ERP system for small businesses with real-time cash flow forecasting.",
  //   link: "https://bizsense-ai.vercel.app",
  // },
   {
    title: "MCP-SQL",
    image: MCP,
    tech: ["MCP Protocol", "Express.js", "typescript", "knex"],
    description:
      "A TypeScript MCP server (Express transport) that connects SQL databases to LLMs. Built from scratch, to understand the Mcp protocol working and implementation.",
    link: "https://github.com/Nebur23/MCP-Sql",
  },
  {
    title: "Mentor Guru",
    image: MentorGuru,
    tech: ["React Native", "Appwrite", "Playstore"],
    description:
      " A mobile app for Cameroon GCE students to connect with mentors, access resources, and enhance their learning experience.",
    link: "https://play.google.com/store/apps/details?id=com.jpteks.mentorguru&pcampaignid=web_share",
  },
  {
    title: "AlloGaz CM",
    image: Allogaz,
    tech:["Nextjs"],
    description:"An App that helps you find gaz bottles in your neighbourhood",
    link: "https://allo-gaz.vercel.app/search",
  },
];

const ProjectsSection = () => {
  return (
    <section id='projects' className='py-20 px-6 text-white'>
      <div className='max-w-6xl mx-auto text-center'>
        <Separator title='Recent Work' />
        <div className='grid md:grid-cols-3 gap-8 mt-12'>
          {projects.map((project, index) => (
            <div
              key={index}
              className=' rounded-[2rem] backdrop-blur-lg  shadow-lg border border-white/20 hover:shadow-lg transition p-7 w-[100%] md:w-full '
            >
              <div className='rounded-[2rem]  h-1/2 overflow-hidden mb-4 '>
                <a href={project.link} target='_blank'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className='md:w-full md:h-full md:object-fill'
                  />
                </a>
              </div>
              <h3 className='text-2xl text-left font-semibold font-monofett text-slate-600 mb-2'>
                {project.title}
              </h3>

              <div className='flex flex-wrap'>
                {project.tech.map(tech => (
                  <Badge text={tech} key={tech} />
                ))}
              </div>

              <p className='text-sm  text-slate-500 text-left'>
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>

           <div className='flex justify-center'>
            <Button text="More on GitHub" style="mt-8" link="https://github.com/Nebur23/" />
           </div>


    </section>
  );
};

export default ProjectsSection;
