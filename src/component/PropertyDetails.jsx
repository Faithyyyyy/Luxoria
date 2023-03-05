import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import BounceLoader from "react-spinners/BounceLoader";
import axios from "axios";
import { AiOutlineLeft } from "react-icons/ai";
import { baseUrL } from "./Fetch";
import Footer from "./Footer";
import ModalImages from "./Modal";
import ErrorPage from "./Error";
ErrorPage;
function PropertyDetails() {
  const [Load, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [homeDetails, setHomeDetails] = useState(
    JSON.parse(localStorage.getItem("details") || "[]")
  );
  const { housesId } = useParams();
  const url = `${baseUrL}/properties/detail?externalID=${housesId}`;

  // to set the fetched items on first render and also update every single day from the server. This important for optimisation
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();
  today = mm + dd + yyyy;

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios(url, {
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
          "X-RapidAPI-Host": "bayut.p.rapidapi.com",
        },
      });
      const data = response.data;
      setHomeDetails(data);
      console.log(homeDetails);
    } catch {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return <ErrorPage />;
  }
  // Logic for the MOREIMAGES btn
  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  // Get the images from the data
  const images = homeDetails.photos;
  return (
    <section
      className={`  w-screen  font-poppins z-10 ${
        openModal && "overflow-y-hidden"
      } ${openModal && " h-screen"} `}
    >
      <div className="overflow-y-hidden">
        <div className={`bg-[#C4C4C426] xl:h-[600px] px-5 xl:px-0 `}>
          {Load ? (
            <div className=" w-full flex items-center justify-center py-36">
              <BounceLoader
                color={"#093474"}
                loading={Load}
                size={60}
                aria-label="Loading Spinner"
                data-testid="loader"
                className=""
              />
            </div>
          ) : (
            <>
              <article className="md:pt-36 xl:pt-42 max-w-7xl mx-auto">
                <div className="md:flex justify-between items-center">
                  <div className="pt-10 ">
                    <Link to="/houses">
                      <button className=" flex gap-2 items-center justify-center border border-customDarkBlue rounded px-4 py-2 cursor-pointer">
                        <AiOutlineLeft />
                        Back
                      </button>
                    </Link>
                    <h3 className="font-medium uppercase mt-3 mb-3">
                      {homeDetails.category[1]?.name}
                    </h3>
                    <h2 className="font-medium text-2xl lg:text-3xl italic mb-6">
                      {homeDetails.location[2]?.name}
                    </h2>
                  </div>
                  <div>
                    <p className="text-[#8CB9D7] font-semibold text-xl md:text-3xl">
                      ₦{homeDetails?.price.toLocaleString()}
                    </p>
                  </div>
                </div>
                <div className="xl:flex  xl:h-[500px]  gap-9 ">
                  <img
                    src={homeDetails?.coverPhoto.url}
                    alt=""
                    className="w-full max-w-lg xl:max-w-2xl mx-auto"
                  />
                  <div className="hidden xl:flex flex-col flex-grow  relative">
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
                    <button
                      className="btn absolute right-20 px-5 py-3 rounded bottom-5"
                      onClick={handleOpenModal}
                    >
                      Click Here for more Images
                    </button>
                  </div>
                </div>
              </article>
            </>
          )}
        </div>
        <div className="mt-14 px-5 xl:px-0 max-w-7xl mx-auto xl:mt-72 ">
          <h3 className="font-semibold text-2xl mb-3 ">Description</h3>
          <article>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
            accusantium cupiditate fuga dolorum ut optio corrupti excepturi ipsa
            vel perspiciatis recusandae at reiciendis inventore ducimus odio ea
            eius sequi similique, soluta aperiam reprehenderit ullam aliquam
            suscipit? Libero labore esse harum ab tenetur, similique possimus,
            odit consectetur quidem molestias nemo, doloribus sit eius. Qui
            placeat itaque omnis ex odit necessitatibus sed?
          </article>
          <div className="flex gap-3 flex-col sm:flex-row mt-7 mb-16">
            <button className="border border-customDarkBlue rounded px-7 py-3">
              Book appointment
            </button>
            <button className="bg-customDarkBlue rounded text-white px-7 py-3">
              Buy Property
            </button>
          </div>
        </div>
        <Footer />
      </div>
      {openModal && (
        <ModalImages
          handleCloseModal={handleCloseModal}
          highlitedImgs={images}
        />
      )}
    </section>
  );
}

export default PropertyDetails;
