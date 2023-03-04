import { useState } from "react";
import HeroImg2 from "../assets/heroImg2.png";
import HeroImg from "../assets/realestateImg.png";
import mobileHero from "../assets/mobileHero.png";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";

function Main() {
  const [activeImg, setActiveImg] = useState(0);
  const data = [
    {
      id: 1,
      img: HeroImg,
    },
    {
      id: 2,
      img: HeroImg2,
    },
  ];
  const checkNumber = (number) => {
    if (number > data.length - 1) {
      return 0;
    }
    if (number < 0) {
      return data.length - 1;
    }
    return number;
  };
  const nextImg = () => {
    setActiveImg((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevImg = () => {
    setActiveImg((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  return (
    <main
      className={`lg:h-screen font-poppins lg:flex max-w-[2000px] mx-auto `}
    >
      <div className="bg-[#C4C4C426] h-full lg:w-[60%] w-full pt-24  md:pt-48 pb-11 lg:pb-0">
        <h1 className="font-extrabold tracking-wide text-center text-3xl leading-[1.5] lg:hidden md:text-5xl sm:text-4xl px-5">
          FIND YOUR DREAM<br></br> HOME
        </h1>
        <p className="text-xl text-center max-w-xl mx-auto leading-[1.6] mt-10 lg:hidden px-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
          eligendi eaque voluptates ab ea aspernatur suscipit soluta iusto id
          quibusdam?
        </p>
        <img
          src={mobileHero}
          className="mt-7 h-[400px] w-[80%] mx-auto lg:hidden max-w-[500px] transition-all"
          alt=""
        />
      </div>
      <img
        src={data[activeImg].img}
        alt=""
        className="flex-grow hidden lg:block max-w-[800px]"
      />
      <div className="absolute z-10 hidden w-full px-6 max-w-[2000px] h-[430px] maxwd:h-[530px]  xl:px-0 lg:block mt-48 2xl:mt-56">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-extrabold tracking font-poppins text-6xl leading-[1.5] xl:leading-[1.6] xl:text-7xl">
            FIND YOUR DREAM<br></br> HOME
          </h1>
          <p className="text-xl max-w-xl leading-[1.6] mt-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
            eligendi eaque voluptates ab ea aspernatur suscipit soluta iusto id
            quibusdam?
          </p>
          <div className="flex  absolute bottom-10 2xl:-bottom-5  right-16">
            <div
              className="w-20 h-20 bg-[#717171] flex items-center justify-center cursor-pointer"
              onClick={() => prevImg()}
            >
              <AiOutlineLeft className="text-3xl text-white" />
            </div>
            <div
              className="w-20 h-20 bg-customLightBlue flex items-center justify-center cursor-pointer"
              onClick={() => nextImg()}
            >
              <AiOutlineRight className="text-3xl text-white" />
            </div>
          </div>
          <div className="absolute bottom-0 right-[220px] flex gap-3">
            <div
              className={` ${
                activeImg === 0 ? "bg-customLightBlue" : "bg-gray-300"
              }  ${activeImg === 0 ? "w-9" : "w-6"}  h-1 rounded-lg`}
            ></div>
            <div
              className={` ${
                activeImg === 1 ? "bg-customLightBlue" : "bg-gray-300"
              }  ${activeImg === 1 ? "w-9" : "w-6"} w-6 h-1 rounded-lg`}
            ></div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
