import Section from "../../components/ui/components/section/section"
import SkillCard from "../../components/ui/components/skill-card/skill-card"

import javascript from "../../assets/icons/javascript.png"
import typescript from "../../assets/icons/typsecript.png"
import java from "../../assets/icons/java.png"
import sql from "../../assets/icons/sql.png"
import react from "../../assets/icons/react.png"
import next from "../../assets/icons/nextjs.png"
import springboot from "../../assets/icons/springboot.png"
import mysql from "../../assets/icons/mysql.png"
import git from "../../assets/icons/git.png"
import aws from "../../assets/icons/aws.png"
import prisma from "../../assets/icons/prisma.png"

import styled from "styled-components"

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
						<SkillCard Skill={"JavaScript"} IconImg={javascript} />
						<SkillCard Skill={"TypeScript"} IconImg={typescript} />
						<SkillCard Skill={"Java"} IconImg={java} />
						<SkillCard Skill={"SQL"} IconImg={sql} />
					</CardsBox>
				</HabilidadeBox>
				<HabilidadeBox>
					<H2>Libraries & Frameworks</H2>
					<CardsBox>
						<SkillCard Skill={"React JS"} IconImg={react} />
						<SkillCard Skill={"React Native"} IconImg={react} />
						<SkillCard Skill={"Next JS"} IconImg={next} />
						<SkillCard Skill={"SpringBoot"} IconImg={springboot} />
					</CardsBox>
				</HabilidadeBox>
				<HabilidadeBox>
					<H2>Outras tecnologias</H2>
					<CardsBox>
						<SkillCard Skill={"Git"} IconImg={git} />
						<SkillCard Skill={"MySQL"} IconImg={mysql} />
						<SkillCard Skill={"Cloud AWS"} IconImg={aws} />
						<SkillCard Skill={"Prisma"} IconImg={prisma} />
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
	margin-top: 2rem;
`