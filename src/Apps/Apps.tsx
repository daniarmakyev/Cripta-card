import React, { ReactNode } from "react";

interface AppsProps {
  platform: string;
  desc: string;
  children: ReactNode;
}

const Apps: React.FC<AppsProps> = ({ platform, desc, children }) => {
  return (
    <a
      href="test"
      className="inline-flex apps__links w-25 lg:w-33 rounded-xl bg-neutral-800 ps-4 pr-5 pt-1 pb-1"
    >
      <span className="self-center text-white">{children}</span>
      <article className="flex flex-col-reverse ms-2">
        <h4 className="text-neutral-400 bg-neutral-800 text-sm md:text-base lg:text-xl  text-nowrap">
          {platform}
        </h4>
        <p className="text-neutral-400 bg-neutral-800 text-[10px] lg:text-xs text-nowrap">
          {desc}
        </p>
      </article>
    </a>
  );
};

export default Apps;
