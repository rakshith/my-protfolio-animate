"use client";

import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import React, { useState } from "react";

const projectData = [
  {
    image: "/work/3.png",
    category: "reactjs",
    name: "Nexa Website",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Nemo laboriosam voluptatum velit veniam doloremque exercitationem quae quibusdam ducimus debitis natus? Aspernatur, 
    amet cumque quod ad ipsam ratione quae tenetur et.`,
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "Nextjs",
    name: "Nexa Website",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Nemo laboriosam voluptatum velit veniam doloremque exercitationem quae quibusdam ducimus debitis natus? Aspernatur, 
    amet cumque quod ad ipsam ratione quae tenetur et.`,
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "Nextjs",
    name: "Nexa Website",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Nemo laboriosam voluptatum velit veniam doloremque exercitationem quae quibusdam ducimus debitis natus? Aspernatur, 
    amet cumque quod ad ipsam ratione quae tenetur et.`,
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "React native",
    name: "Nexa Website",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Nemo laboriosam voluptatum velit veniam doloremque exercitationem quae quibusdam ducimus debitis natus? Aspernatur, 
    amet cumque quod ad ipsam ratione quae tenetur et.`,
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "Nextjs",
    name: "Nexa Website",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Nemo laboriosam voluptatum velit veniam doloremque exercitationem quae quibusdam ducimus debitis natus? Aspernatur, 
    amet cumque quod ad ipsam ratione quae tenetur et.`,
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "React native",
    name: "Nexa Website",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Nemo laboriosam voluptatum velit veniam doloremque exercitationem quae quibusdam ducimus debitis natus? Aspernatur, 
    amet cumque quod ad ipsam ratione quae tenetur et.`,
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "React native",
    name: "Nexa Website",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Nemo laboriosam voluptatum velit veniam doloremque exercitationem quae quibusdam ducimus debitis natus? Aspernatur, 
    amet cumque quod ad ipsam ratione quae tenetur et.`,
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "Nextjs",
    name: "Nexa Website",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Nemo laboriosam voluptatum velit veniam doloremque exercitationem quae quibusdam ducimus debitis natus? Aspernatur, 
    amet cumque quod ad ipsam ratione quae tenetur et.`,
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "React native",
    name: "Nexa Website",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Nemo laboriosam voluptatum velit veniam doloremque exercitationem quae quibusdam ducimus debitis natus? Aspernatur, 
    amet cumque quod ad ipsam ratione quae tenetur et.`,
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "React native",
    name: "Nexa Website",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Nemo laboriosam voluptatum velit veniam doloremque exercitationem quae quibusdam ducimus debitis natus? Aspernatur, 
    amet cumque quod ad ipsam ratione quae tenetur et.`,
    link: "/",
    github: "/",
  },
];

const uniqueCategories = [
  "all projects",
  //@ts-ignore
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList
            className="w-full grid h-full 
            mb-12 mx-auto md:border dark:border-none
          md:grid-cols-4 lg:max-w-[740px]"
          >
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div
            className="text-lg xl:mt-8 grid 
          grid-cols-1 lg:grid-cols-3 gap-4"
          >
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
