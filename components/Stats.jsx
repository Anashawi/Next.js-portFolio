"use client";
import CountUp from "react-countup";

export const Stats = () => {
  const stats = [
    {
      num: 2,
      text: "years of experience ",
    },
    {
      num: 12,
      text: "Technologies mastered ",
    },
    {
      num: 2,
      text: "projects completed",
    },
    {
      num: 200,
      text: "code commit",
    },
  ];
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto ">
        <div className="flex flex-wrap gap-6 max-w-[80vm] mx-auto xl:max-w-none">
          {stats.map((stat, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
              >
                <CountUp
                  end={stat.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-semibold"
                />
                <p
                  className={`${
                    stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {stat.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
