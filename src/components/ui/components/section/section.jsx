import { styled } from "styled-components";

const Section = ({ backgroundcolor, ...props }) => {
  return (
    <CustomSection backgroundcolor={backgroundcolor}>
      {props.children}
    </CustomSection>
  );
};

export default Section;

const CustomSection = styled.section`
  height: 100vh;
  background-color: ${(props) =>
    props.backgroundcolor && `${props.backgroundcolor}`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
`;
