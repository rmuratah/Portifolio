import styled from "styled-components"

import Section from "../../components/ui/components/section/section"
import SkillCard from "../../components/ui/components/skill-card/skill-card"

import MinhasLinguagensDeProgramacao from "./minhas-linguagens-de-programacao";
import MinhasTecnologias from "./minhas-tecnologias";
import MeusFrameWorks from "./meus-frameworks";

const Habilidades = () => {

	return (
		<Section color={'#141414'}>
			<HabilidadesBox>
				<TituloBox>
					<H1>Habilidades</H1>
				</TituloBox>
				<HabilidadeBox>
					<H2>Linguagens de Programação</H2>
					<CardsBox>
						{MinhasLinguagensDeProgramacao.map(Linguagem => <SkillCard key={Linguagem.id} Skill={Linguagem.Linguagem} IconImg={Linguagem.Image} />)}
					</CardsBox>
				</HabilidadeBox>
				<HabilidadeBox>
					<H2>Libraries & Frameworks</H2>
					<CardsBox>
						{MeusFrameWorks.map(FrameWork => <SkillCard key={FrameWork.id} Skill={FrameWork.FrameWork} IconImg={FrameWork.Image} />)}
					</CardsBox>
				</HabilidadeBox>
				<HabilidadeBox>
					<H2>Outras tecnologias</H2>
					<CardsBox>
						{MinhasTecnologias.map(Tecnologia => <SkillCard key={Tecnologia.id} Skill={Tecnologia.Tecnologia} IconImg={Tecnologia.Image} />)}
					</CardsBox>
				</HabilidadeBox>
			</HabilidadesBox>
		</Section >
	)
}

export default Habilidades

const HabilidadesBox = styled.div`
    display: grid;
	align-items: center;
    height: 100%;
    grid-template-columns: 20% 25% 25% 25%;
`

const TituloBox = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
	height: 80%;
	border-right: 1px solid white;
	border-image: 
    linear-gradient(
      to bottom, 
      white, 
      rgba(0, 0, 0, 0)
    ) 1 100%;
`

const H1 = styled.h1`
    color: white;
    font-size: 3.25rem;
    writing-mode: vertical-rl;
    text-orientation: upright;
    text-transform: uppercase;
`

const H2 = styled.h2`
 	color: white;
	font-size: 1.75rem;
	text-align: center;
	margin-top: 80px;
	position: relative;

	&::after{
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
`

const HabilidadeBox = styled.div`
    display: flex;
	align-items: center;
	border-right: 1px solid white;
	border-bottom: 1px solid;
	height: 80%;
	flex-direction: column;
	border-image: 
    linear-gradient(
      to bottom, 
      white, 
      rgba(0, 0, 0, 0)
    ) 1 100%;
`

const CardsBox = styled.div`
	width: 85%;
	height: 50%;
	display: grid;
	grid-template-columns: 50% 50%;
	grid-template-rows: 50% 50%;
	margin-top: 3rem;
	align-items: center;
	justify-items: center;
`