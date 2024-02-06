import styled from "styled-components"
import Section from "../../components/ui/components/section/section"

const sobreMim = () => {

    return (
        <Section color={'#141414'}>
            <Box>
                <TextBox>
                    <H3>Rafael Murata</H3>
                    <H2>Engenheiro de Software</H2>
                    <P>Desenvolvedor Full-Stack</P>
                </TextBox>
            </Box>
        </Section>
    )
}

export default sobreMim

const Box = styled.div`
    display: grid;
    height: 100%;
    grid-template-columns: 60% 40%;
`

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const H2 = styled.h2`
    color: white;
    font-size: 3.5rem;
    margin-left: 20rem;
`

const H3 = styled.h3`
    color: white;
    font-size: 2.5rem;
    margin-left: 20rem;
`

const P = styled.p`
    color: white;
    font-size: 2.5rem;
    margin-left: 20rem;
    margin-top: 2.55rem;
`