import { FC } from "react";
import { Link } from "react-router-dom";
import defaultImg from "../../Assets/room-1.jpeg";

interface Props {
  id: string;
  name: string;
  slug: string;
  images: string[];
  price: number;
}

const Room: FC<Props> = (Props) => {
  const { name, slug, images, price } = Props;

  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt={name} />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          Features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
};

export default Room;
