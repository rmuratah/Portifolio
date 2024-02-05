import Section from "../../components/ui/components/section/section"
import styled from "styled-components"

const Habilidades = () => {

	return (
		<Section color={'#141414'}>
			<HabilidadesBox>
				<TituloBox>
					<H1>Habilidades</H1>
				</TituloBox>
				<HabilidadeBox>
					<H2>Linguagens de programação</H2>
				</HabilidadeBox>
				<HabilidadeBox>
					<H2>Linguagens de programação</H2>
				</HabilidadeBox>
				<HabilidadeBox>
					<H2>Linguagens de programação</H2>
				</HabilidadeBox>
			</HabilidadesBox>
		</Section>
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
		border: 1px solid white;
		height: 80%;
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
		justify-content: center;
		border-right: 1px solid white;
		border-bottom: 1px solid;
		height: 80%;
		border-image: 
    linear-gradient(
      to bottom, 
      white, 
      rgba(0, 0, 0, 0)
    ) 1 100%;
`