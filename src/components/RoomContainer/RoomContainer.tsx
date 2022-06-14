import { useContext } from "react";
import Loading from "../Loading/Loading";
import RoomList from "../RoomList/RoomList";
import { RoomContext } from "../../helpers/RoomProvider";
import RoomFilter from "../RoomFilter/RoomFilter";

const RoomContainer = () => {
  const context = useContext(RoomContext);
  if (!context) return null;
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  );
};

export default RoomContainer;
