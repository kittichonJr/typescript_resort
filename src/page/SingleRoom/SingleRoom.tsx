import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { RoomContext } from "../../helpers/RoomProvider";
import Banner from "../../components/Banner/Banner";
import StyledHero from "../../components/StyledHero";

const SingleRoom = () => {
  const { slug } = useParams();
  const singleRoomContext = useContext(RoomContext);
  const room = singleRoomContext?.getRoom(slug!);

  if (!room) {
    return (
      <div className="error">
        <h3>no such room could be found...</h3>
        <Link to="/rooms" className="btn-primary">
          Back to rooms
        </Link>
      </div>
    );
  }
  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images,
  } = room;
  const [mainImg, ...defaultImg] = images;
  return (
    <>
      <StyledHero slot={mainImg}>
        <Banner title={`${name} room`}>
          <Link to="rooms" className="btn-primary">
            Back to rooms
          </Link>
        </Banner>
      </StyledHero>
      <section className="single-room">
        <div className="single-room-images">
          {defaultImg.map((item: string | undefined, index: number) => {
            return <img key={index} src={item} alt={name} />;
          })}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>info</h3>
            <h6>price: ${price}</h6>
            <h6>size: {size} SQFT</h6>
            <h6>
              max capacity:{" "}
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}
            </h6>
            <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
            {breakfast && <h6>free breakfast included</h6>}
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>extras</h6>
        <ul className="extras">
          {extras.map((item: string | undefined, index: number) => {
            return <li key={index}>- {item}</li>;
          })}
        </ul>
      </section>
    </>
  );
};

export default SingleRoom;
