import { useContext } from "react";
import { RoomContext } from "../../helpers/RoomProvider";
import Loading from "../Loading/Loading";
import Room from "../Room/Room";
import Title from "../Title/Title";

const FeaturedRoom = () => {
  const context = useContext(RoomContext);
  if (!context) return null;
  const { loading, featuredRooms } = context;
  const rooms = featuredRooms.map((item: any) => (
    <Room key={item.id} {...item} />
  ));

  return (
    <section className="featured-rooms">
      <Title title="featured rooms" />
      <div className="featured-rooms-center">
        {loading ? <Loading /> : rooms}
      </div>
    </section>
  );
};

export default FeaturedRoom;
