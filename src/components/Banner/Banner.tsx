import { Props } from "../../helpers/Interface";

interface BannerProps extends Props {
  title: string;
  subTitle?: string;
}

const Banner = (props: BannerProps) => {
  return (
    <div className="banner">
      <h1>{props.title}</h1>
      <div></div>
      <p>{props.subTitle}</p>
      {props.children}
    </div>
  );
};

export default Banner;
