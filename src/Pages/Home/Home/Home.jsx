import useTitle from "../../../Hooks/useTitle";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Toys from "../Toys/Toys";

const Home = () => {
  useTitle("Home");

  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <Toys></Toys>
    </div>
  );
};

export default Home;
