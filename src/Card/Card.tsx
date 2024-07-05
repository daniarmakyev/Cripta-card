import React, { CSSProperties, ReactNode } from "react";
import styles from "./card.module.css";

interface CardProps {
  name: string;
  nickname: string;
  children: ReactNode;
  desc: string;
  style?: CSSProperties;
}

const Card: React.FC<CardProps> = ({ name, nickname, children, desc, style }) => {
  return (
    <div
      className={`bg-neutral-800 backdrop-blur-sm inline-flex ${styles.Card__links} w-25 lg:w-33 rounded-xl ps-4 pr-5 pt-1 pb-1 flex-col bg-transparent`}
      style={style}
    >
      <section className="bg-transparent bg-neutral-800 backdrop-blur-md flex ">
        <span className="bg-transparent bg-neutral-800 backdrop-blur-md self-center ">
          {children}
        </span>
        <article className="bg-transparent bg-neutral-800 backdrop-blur-md flex flex-col ms-4 ">
          <h4 className="bg-transparent bg-neutral-800 backdrop-blur-md text-neutral-400 md:text-base lg:text-xl  text-nowrap text-lg">
            {name}
          </h4>
          <p className="bg-transparent bg-neutral-800 backdrop-blur-md text-neutral-400  text-[10px] lg:text-xs text-nowrap text-sm">
            {nickname}
          </p>
        </article>
      </section>
      <p className="bg-transparent bg-neutral-800 backdrop-blur-md ">{desc}</p>
    </div>
  );
};

export default Card;
