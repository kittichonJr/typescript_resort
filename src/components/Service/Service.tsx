import Title from "../Title/Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

const servicesIcon = [
  {
    icon: <FaCocktail />,
    title: "Free cocktails",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, officiis.",
  },
  {
    icon: <FaHiking />,
    title: "Endless Hiking",
    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, officiis!",
  },
  {
    icon: <FaShuttleVan />,
    title: "Free shuttle",
    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, officiis!",
  },
  {
    icon: <FaBeer />,
    title: "Strongest Beer",
    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, officiis!",
  },
];

const Service = () => {
  return (
    <section className="services">
      <Title title="services" />
      <div className="services-center">
        {servicesIcon.map((item, index) => {
          return (
            <article key={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Service;
