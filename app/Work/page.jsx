"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/shadcn/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSlidersBtns from "../../components/WorkSlidersBtns";

const Projects = [
  {
    num: "01",
    Category: "FullStack Project",
    Title: "Book Store App",
    Description: " A website to browse and buy books.",
    Stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "React.js" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "MySql" },
    ],
    Image: "/AnasBook.png",
    GitHub: "https://github.com/Anashawi/MERAKI_Academy_Project_5-1.git",
  },
  {
    num: "02",
    Category: "FullStack Project",
    Title: "Dokaneh - Grocery App",
    Description: "A site to browse and buy household needs.",
    Stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "React.js" },
      { name: "Redux" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "MongoDB" },
    ],
    Image: "/Groceries.png",
    GitHub: "https://github.com/Anashawi/MERAKI_Academy_Project_5-1.git",
  },
];

export default function Work() {
  const [project, setProject] = useState(Projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    console.log(currentIndex);
    setProject(Projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 "
    >
      <div className="container mx-auto group">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="font-extrabold leading-none text-transparent text-8xl text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.Category}
              </h2>
              <h2 className="text-[32px] font-extrabold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.Title}
              </h2>
              <p className="text-white/60">{project.Description}</p>
              <ul className="flex flex-col gap-3 xl:flex-row">
                {project.Stack.map((item, index) => {
                  return (
                    <li key={index} className=" text-accent">
                      {item.name}
                      {index !== project.Stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20 "></div>
              <div>
                <Link href={project.GitHub} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-3xl text-white group-hover:text-accent"></BsGithub>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {Projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 z-10 w-full h-full bg-black/10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.Image}
                          fill
                          alt="ProjectImage"
                        ></Image>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSlidersBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[30px] w-[44px]  flex justify-center items-center transition-all  "
              ></WorkSlidersBtns>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
