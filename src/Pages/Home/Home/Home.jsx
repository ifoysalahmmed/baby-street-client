import useTitle from "../../../Hooks/useTitle";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Toys from "../Toys/Toys";
import WorkingProcess from "../WorkingProcess/WorkingProcess";

const Home = () => {
  useTitle("Home");

  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <Toys></Toys>
      <WorkingProcess></WorkingProcess>
    </div>
  );
};

export default Home;
