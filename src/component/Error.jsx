import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <>
      <div className="flex flex-col justify-center pt-60 items-center font-poppins">
        <h5 className="text-2xl sm:text-5xl text-bold font-poppins text-[#254A80]">
          We Apologize
        </h5>
        <p className="text-xl md:text-5xl mt-6 md:mt-8">
          Something went wrong..
        </p>
        <Link
          to="/"
          className="bg-gradient-to-r from-[#5477ab] text-white to-[#8CB9D7] px-6 rounded-[30px] mt-14 py-4"
        >
          Go to Homepage
        </Link>
      </div>
    </>
  );
}

export default ErrorPage;
