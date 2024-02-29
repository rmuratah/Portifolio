import styled, { keyframes } from "styled-components";
import Section from "../../components/ui/components/section/section";
import background from "../../assets/images/background.jpg";

const sobreMim = () => {
  return (
    <Section image={background}>
      <Box>
        <TextBox>
          <H3>Rafael Murata</H3>
          <H2>Engenheiro de Software</H2>
          <P>Desenvolvedor Full-Stack</P>
        </TextBox>
      </Box>
    </Section>
  );
};

export default sobreMim;

const fadeDown1 = keyframes`
  from{
    opacity: 0;
    transform: translateY(-30px);
  }
  to{
    opacity: 1;
    transform: translateY(0px);
  }
`;

const Box = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  height: 40%;
  margin-top: 20vh;
`;

const H2 = styled.h2`
  color: white;
  font-size: 4.5rem;
  animation: ${fadeDown1} 1s;
`;

const H3 = styled.h3`
  color: white;
  font-size: 3.5rem;
  animation: ${fadeDown1} 1.25s;
`;

const P = styled.p`
  color: white;
  font-size: 3.5rem;
  margin-top: 2.55rem;
  animation: ${fadeDown1} 1.5s;
`;
