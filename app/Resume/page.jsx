"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/shadcn/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { ScrollArea } from "../../components/shadcn/ui/scroll-area";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNode,
  FaAngular,
  FaGit,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
//about data
const about = {
  Title: "About Me",
  Description:
    "Enthusiastic web developer with expertise in both front-end and back-end technologies, focused on building responsive, user-friendly applications. Constantly learning and applying new skills to deliver efficient, high-quality web solutions.",
  Info: [
    {
      FieldName: "Name",
      FieldValue: "AnasAlhawi",
    },
    {
      FieldName: "Phone",
      FieldValue: "(+962) 785221408",
    },
    {
      FieldName: "Experience",
      FieldValue: "2+ Years",
    },
    {
      FieldName: "Skype",
      FieldValue: "Anas Alhawi",
    },
    {
      FieldName: "Nationality",
      FieldValue: "Jordanian",
    },
    {
      FieldName: "Email",
      FieldValue: "anas.moh.alhawi@gmail.com",
    },
    {
      FieldName: "Languages",
      FieldValue: "English/Arabic",
    },
  ],
};
//experience data
const experience = {
  Tcon: "",
  Title: "Experience",
  Description:
    "Worked as a web developer at Eskadenia, building and optimizing web applications with a focus on responsive design, functionality, and performance.",
  Items: [
    {
      Company: "Eskadenia Software",
      Position: "Web Developer",
      Duration: "2023 - present",
    },
  ],
};
//education data
const education = {
  Tcon: "",
  Title: "Eduction",
  Description:
    "Holds a Bachelor's degree in Agricultural Engineering, applying analytical and problem-solving skills to web development and software engineering.",
  Items: [
    {
      Intitution: "FreeCodeCamp",
      Degree: "Data Structure And Algorithms",
      Duration: "2024",
    },
    {
      Intitution: "Meraki Academy",
      Degree: "Web Developer",
      Duration: "2022",
    },
    {
      Intitution: "Albalqa Applied University",
      Degree: "Agriculture Engineering ",
      Duration: "2012 - 2017",
    },
  ],
};
//skills data
const skills = {
  Title: "Skills",
  Description:
    "Skilled in HTML, CSS, JavaScript, React, Node.js, PostgreSQL, MySQL, MongoDB, and database management, with a focus on building scalable and efficient web applications.",
  SkillList: [
    {
      icon: <FaHtml5 />,
      name: "html",
    },
    {
      icon: <FaCss3 />,
      name: "Css",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind.Css",
    },
    {
      icon: <FaNode />,
      name: "Node.js",
    },
  ],
};

export default function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[10vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row justify-center items-center gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[10vh] xl:min-h-[70vh]  xl:w-full flex flex-row xl:flex-col justify-center items-center mx-24">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col  gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.Title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">
                  {experience.Description}
                </p>
                <ScrollArea>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-[30px]">
                    {experience.Items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.Duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.Position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.Company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col  gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.Title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">
                  {education.Description}
                </p>
                <ScrollArea className="h-[200px]">
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-[30px]">
                    {education.Items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.Duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.Degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.Intitution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.Title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.Description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[15px] xl:gap-[30px] ">
                  {skills.SkillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[100px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl transition-all duration-300 group-hover:text-accent">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>{" "}
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.Title}</h3>
                <p className=" max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.Description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 max-w-[620px] mx-auto xl:mx-0">
                  {about.Info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center gap-4 xl:justify-start"
                      >
                        <span className="text-white/60">{item.FieldName}</span>
                        <span className="text-xl">{item.FieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
