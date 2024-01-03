import styled from "styled-components"
import Section from "../../components/ui/components/section/section"

import EmailIcon from '../../assets/icons/email.png'
import LinkedinIcon from '../../assets/icons/linkedin.png'
import GithubIcon from '../../assets/icons/github.png'
import InstagramIcon from '../../assets/icons/instagram.png'

const SocialMedia = () => {

    return (
        <Section color={'#ADD8E6'}>
            <SectionBox>
                <TextBox></TextBox>
                <ButtonBox>
                    <UL>
                        <LI style={{ '--i': 4 }}><A><Icon src={EmailIcon} />Email</A></LI>
                        <LI style={{ '--i': 3 }}><A><Icon src={LinkedinIcon} />Linkedin</A></LI>
                        <LI style={{ '--i': 2 }}><A><Icon src={GithubIcon} />GitHub</A></LI>
                        <LI style={{ '--i': 1 }}><A><Icon src={InstagramIcon} />Instagram</A></LI>
                    </UL>
                </ButtonBox>
            </SectionBox>
        </Section>
    )
}

export default SocialMedia

const SectionBox = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 50% 35%;
`

const TextBox = styled.div`
`
const ButtonBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

`

const UL = styled.ul`
    position: relative;
`

const LI = styled.li`
    position: relative;
    list-style: none;
    width: 200px;
    background-color: white;
    z-index: var(--i);
    transition: all.5s;

    &:hover{
        cursor: pointer;
        background-color: #9FAFBC;
        transform: translateX(-50px);
    }

    &::before{
        content: '';
        position: absolute;
        top: 0;
        left: -20px;
        width: 20px;
        height: 100%;
        background-color: #D6D6D6;
        transform-origin: right;
        transform: skewY(45deg);
        transition: all.5s;
    }

    &:hover::before{
        background-color: #6F879B;
    }

    &::after{
        content: '';
        position: absolute;
        top: -20px;
        left: 0;
        width: 100%;
        height: 20px;
        background-color: #EBEBEB;
        transform-origin: bottom;
        transform:  skewX(45deg);
        transition: all.5s;
    }

    &:hover::after{
        background-color: #879BAB;
    }
`

const Icon = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 10px;
`

const A = styled.a`
    text-decoration: none;
    color: #999;
    text-transform: uppercase;
    letter-spacing: 0.05rem;
    transition: all.5s;
    padding: 20px;
    display: flex;
    align-items: center;

    &:hover{
        color: black;
    }
`