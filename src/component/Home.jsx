import Main from "./main";
import WhyUs from "./WhyUsSection";
import Card from "./Cards";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
function Home({ navIcon }) {
  return (
    <div
      className={`${navIcon ? "h-[630px]" : ""} ${
        navIcon ? "overflow-y-hidden" : ""
      } `}
    >
      <Main />
      <WhyUs />
      <Card />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;
