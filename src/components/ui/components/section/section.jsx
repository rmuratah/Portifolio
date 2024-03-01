import { styled } from "styled-components";

const Section = ({ image, ...props }) => {
  const style = {
    backgroundImage: `url(${image})`,
  };

  return <CustomSection image={image}>{props.children}</CustomSection>;
};

export default Section;

const CustomSection = styled.section`
  height: 100vh;
  background-color: #141414;
  background-image: ${(props) => props && `url(${props.image})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center
`;
