import styled from "styled-components"
import Section from "../../components/ui/components/section/section"
import Card from "../../components/ui/components/card/card"
import MeusRepositorios from "./meus-repositorios";

const Projetos = () => {

    return (
        <Section color={'#141414'}>
            <ProjetosBox>
                <TituloBox>
                    <H1>Projetos</H1>
                </TituloBox>
                <BoxRepositorios>
                    <BoxCards>
                        {MeusRepositorios.map(repo => {
                            return (
                                <BoxCard>
                                    <Card repo={repo} />
                                </BoxCard>
                            )
                        })}
                    </BoxCards>
                </BoxRepositorios>
            </ProjetosBox>
        </Section>
    )
}

export default Projetos

const ProjetosBox = styled.div`
    display: grid;
    height: 100%;
    grid-template-rows: 35% 65%;
`

const TituloBox = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const H1 = styled.h1`
    color: white;
    font-size: 7rem;
    letter-spacing: 0.05rem;
    position: relative;

    &::after{
        content: "";
        position: absolute;
        bottom: -25px;
        height: 4px;
        width: 100%;
        left: 0;
        background-color: white;
        margin-left: auto;
        margin-right: auto;
    }
`

const BoxRepositorios = styled.div`
    display: flex;
    margin-bottom: 20px;
`

const BoxCards = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const BoxCard = styled.div`
    display: flex;
`