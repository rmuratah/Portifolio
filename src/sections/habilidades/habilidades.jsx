import Section from "../../components/ui/components/section/section"
import styled from "styled-components"

const Habilidades = () => {

    return (
        <Section color={'#141414'}>
            <HabilidadesBox>
                <TituloBox>
                    <H1>Habilidades</H1>
                </TituloBox>
            </HabilidadesBox>
        </Section>
    )
}

export default Habilidades

const HabilidadesBox = styled.div`
    display: grid;
    height: 100%;
    grid-template-columns: 25% 65%;
`

const TituloBox = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const H1 = styled.h1`
    color: white;
    font-size: 3.5rem;
    letter-spacing: 0.05rem;
    writing-mode: vertical-rl;
    text-orientation: upright;
    text-transform: uppercase;
`