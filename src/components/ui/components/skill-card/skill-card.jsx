import styled from "styled-components";
import Tilt from "react-vanilla-tilt";
import { useState } from "react";
import MostrarMais from "./mostrar-mais";

const SkillCard = ({ Skill, IconImg }) => {
  const [mostrarMais, setMostrarMais] = useState(null);

  return (
    <Box
      style={{}}
      options={{ scale: 2, max: 25 }}
      onClick={() => setMostrarMais(Skill)}
    >
      <Icon src={IconImg} />
      <P>{Skill}</P>
    </Box>
  );
};

export default SkillCard;

const Box = styled(Tilt)`
  width: 100px;
  height: 100px;
  cursor: pointer;
  display: flex;
  color: white;
  align-items: center;
  flex-direction: column;
  border: 1px solid transparent;
  transition: 0.75s;
  justify-content: center;
  margin-top: 20px;

  @media (max-width: 1000px) {
    width: 75px;
    height: 75px;
  }

  &:hover {
    border: 1px solid white;
  }
`;

const Icon = styled.img`
  width: 60px;
  height: 60px;
`;

const P = styled.p`
  margin-top: 5px;
  font-size: 0.75rem;
  @media (max-width: 1000px) {
    font-size: 0.5rem;
  }
`;
