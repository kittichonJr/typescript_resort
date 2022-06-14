import styled from "styled-components";
import defaultImg from "../Assets/room-1.jpeg";

const StyledHero = styled.header`
  min-height: 60vh;
  background: url(${(props) => (props.slot ? props.slot : defaultImg)})
    center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledHero;
