import React from "react";
import Statistics from "./Statistics/Statistics";
import Apps from "./Apps/Apps";
import Card from "./Card/Card";

function App() {
  return (
    <div className="flex me-auto ms-auto max-w-7xl main__page justify-between  ps-3 pe-3 pt-5 pb-3 sm:bg-center md:bg-center lg:bg-right-top bg-center">
      <div className="  flex flex-col App__main bg-transparent">
        <article className="max-w-3xl bg-transparent">
          <h1 className="font-bold text-center text-4xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl sm:text-center md:text-start lg:text-start bg-transparent">
            Do you want to Learn more About cryptocurrencies{" "}
            <span className="main__text__gradient font-bold bg-transparent">
              quickly and easily ?
            </span>
          </h1>
          <p className="text-neutral-400 text-center text-xl lg:text-4xl md:text-3xl sm:text-center md:text-start lg:text-start sm:mt-5 lg:mt-11 md:mt-9 bg-transparent">
            Subscribe to our channel to learn more
          </p>
        </article>
        <div className="inline-flex gap-12 md:gap-20 lg:gap-28 justify-center md:justify-normal mt-7 md:mt-14 lg:mt-20 bg-transparent">
          <Statistics title={"20K+"} desc={"subscribers"} />
          <Statistics title={"19,5K"} desc={"successful cases"} />
          <Statistics title={"4.8/5"} desc={"rating"} />
        </div>
        <button className="main__button__gradient w-72 md:w-96 lg:w-[532px] h-12 md:h-14 lg:h-14 rounded-2xl mt-7 md:mt-16 lg:mt-24 z-10 relative self-center md:self-start">
          <a
            className=" bg-transparent text-black text-2xl lg:text-3xl font-medium"
            href="https://api.whatsapp.com/send?phone=1234567890"
          >
            Join Whatsapp
          </a>
        </button>

        <section className="inline-flex gap-5 mt-5 md:mt-9 lg:mt-20 self-center md:self-start">
          <Apps platform="Google play" desc="get it on ">
            <svg
              width="19.200195"
              className="bg-neutral-800"
              height="19.853516"
              viewBox="0 0 19.2002 19.8535"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <defs />
              <path
                id="Vector"
                d="M3.53 19.31L12.73 14.12L10.75 11.93L3.53 19.31ZM0.17 0.2C0.06 0.39 0 0.6 0 0.85L0 19C0 19.33 0.12 19.62 0.31 19.85L9.46 10.5L0.17 0.2ZM18.57 9.03L15.36 7.22L12.1 10.55L14.44 13.15L18.57 10.82C18.74 10.73 18.89 10.61 19 10.45C19.11 10.29 19.17 10.11 19.2 9.92C19.17 9.73 19.11 9.55 19 9.4C18.89 9.24 18.74 9.11 18.57 9.03ZM13.63 6.24L2.57 0L10.81 9.13L13.63 6.24Z"
                fill="#F2F2F2"
                fillOpacity="0.400000"
                fillRule="nonzero"
              />
            </svg>
          </Apps>
          <Apps platform="App Store" desc="Available on the">
            <svg
              className="bg-neutral-800"
              width="18.153809"
              height="21.120117"
              viewBox="0 0 18.1538 21.1201"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <defs />
              <path
                id="Vector"
                d="M18.15 15.49C17.65 16.59 17.41 17.08 16.78 18.05C15.89 19.41 14.63 21.1 13.07 21.11C11.69 21.12 11.33 20.21 9.46 20.22C7.58 20.23 7.19 21.13 5.8 21.12C4.25 21.1 3.06 19.58 2.16 18.22C-0.33 14.43 -0.59 9.97 0.95 7.61C2.04 5.93 3.77 4.94 5.39 4.94C7.04 4.94 8.07 5.85 9.44 5.85C10.76 5.85 11.57 4.94 13.48 4.94C14.91 4.94 16.44 5.73 17.53 7.08C13.97 9.04 14.54 14.13 18.15 15.49ZM12.03 3.42C12.72 2.53 13.25 1.28 13.06 0C11.92 0.07 10.6 0.79 9.83 1.73C9.12 2.58 8.55 3.85 8.77 5.08C10.01 5.11 11.29 4.38 12.03 3.42Z"
                fill="#F2F2F2"
                fillOpacity="0.400000"
                fillRule="nonzero"
              />
            </svg>
          </Apps>
        </section>
      </div>
      <div className="flex-col bg-transparent cards__block  gap-6 mt-28 hidden lg:flex">
        <Card
          desc="Amazing Telegram bot! Provides real-time crypto prices and news"
          nickname="@lorenzoo"
          name="Lorenzo"
        >
          <img
            className="bg-transparent bg-neutral-800 backdrop-blur-md"
            src={require("./img/avatar.png")}
            alt="Logo"
          />
        </Card>
        <Card
          desc="Amazing Telegram bot! Provides real-time crypto prices and news"
          nickname="@lorenzoo"
          name="Lorenzo"
          style={{ marginRight: "100px" }}
        >
          <img
            className="bg-transparent bg-neutral-800 backdrop-blur-md"
            src={require("./img/avatar.png")}
            alt="Logo"
          />
        </Card>
        <Card
          desc="Amazing Telegram bot! Provides real-time crypto prices and news"
          nickname="@lorenzoo"
          name="Lorenzo"
        >
          <img
            className="bg-transparent bg-neutral-800 backdrop-blur-md"
            src={require("./img/avatar.png")}
            alt="Logo"
          />
        </Card>
        <Card
          desc="Amazing Telegram bot! Provides real-time crypto prices and news"
          nickname="@lorenzoo"
          name="Lorenzo"
          style={{ marginRight: "100px" }}
        >
          <img
            className="bg-transparent bg-neutral-800 backdrop-blur-md"
            src={require("./img/avatar.png")}
            alt="Logo"
          />
        </Card>
      </div>
    </div>
  );
}

export default App;
