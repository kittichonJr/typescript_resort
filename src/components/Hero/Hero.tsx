import { Props } from "../../helpers/Interface";

interface HeroProps extends Props {
  hero?: string;
}

const Hero = (props: HeroProps) => {
  return <header className={props.hero}>{props.children}</header>;
};

export default Hero;

Hero.defaultProps = {
  hero: "defaultHero",
};
