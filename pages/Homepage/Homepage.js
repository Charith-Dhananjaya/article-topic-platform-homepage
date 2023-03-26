import NavBar from "./NavBar";
import Explore from "./Explore";
import Footer from "./Footer";
import Features from "./features";
import AdvancedSearch from "./AdvancedSearch";

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
