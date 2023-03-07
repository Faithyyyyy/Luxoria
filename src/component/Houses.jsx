import axios from "axios";
import mobileHero from "../assets/mobileHero.png";
import { useEffect, useState } from "react";
import { baseUrL } from "./Fetch";
import BounceLoader from "react-spinners/BounceLoader";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Filter from "./Filter";
import ErrorPage from "./Error";

const url = `${baseUrL}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=24`;

function Houses() {
  const [dataset, setDataset] = useState(
    JSON.parse(localStorage.getItem("links") || "[]")
  );
  const [Load, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [checkFilteredItems, setCheckFilteredItems] = useState(false);
  const [FilteredItems, setFilteredItems] = useState([]);
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();
  today = mm + dd + yyyy;
  console.log(today);

  // Initial fetching of data
  const fetchData = async () => {
    let date = localStorage.getItem("date");
    if (dataset.length < 1) {
      setLoading(true);
      try {
        const response = await axios.get(url, {
          headers: {
            // "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
            "X-RapidAPI-Key":
              "a5b008000amsh780ac9c2a083a52p11ff9bjsnf7fa4ae6df97",
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

  // to set the fetched items on first render and also update every single day from the server. This important for optimisation
  useEffect(() => {
    localStorage.setItem("date", today);
    window.localStorage.setItem("links", JSON.stringify(dataset));
  }, [dataset]);

  // A function to filter the prices of the properties
  const filterPropertiesPrice = (minPrice, maxPrice) => {
    // const savedData = JSON.parse(localStorage.getItem("links"));
    setCheckFilteredItems(true);
    const newDataSet = dataset.filter((properties) => {
      return properties.price >= minPrice && properties.price <= maxPrice;
    });
    setFilteredItems(newDataSet);
  };
  if (error) {
    return <ErrorPage />;
  }
  return (
    <>
      <section className="pb-28  max-w-7xl mx-auto xl:px-0 pt-16 md:pt-36 font-poppins px-5 grid gap-12">
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
          <div className="xl:flex gap-5">
            <Filter
              dataset={dataset}
              FilteredItems={FilteredItems}
              filterPropertiesPrice={filterPropertiesPrice}
            />
            <div className="houses-container flex-grow">
              {checkFilteredItems
                ? FilteredItems.map((data) => {
                    return (
                      <article
                        className="w-full max-w-[300px] smallW:max-w-[400px] mx-auto cursor-pointer "
                        key={data.id}
                      >
                        <Link to={`/houses/${data.externalID}`}>
                          <div className="w-full  relative mb-4">
                            <img
                              src={data.coverPhoto.url}
                              className={`w-[100%] h-[270px] ${
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
                        <h6 className="font-bold text-xl">
                          {data.location[3].name}
                        </h6>
                        <p className="text-[#ACACAC] my-1">
                          {data.location[2].name}
                        </p>
                        <p className="text-[#8CB9D7] font-semibold text-xl">
                          {" "}
                          ₦ {data.price.toLocaleString()}{" "}
                        </p>
                      </article>
                    );
                  })
                : dataset.map((data) => {
                    return (
                      <article
                        className="w-full max-w-[300px] smallW:max-w-[400px] mx-auto cursor-pointer "
                        key={data.id}
                      >
                        <Link to={`/houses/${data.externalID}`}>
                          <div className="w-full  relative mb-4">
                            <img
                              src={data.coverPhoto.url}
                              className={`w-[100%] h-[270px] ${
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
                        <h6 className="font-bold text-xl">
                          {data.location[3].name}
                        </h6>
                        <p className="text-[#ACACAC] my-1">
                          {data.location[2].name}
                        </p>
                        <p className="text-[#8CB9D7] font-semibold text-xl">
                          {" "}
                          ₦ {data.price.toLocaleString()}{" "}
                        </p>
                      </article>
                    );
                  })}
            </div>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}

export default Houses;
