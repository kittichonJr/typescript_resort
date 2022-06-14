import { FC, useContext } from "react";
import { TApiReturnRooms } from "../../helpers/Interface";
import { RoomContext } from "../../helpers/RoomProvider";
import Title from "../Title/Title";

interface Props {
  rooms: TApiReturnRooms[];
}

// get all unique values
const getUnique = (items: TApiReturnRooms[], value: string) => {
  return [...new Set(items.map((item: TApiReturnRooms) => item[value]))];
};

const RoomFilter: FC<Props> = ({ rooms }) => {
  const context = useContext(RoomContext);

  if (!context) return null;
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;

  // get unique types
  let types = getUnique(rooms, "type");
  // add all
  types = ["all", ...types];
  // map to jsx
  const JSXtypes = types.map((item: any, index: number) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  let people = getUnique(rooms, "capacity");
  const JSXpeople = people.map((item: any, index: number) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });
  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* selected type */}
        <label htmlFor="type">room type: </label>
        <select
          name="type"
          id="type"
          className="form-control"
          value={type}
          onChange={handleChange}
        >
          {JSXtypes}
        </select>
        {/* end selected type */}
        {/* guests */}
        <div className="form-group">
          <label htmlFor="capacity">Guests: </label>
          <select
            name="capacity"
            id="capacity"
            className="form-control"
            value={capacity}
            onChange={handleChange}
          >
            {JSXpeople}
          </select>
        </div>
        {/* end guests */}
        {/* room price */}
        <div className="form-group">
          <label htmlFor="price">room price ${price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* end room price */}
        {/* size */}
        <div className="form-group">
          <label htmlFor="size">room size</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              id="size"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        {/* end size */}
        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
            <div className="single-extras">
              <input
                type="checkbox"
                name="pets"
                id="pets"
                checked={pets}
                onChange={handleChange}
              />
              <label htmlFor="pets">pets</label>
            </div>
          </div>
        </div>
        {/* end extras */}
      </form>
    </section>
  );
};

export default RoomFilter;
