import Banner from "../../components/Banner/Banner";
import Hero from "../../components/Hero/Hero";
import { Link } from "react-router-dom";
import Service from "../../components/Service/Service";
import FeaturedRoom from "../../components/FeaturedRooms/FeaturedRoom";

const Home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="luxurious rooms"
          subTitle="deluxe rooms starting at $299"
        >
          <Link to="rooms" className="btn-primary">
            Our rooms
          </Link>
        </Banner>
      </Hero>
      <Service />
      <FeaturedRoom />
    </>
  );
};

export default Home;
