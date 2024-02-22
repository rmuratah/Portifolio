import { styled } from "styled-components";

const MostrarMais = ({ Skill, setMostrarMais }) => {
  return (
    <Box>
      <H1>{Skill.id}</H1>
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
`;

const H1 = styled.h1`
  color: red;
  font-size: 2rem;
`;

const Button = styled.button`
  padding: 15px;
  cursor: pointer;
`;
