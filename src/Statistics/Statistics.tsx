import React from "react";

interface StatisticsProps {
  title: string;
  desc: string;
}

const Statistics: React.FC<StatisticsProps> = ({ title, desc }) => {
  return (
    <section className="bg-transparent">
      <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-transparent">
        {title}
      </h4>
      <p className="text-sm md:text-base lg:text-lg text-neutral-500 bg-transparent">
        {desc}
      </p>
    </section>
  );
};

export default Statistics;
