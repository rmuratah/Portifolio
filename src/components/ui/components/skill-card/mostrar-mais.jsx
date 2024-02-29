import { styled } from "styled-components";

const MostrarMais = ({ Skill, setMostrarMais }) => {
  return (
    <Box>
      <H1>{Skill}</H1>
      <Button onClick={() => setMostrarMais(null)}>Fechar</Button>
    </Box>
  );
};

export default MostrarMais;

const Box = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  position: absolute;
  border: 1px solid white;
  background-color: white;
`;

const H1 = styled.h1`
  font-size: 2rem;
`;

const Button = styled.button`
  padding: 15px;
  cursor: pointer;
`;
