import axios from "axios";
import mobileHero from "../assets/mobileHero.png";
import { useEffect, useState } from "react";
import { baseUrL } from "./Fetch";
import BounceLoader from "react-spinners/BounceLoader";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const url = `${baseUrL}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=24`;

function Houses() {
  const [dataset, setDataset] = useState(
    JSON.parse(localStorage.getItem("links") || "[]")
  );
  const [Load, setLoading] = useState(false);
  const [error, setError] = useState(false);

  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();

  today = mm + dd + yyyy;

  useEffect(() => {
    localStorage.setItem("date", today);
    window.localStorage.setItem("links", JSON.stringify(dataset));
  }, [dataset]);

  const fetchData = async () => {
    let date = localStorage.getItem("date");
    if (date !== today || dataset.length < 1) {
      setLoading(true);
      try {
        const response = await axios.get(url, {
          headers: {
            "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
            "X-RapidAPI-Host": "bayut.p.rapidapi.com",
          },
        });
        const data = response.data.hits;
        setDataset(data);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (error) {
    return (
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
    );
  }
  return (
    <>
      <section className="pb-28 houses-container max-w-7xl mx-auto xl:px-0 pt-16 md:pt-36 font-poppins px-5 grid gap-12">
        {Load ? (
          <div className=" w-full flex items-center justify-center mt-36">
            <BounceLoader
              color={"#093474"}
              loading={Load}
              size={60}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ) : (
          dataset.map((data) => {
            return (
              <article
                className="w-full  smallW:max-w-[416px] mx-auto cursor-pointer "
                key={data.id}
              >
                <Link to={`/houses/${data.externalID}`}>
                  <div className="w-full  relative mb-4">
                    <img
                      src={data.coverPhoto.url}
                      className={`w-full h-[270px] ${
                        Load && "bg-gray-300 animate-pulse"
                      } `}
                      alt=""
                      loading="lazy"
                    />
                    <div
                      className={`bg-white px-5 py-2 absolute shadow bottom-0 left-0 ${
                        !Load && "bg-red-500"
                      }`}
                    >
                      {data.category[1].nameSingular}
                    </div>
                  </div>
                </Link>
                <h6 className="font-bold text-xl">{data.location[3].name}</h6>
                <p className="text-[#ACACAC] my-1">{data.location[2].name}</p>
                <p className="text-[#8CB9D7] font-semibold text-xl">
                  {" "}
                  ₦ {data.price.toLocaleString()}{" "}
                </p>
              </article>
            );
          })
        )}
      </section>
      <Footer />
    </>
  );
}

export default Houses;
