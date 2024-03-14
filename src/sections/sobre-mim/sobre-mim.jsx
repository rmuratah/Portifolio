import styled, { keyframes } from "styled-components";
import Section from "../../components/ui/components/section/section";

const sobreMim = () => {
  return (
    <Section backgroundcolor={"#FFF"}>
      <Box>
        <TextBox>
          <H2>Rafael Murata</H2>
          <H3>
            Engenheiro de <Span>Software</Span> | Desenvolvedor{" "}
            <Span>Full-Stack</Span>
          </H3>
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

const fadeDown2 = keyframes`
  from{
    opacity: 0;
    transform: translateY(-100px);
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
  align-items: center;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  height: 40%;

  @media (max-width: 800px) {
    width: 90%;
  }
`;

const H2 = styled.h2`
  font-size: 6em;
  animation: ${fadeDown2} 1s;
  text-align: center;
  text-transform: uppercase;
  color: #6AB4B1;

  @media (max-width: 1200px) {
    font-size: 3.5rem;
  }
  @media (max-width: 500px) {
    font-size: 3rem;
  }
`;

const H3 = styled.h3`
  font-size: 1.65rem;
  animation: ${fadeDown1} 1.25s;
  text-align: center;
  text-transform: uppercase;
  color: #6AB4B1;

  @media (max-width: 1200px) {
    font-size: 2.5rem;
  }
  @media (max-width: 500px) {
    font-size: 2rem;
  }
`;

const Span = styled.span`
  color: #6A6CB4;
`;

// .color-1 { background-color: rgb(218, 198, 181); }
// .color-2 { background-color: rgb(237, 228, 220); }
// .color-3 { background-color: rgb(251, 249, 247); }
// .color-4 { background-color: rgb(181, 218, 217); }
// .color-5 { background-color: rgb(181, 182, 218); }
