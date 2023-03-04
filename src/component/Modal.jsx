import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function ModalImages({ handleCloseModal, highlitedImgs }) {
  return (
    <section className="modal w-screen h-screen grid items-center justify-center z-50 absolute ">
      <AiOutlineClose
        className="text-white text-3xl m-24 absolute right-0 top-0 cursor-pointer"
        onClick={handleCloseModal}
      />
      <Carousel
        className="w-[40%] max-w-[1900px] mx-auto grid items-center"
        showStatus={false}
        showIndicators={false}
      >
        {highlitedImgs.slice(0, 4).map((img) => {
          return (
            <img
              id={img.id}
              src={img.url}
              alt=""
              className="h-[80px] w-[400px] "
            />
          );
        })}
      </Carousel>
    </section>
  );
}

export default ModalImages;
