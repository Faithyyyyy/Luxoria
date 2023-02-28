import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import Form from "./Form";

function Footer() {
  return (
    <footer className="bg-[#254A80] text-white font-poppins ">
      <div className="px-5 max-w-7xl mx-auto xl:px-0 flex maxW:flex-row flex-col items-center justify-between">
        <div className="py-16">
          <h2 className="text-2xl font-bold lg:text-4xl xl:text-5xl mb-10">
            Contact Us For More Information
          </h2>
          <p className="text-[#B3B3B3] mb-6">
            Mail{" "}
            <span className="text-white block mt-4">
              {" "}
              house@luxoriaproperty.com
            </span>
          </p>
          <p className="text-[#B3B3B3] mb-6">
            Phone{" "}
            <span className="text-white block mt-2">+234 913 141 0671 </span>
          </p>
          <p className="text-[#B3B3B3] mb-6">
            Address{" "}
            <span className="text-white block mt-2">
              Plot 88 Adeniji Taylor Street VI, Lagos NG{" "}
            </span>
          </p>
          <div>
            <p className="text-[#B3B3B3] mb-2">Social Media</p>
            <div className="flex gap-2">
              <BsTwitter className="text-xl" />{" "}
              <AiFillInstagram className="text-xl" />
              <AiFillFacebook className="text-xl" />
            </div>
          </div>
        </div>
        <Form />
      </div>
    </footer>
  );
}

export default Footer;
