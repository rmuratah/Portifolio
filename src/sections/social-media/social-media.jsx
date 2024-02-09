import styled from "styled-components"
import Section from "../../components/ui/components/section/section"
import MySocialMedia from "./my-social-media";
import { useState } from "react";

const SocialMedia = () => {

    const redes = ['R', 'e', 'd', 'e', 's', '-', 's', 'o', 'c', 'i', 'a', 'i', 's']
    const [HoverImg, setHoverImg] = useState()
    const [textboxcolor, settextboxcolor] = useState('white')

    return (
        <Section color={'#141414'}>
            <SectionBox>
                <TextBox>
                    {redes.map((letra, index) => <P key={index} textboxcolor={textboxcolor}>{letra}</P>)}
                </TextBox>
                <ButtonBox>
                    <UL>
                        {MySocialMedia.map(Media =>
                            <LI
                                key={Media.id}
                                style={{ '--i': Media.order }}
                                onMouseEnter={() => { setHoverImg(Media); settextboxcolor(Media.HoverColor[0]) }}
                                onMouseLeave={() => { setHoverImg(undefined); settextboxcolor('white') }}
                                hovercolor={Media.HoverColor}>
                                <A href={Media.link} target="_blank" rel="noreferrer noopener">
                                    <Icon src={HoverImg === Media ? Media.Icon[1] : Media.Icon[0]} />{Media.SocialMedia}
                                </A>
                            </LI>
                        )}
                    </UL>
                </ButtonBox>
            </SectionBox>
        </Section >
    )
}

export default SocialMedia

const SectionBox = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 50% 40%;
`

const TextBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const P = styled.p`
    text-transform: uppercase;
    font-size: 7rem;
    color: ${props => props.textboxcolor && `${props.textboxcolor}`};
    letter-spacing: 0.05rem;
    margin-bottom: 4vh;
    transition: all.3s;
    cursor: pointer;

    &:hover{
        transform: translateY(-30px);
    }
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
    width: 400px;
    background-color: white;
    z-index: var(--i);
    transition: all.5s;

    &:hover{
        cursor: pointer;
        background-color: ${props => props.hovercolor && `${props.hovercolor[0]}`};
        transform: translateX(-50px);
    }

    &::before{
        content: '';
        position: absolute;
        top: 0;
        left: -30px;
        width: 30px;
        height: 100%;
        background-color: #D6D6D6;
        transform-origin: right;
        transform: skewY(45deg);
        transition: all.5s;
    }

    &:hover::before{
        background-color: ${props => props.hovercolor && `${props.hovercolor[1]}`};
    }

    &::after{
        content: '';
        position: absolute;
        top: -30px;
        left: 0;
        width: 100%;
        height: 30px;
        background-color: #EBEBEB;
        transform-origin: bottom;
        transform:  skewX(45deg);
        transition: all.5s;
    }

    &:hover::after{
        background-color: ${props => props.hovercolor && `${props.hovercolor[2]}`};
    }
`

const Icon = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 10px;
`

const A = styled.a`
    font-size: 2rem;
    text-decoration: none;
    color: #999;
    text-transform: uppercase;
    letter-spacing: 0.05rem;
    transition: all.5s;
    padding: 20px;
    display: flex;
    align-items: center;

    &:hover{
        color: white;
    }
`