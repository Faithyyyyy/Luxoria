import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function WhyUs() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="">
      <div
        data-aos="fade-up"
        className=" h-96  font-poppins px-5 mt-24 mb-11 pb-24 lg:pb-72 flex flex-col gap-2 max-w-2xl mx-auto lg:max-w-7xl xl:px-0 lg:flex-row lg:justify-between lg:items-end"
      >
        <div className="">
          <h3 className="text-lg mb-7 lg:text-2xl ">BEST SERVICE</h3>
          <h2 className="text-2xl font-bold lg:text-4xl xl:text-5xl">
            Why Choose Us?
          </h2>
        </div>
        <p className="max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nibh
          viverra semper neque egestas faucibus mi sit. Aliquet sed nec, duis
          rutrum pulvinar ac.{" "}
        </p>
      </div>
    </section>
  );
}

export default WhyUs;
