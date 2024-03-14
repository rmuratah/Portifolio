import styled, { keyframes } from "styled-components";

import Section from "../../components/ui/components/section/section";
import SkillCard from "../../components/ui/components/skill-card/skill-card";

import MinhasLinguagensDeProgramacao from "./minhas-linguagens-de-programacao";
import MinhasTecnologias from "./minhas-tecnologias";
import MeusFrameWorks from "./meus-frameworks";
import PopUp from "../../components/ui/components/pop-up/pop-up";
import ArrowRight from "../../assets/icons/right-arrow.png";

import { useState } from "react";

const Habilidades = () => {
  const [popup, setPopup] = useState();
  const [open, setOpen] = useState(false);

  return (
    <Section backgroundcolor={'#696969'}>
      {!open && (
        <AbrirBtn onClick={() => setOpen(true)}>
          <AbrirImg src={ArrowRight} alt="AbrirBtn" />
        </AbrirBtn>
      )}
      <PopUp popup={popup} setPopup={setPopup} />
      <HabilidadesBox popup={popup} open={open}>
        <TituloBox>
          <H1>Habilidades</H1>
        </TituloBox>
        <HabilidadeBox>
          <H2>Linguagens de Programação</H2>
          <CardsBox>
            {MinhasLinguagensDeProgramacao.map((Linguagem) => (
              <SkillCard
                setPopup={setPopup}
                key={Linguagem.id}
                Skill={Linguagem.Linguagem}
                IconImg={Linguagem.Image}
              />
            ))}
          </CardsBox>
        </HabilidadeBox>
        <HabilidadeBox>
          <H2>Libraries & Frameworks</H2>
          <CardsBox>
            {MeusFrameWorks.map((FrameWork) => (
              <SkillCard
                setPopup={setPopup}
                key={FrameWork.id}
                Skill={FrameWork.FrameWork}
                IconImg={FrameWork.Image}
              />
            ))}
          </CardsBox>
        </HabilidadeBox>
        <HabilidadeBox>
          <H2>Outras tecnologias</H2>
          <CardsBox>
            {MinhasTecnologias.map((Tecnologia) => (
              <SkillCard
                setPopup={setPopup}
                key={Tecnologia.id}
                Skill={Tecnologia.Tecnologia}
                IconImg={Tecnologia.Image}
              />
            ))}
          </CardsBox>
        </HabilidadeBox>
      </HabilidadesBox>
    </Section>
  );
};

export default Habilidades;

const faderight = keyframes`
  from{
    opacity: 0;
    transform: translateX(-30px);
  }
  to{
    opacity: 1;
    transform: translateX(0px);
  }
`;

const HabilidadesBox = styled.div`
  display: ${(props) => (props.open === true ? "grid" : "none")};
  align-items: center;
  height: 100%;
  grid-template-columns: 20% 25% 25% 25%;
  filter: ${(props) =>
    props.popup !== null && props.popup !== undefined
      ? "brightness(50%)"
      : undefined};
`;

const TituloBox = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
  border-right: 1px solid white;
  border-image: linear-gradient(to bottom, white, rgba(0, 0, 0, 0)) 1 100%;
  animation: ${faderight} 1s;
`;

const H1 = styled.h1`
  color: white;
  font-size: 3.25rem;
  writing-mode: vertical-rl;
  text-orientation: upright;
  text-transform: uppercase;
`;

const H2 = styled.h2`
  color: white;
  font-size: 1.75rem;
  text-align: center;
  margin-top: 80px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -25px;
    height: 3px;
    width: 50%;
    left: 25%;
    background-color: white;
    margin-left: auto;
    margin-right: auto;
  }
`;

const HabilidadeBox = styled.div`
  display: flex;
  align-items: center;
  border-right: 1px solid white;
  border-bottom: 1px solid;
  height: 80%;
  width: 90%;
  flex-direction: column;
  border-image: linear-gradient(to bottom, white, rgba(0, 0, 0, 0)) 1 100%;
  animation: ${faderight} 1.5s;
`;

const CardsBox = styled.div`
  width: 85%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  margin-top: 3rem;
  align-items: center;
  justify-items: center;
  max-height: 60%;
  overflow: auto;

  &::-webkit-scrollbar {
    background-color: #b8b8b8;
    width: 6px;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: #3d3d3d;
    border-radius: 5px;
  }
`;

const AbrirBtn = styled.button`
  width: 80px;
  height: 80px;
  position: absolute;
  margin-left: 100px;
  border-radius: 50%;
  border: 1px solid white;
  background-color: transparent;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  top: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AbrirImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
