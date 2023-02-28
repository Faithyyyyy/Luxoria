function Form() {
  return (
    <div className="w-[450px] font-poppins text-black  hidden maxW:flex justify-center items-center h-[510px] relative">
      <div className="w-[416px] bg-customLightBlue h-full">
        <p className="text-lg text-white text-center absolute bottom-2 left-16">
          ALL RIGHT RESERVED © LUXORIA 2021{" "}
        </p>
      </div>
      <form
        action=""
        className="absolute bg-white w-full px-7 pt-7 h-[85%] translate-y-0.5"
        // onSubmit={}
      >
        <h2 className=" font-semibold text-black text-3xl mb-5">
          How Can We Help ?
        </h2>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full bg-[#CCC] bg-opacity-30 rounded py-3 pl-4 mb-5"
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full bg-[#CCC] bg-opacity-30 rounded py-3 pl-4 placeholder:text-[#B3B3B3] mb-5"
          required
        />
        <textarea
          placeholder="Message"
          className="w-full bg-[#CCC] bg-opacity-30 rounded py-3 h-24  pl-4 mb-5"
        ></textarea>
        <button className="bg-[#254A80] w-full p-4 text-white">Send</button>
      </form>
    </div>
  );
}

export default Form;
