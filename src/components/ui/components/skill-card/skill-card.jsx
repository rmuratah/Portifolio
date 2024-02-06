import styled from "styled-components"
import Tilt from "react-vanilla-tilt"

const skillCard = ({ Skill, IconImg }) => {
    return (
        <Box style={{}} options={{ scale: 2, max: 25 }}>
            <Icon src={IconImg} />
            <P>
                {Skill}
            </P>
        </Box>
    )
}

export default skillCard

const Box = styled(Tilt)`
    width: 150px;
    height: 150px;
    border: 1px solid white;
    margin: 1.5rem;
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;
    display: flex;
    color: white;
    align-items: center;
    flex-direction: column;
`

const Icon = styled.img`
    width: 80%;
    height: 80%;
`

const P = styled.p`
    margin-top: 5px;
`