import NavBar from "./navBar";
import Explore from "./Explore";
import Footer from "./Footer";
import Features from "./features";
import AdvancedSearch from "./AdvancedSearch";
import ShowData from "./ShowData";


const Homepage = () => {
  return (
    <div>
      <NavBar />
      <Explore />
      <AdvancedSearch />
      <Features />
      <Footer />
    </div>
  );
};

export default Homepage;
