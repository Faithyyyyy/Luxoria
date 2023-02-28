import houseCard from "../assets/homeCards.png";
import taxCard from "../assets/taxCard.png";
import commissionCard from "../assets/commisionCard.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Card() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="bg-[#C4C4C426] ">
      <div className=" relative -top-48 px-5 font-poppins flex gap-6 xl:gap-0 md:justify-between flex-wrap xl:px-0 max-w-7xl mx-auto  md:flex-row flex-col">
        <article
          data-aos="zoom-in"
          className="h-[480px] w-full max-w-[400px] mx-auto bg-[#254A80] rounded hover:shadow-lg"
        >
          <p className="font-bold text-9xl text-white opacity-25">01</p>
          <div className="flex justify-end pr-12 sm:pr-16">
            {" "}
            <img src={houseCard} className="h-10 w-12" alt="" />
          </div>
          <div className="flex gap-4 justify-end text-white mt-10">
            <p className=" text-lg md:text-2xl font-semibold ">01</p>
            <div className="w-60 md:w-72 ">
              <h6 className=" text-lg md:text-2xl font-semibold mb-6">
                Property insurance
              </h6>
              <p className="mb-12 font-light text-sm">
                We offer our customers property insurance for better life
              </p>
              <a href="#" className="underline">
                Learn more
              </a>
            </div>
          </div>
        </article>
        <article
          data-aos="zoom-in"
          className="h-[480px] w-full max-w-[400px] mx-auto bg-white shadow rounded hover:shadow-lg"
        >
          <p className="font-bold text-9xl text-black opacity-10">02</p>
          <div className="flex justify-end pr-12 sm:pr-16">
            {" "}
            <img src={taxCard} className="h-10 w-12" alt="" />
          </div>
          <div className="flex gap-4 justify-end text-black mt-10  ">
            <p className=" text-lg md:text-2xl font-semibold text-[#A7A7A7]">
              02
            </p>
            <div className="w-60 ">
              <h6 className=" text-lg md:text-2xl font-semibold mb-6">
                Tax advantage
              </h6>
              <p className="mb-12 font-light text-sm">
                You get many type of facilities, special tax advantage is one of
                them
              </p>
              <a href="#" className="underline">
                Learn more
              </a>
            </div>
          </div>
        </article>
        <article
          data-aos="zoom-in"
          className="h-[480px] w-full max-w-[400px] mx-auto bg-white shadow rounded hover:shadow-lg"
        >
          <p className="font-bold text-9xl text-black opacity-10">03</p>
          <div className="flex justify-end pr-12 sm:pr-16">
            {" "}
            <img src={commissionCard} className="h-12 w-12" alt="" />
          </div>
          <div className="flex gap-4 justify-end text-black mt-10 md:mr-9 ">
            <p className=" text-lg md:text-2xl font-semibold text-[#A7A7A7]">
              03
            </p>
            <div className=" ">
              <h6 className=" text-lg md:text-2xl font-semibold mb-6">
                Lowest Commission
              </h6>
              <p className="mb-12 font-light text-sm w-[250px]">
                We give lowest commission and many more
              </p>
              <a href="#" className="underline">
                Learn more
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Card;
