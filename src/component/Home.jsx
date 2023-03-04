import Main from "./main";
import WhyUs from "./WhyUsSection";
import Card from "./Cards";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import Blog from "./BlogSection";
function Home({ navIcon, ref }) {
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
      <Blog ref={ref} />
      <Footer />
    </div>
  );
}

export default Home;
