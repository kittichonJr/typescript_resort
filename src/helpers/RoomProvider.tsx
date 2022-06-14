import React, { ChangeEvent, Component, ReactNode } from "react";
import Client from "./contentful";
import { Entry } from "contentful";
import {
  MyState,
  IApiContext,
  IApiBooleanReturn,
  IApiNumberReturn,
  Props,
} from "./Interface";

const RoomContext = React.createContext<IApiContext | null>(null);

class RoomProvider extends Component<Props> {
  state: MyState = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  };

  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "beachResortRoom",
        order: "sys.createdAt",
      });
      const rooms = this.formatData(response.items);
      const featuredRooms = rooms.filter(
        (room: IApiBooleanReturn) => room.featured === true
      );
      const maxPrice = Math.max(
        ...rooms.map((room: IApiNumberReturn) => room.price)
      );
      const minPrice = Math.min(
        ...rooms.map((room: IApiNumberReturn) => room.price)
      );
      const maxSize = Math.max(
        ...rooms.map((room: IApiNumberReturn) => room.price)
      );
      const minSize = Math.min(
        ...rooms.map((room: IApiNumberReturn) => room.price)
      );

      this.setState({
        rooms,
        featuredRooms,
        sortedRooms: rooms,
        loading: false,
        price: maxPrice,
        maxPrice,
        minPrice,
        maxSize,
        minSize,
      });
    } catch (error) {
      console.log(error);
    }
  };

  formatData(items: Entry<unknown>[]) {
    return items.map((item: any) => {
      let id = item.sys.id;
      let images = item.fields.images.map(
        (image: any) => image.fields.file.url
      );
      return { ...item.fields, images, id };
    });
  }

  componentDidMount() {
    this.getData();
  }

  getRoom = (slug: string) => {
    const tempRooms = [...this.state.rooms].find((room) => room.slug === slug);
    if (tempRooms !== undefined) {
      return tempRooms;
    }
  };

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const name = event.target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState(
      {
        [name]: value,
      },
      this.filterRooms
    );
  };

  filterRooms = () => {
    let { rooms, type, capacity, price, minSize, maxSize, breakfast, pets } =
      this.state;

    // all the rooms
    let tempRooms = [...rooms];
    // transform value
    capacity = Number(capacity);
    price = Number(price);

    // filter by type
    if (type !== "all") {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }

    // filter by capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
    }

    // filter by price
    tempRooms = tempRooms.filter((room) => room.price <= price);

    // filter by size
    tempRooms = tempRooms.filter(
      (room) => room.size >= minSize && room.size <= maxSize
    );

    // filter by breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter((room) => room.breakfast === true);
    }

    // filter by pets
    if (pets) {
      tempRooms = tempRooms.filter((room) => room.pets === true);
    }

    //change state
    this.setState({ sortedRooms: tempRooms });
  };

  render(): ReactNode {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

export { RoomContext, RoomProvider };
