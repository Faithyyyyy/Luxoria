import { useEffect, useState } from "react";
import avatar3 from "../assets/avatar3.png";
import avatar4 from "../assets/avatar4.png";
import avatar5 from "../assets/avatar5.png";
import qutoe from "../assets/quote.png";
import HeroImg2 from "../assets/heroImg2.png";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

function Testimonials() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  const testimonialData = [
    {
      names: "Mrs Alex Smith",
      img: avatar3,
      testimony:
        " dolor sit amet, consectetur adipiscing elit. Vitae hendrerit diam dignissim ac hendrerit eros. Molestie vel iaculis aliquet mauris massa rhoncus, scelerisque non risus. Nam tellus vivamus commodo pulvinar at pulvinar faucibus faucibus. .",
    },
    {
      names: "Mrs Ali",
      img: avatar4,
      testimony:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae hendrerit diam dignissim ac hendrerit eros. Molestie vel iaculis aliquet mauris massa rhoncus, scelerisque non risus. Nam tellus vivamus commodo pulvinar at pulvinar faucibus faucibus. .",
    },
    {
      names: "Mr James Brown ",
      img: avatar5,
      testimony:
        "ipsum dolor sit amet, consectetur adipiscing elit. Vitae hendrerit diam dignissim ac hendrerit eros. Molestie vel iaculis aliquet mauris massa rhoncus, scelerisque non risus. Nam tellus vivamus commodo pulvinar at pulvinar faucibus faucibus. .",
    },
  ];
  const testimonialLength = testimonialData.length;
  const [activeTestimony, setActiveTestimony] = useState(0);
  const nextTestimony = () => {
    setActiveTestimony(
      activeTestimony === testimonialLength - 1 ? 0 : activeTestimony + 1
    );
  };
  const prevTestimony = () => {
    setActiveTestimony(
      activeTestimony === 0 ? testimonialLength - 1 : activeTestimony - 1
    );
  };
  const autoScroll = true;
  let slideInterval;
  let intervalTime = 3000;
  const auto = () => {
    slideInterval = setInterval(nextTestimony, intervalTime);
  };
  useEffect(() => {
    setActiveTestimony(0);
  }, []);
  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [activeTestimony]);
  return (
    <section className="bg-[#C4C4C426]  font-poppins">
      <div className="max-w-7xl mx-auto px-5 xl:px-0 pb-11">
        <div
          data-aos="fade-up"
          className="max-w-[500px] lg:max-w-[700px] mx-auto maxW:mx-0"
        >
          <h3 className="text-lg mb-7 lg:text-2xl">TESTOMINIES</h3>
          <h2 className="text-2xl font-bold lg:text-4xl xl:text-5xl mb-10">
            What Our Customers are saying?
          </h2>
        </div>
        <div className="relative flex gap-12 items-center  xl:gap-24">
          <div className="w-[516px] relative hidden maxW:block ">
            <img src={HeroImg2} alt="" className="w-[416px]" />
            <div className="flex absolute  bottom-0   right-0">
              <div
                className="w-[100px] h-[100px] bg-[#717171] flex items-center justify-center cursor-pointer"
                onClick={() => prevTestimony()}
              >
                <AiOutlineLeft className="text-3xl text-white" />
              </div>
              <div
                className="w-[100px] h-[100px] bg-customLightBlue flex items-center justify-center cursor-pointer"
                onClick={() => nextTestimony()}
              >
                <AiOutlineRight className="text-3xl text-white" />
              </div>
            </div>
          </div>
          <div className="testimony mt-6 max-w-[500px] mx-auto maxW:mx-0">
            <img src={qutoe} alt="" className=" mb-4 w-16" />
            <p>{testimonialData[activeTestimony].testimony}</p>
            <div className="flex flex-col maxW:flex-row maxW:items-center justify-between gap-5 mt-5">
              <div className="flex items-center gap-6">
                <img
                  src={testimonialData[activeTestimony].img}
                  alt=""
                  className="w-14"
                />
                <p>{testimonialData[activeTestimony].names} </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
