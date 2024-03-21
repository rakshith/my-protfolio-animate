"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import ProjectCard from "./ProjectCard";

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
    category: "Nodejs",
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
    category: "Nodejs",
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
    category: "Nodejs",
    name: "Nexa Website",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Nemo laboriosam voluptatum velit veniam doloremque exercitationem quae quibusdam ducimus debitis natus? Aspernatur, 
    amet cumque quod ad ipsam ratione quae tenetur et.`,
    link: "/",
    github: "/",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div
          className="max-w-[400px] xl:text-left mb-12 xl:h-[400px]
          flex flex-col justify-center items-center xl:items-start         
          mx-auto xl:mx-0 text-center"
        >
          <h2 className="section-title mb-4 ">Latest Projects</h2>
          <p className="subtitle mb-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,
            nulla assumenda? Doloremque ipsam perspiciatis sint dolorum quisquam
            facere enim inventore, iure asperiores sequi explicabo non eum
            quibusdam porro dolorem beatae?
          </p>
          <Link href={"/projects"}>
            <Button>All Projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0 ">
          <Swiper
            className="h-[500px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the first 4 projects for the slides */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
