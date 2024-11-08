"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Crafting custom, responsive websites that bring your ideas to life. I deliver user-friendly, scalable solutions to enhance your online presence and achieve your goals.",
    href: "",
  },
  {
    num: "02",
    title: "Deployment",
    description:
      "Effortlessly deploy your website with a seamless setup that ensures speed, security, and scalability. I handle end-to-end deployment, making your site live and optimized for peak performance.",
    href: "",
  },
  {
    num: "03",
    title: "UI/UX Design",
    description:
      "Create intuitive and visually appealing designs that enhance user engagement. I focus on seamless UI/UX to provide a delightful, user-centered experience for your audience.",
    href: "",
  },
  {
    num: "04",
    title: "Database Solutions ",
    description:
      "Develop efficient, scalable database solutions tailored to your data needs. From relational databases like SQL to flexible NoSQL options.",
    href: "",
  },
];

export default function Services() {
  return (
    <section className="min-h-[80vh] flex-col justify-center py-12 xl:py-0 mt-[10vh]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-col-1 md:grid-cols-2 gap-[60px] "
        >
          {services.map((service, index) => {
            return (
              <div key={index} className="group">
                <div className="flex flex-col gap-2">
                  {/* top */}
                  <div className="flex items-center justify-between w-full ">
                    <div className="text-5xl font-extrabold text-transparent transition-all duration-500 text-outline group-hover:text-outline-hover">
                      {service.num}
                    </div>
                    <Link
                      href={service.href}
                      className="h-[70px] w-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                    >
                      <BsArrowDownRight className="text-3xl text-primary"></BsArrowDownRight>
                    </Link>
                  </div>
                  {/* title */}
                  <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 ">
                    {service.title}
                  </h2>
                  {/* description */}
                  <p className="text-white/60 h-32">{service.description}</p>
                  {/* border */}
                  <div className="w-full border-b border-white/20"></div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
