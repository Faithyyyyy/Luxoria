import filter from "../assets/filter.png";

function filterSection({ filterPropertiesPrice, dataset, FilteredItems }) {
  return (
    <section className=" w-[250px] hidden xl:block font-poppins">
      <div className="flex gap-4 items-center mb-4">
        <img src={filter} alt="filter" className="h-6" />
        <h3 className="text-xl font-medium">Filters</h3>
      </div>
      <div className="w-full h-[2px] rounded bg-customLightBlue mb-8"></div>
      <div>
        <h4 className="font-semibold mb-10 underline">By Price</h4>
        <p
          className="mb-7 text-lg cursor-pointer"
          onClick={() => {
            filterPropertiesPrice(100000, 1000000);
          }}
        >
          Below - ₦1,000,000
        </p>
        <p
          className="mb-7 text-lg cursor-pointer"
          onClick={() => {
            filterPropertiesPrice(1000000, 5000000);
          }}
        >
          ₦1,000,000 - ₦5,000,000
        </p>
        <p
          className="mb-7 text-lg cursor-pointer"
          onClick={() => {
            filterPropertiesPrice(5000000, 10000000);
          }}
        >
          ₦5,000,000 - ₦10,000,000
        </p>
        <p
          className="mb-7 text-lg cursor-pointer"
          onClick={() => {
            filterPropertiesPrice(10000000, 1000000000);
          }}
        >
          above - ₦10,000,000
        </p>
      </div>
    </section>
  );
}

export default filterSection;
