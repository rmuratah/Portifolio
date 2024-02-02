import styled from "styled-components"
import Section from "../../components/ui/components/section/section"
import Card from "../../components/ui/components/card/card"
import { useState } from "react"

const Projetos = () => {

    const CardList = [1, 2, 8, 4, 5]
    const [isCardOpen, setIsCardOpen] = useState(0)

    return (
        <Section color={'#8af48a'}>
            <ProjetosBox>
                <TituloBox>
                    <H1>Projetos</H1>
                </TituloBox>
                <BoxRepositorios>
                    <BoxCards>
                        {CardList.map((card, index) => {
                            return (
                                <BoxCard onClick={() => setIsCardOpen(isCardOpen !== card && card)}>
                                    <Card key={index} index={index} card={card} isCardOpen={isCardOpen === card ? true : false}></Card>
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