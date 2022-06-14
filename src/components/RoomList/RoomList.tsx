import { FC } from "react";
import Room from "../Room/Room";
import { TApiReturnRooms } from "../../helpers/Interface";

interface Props {
  rooms: TApiReturnRooms[];
}

const RoomList: FC<Props> = ({ rooms }) => {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no rooms matched your search parameters</h3>
      </div>
    );
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map((item: any) => (
          <Room key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default RoomList;
