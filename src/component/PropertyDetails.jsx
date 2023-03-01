import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import BounceLoader from "react-spinners/BounceLoader";
import axios from "axios";

function PropertyDetails() {
  const [Load, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [homeDetails, setHomeDetails] = useState();
  const { housesId } = useParams();
  console.log(housesId);

  const FetchData = () => {
    try {
      const options = {
        method: "GET",
        url: `https://bayut.p.rapidapi.com/properties/detail`,
        params: { externalID: `${housesId}` },
        headers: {
          "X-RapidAPI-Key":
            "6d1f635362msh02f19cfd92582efp1b0e92jsn3b55a1d5c903",
          "X-RapidAPI-Host": "bayut.p.rapidapi.com",
        },
      };

      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
          setHomeDetails(response.data);
        })
        .catch(function (error) {
          console.error(error.response);
        });
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };
  useEffect(() => {
    FetchData();
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
    <section className="bg-[#C4C4C426] w-screen h-[5000px] font-poppins px-5 xl:px-0">
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
        <>
          <div className="pt-16 md:pt-36 xl:pt-60 max-w-7xl mx-auto">
            <h3 className="font-medium uppercase mb-3">
              {homeDetails?.category[1].name}
            </h3>
            <h2 className="font-medium text-2xl md:text-5xl italic mb-6">
              {homeDetails?.location[2].name}
            </h2>
          </div>
          <div className="xl:flex max-w-7xl mx-auto xl:h-[500px]  gap-9 border border-red-800">
            <img
              src={homeDetails?.coverPhoto.url}
              alt=""
              className="w-full max-w-lg xl:max-w-2xl mx-auto"
            />
            <div className=" xl:flex flex-col flex-grow  ">
              <img
                src={homeDetails?.photos[1].url}
                alt=""
                className="h-[250px]"
              />
              <img
                src={homeDetails?.photos[2].url}
                alt=""
                className="h-[248px]"
              />
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default PropertyDetails;
