import styled from "styled-components"

const Card = ({ repo }) => {

  return (
    <Box>
      < BoxBackGround image={repo.Image}/>
      <BoxAbout>
        <H1>{repo.Title}</H1>
        <p>
          {repo.Sobre}
        </p>
      </BoxAbout>
      <ShowMore>
        Mostrar Mais
      </ShowMore>
    </Box >
  )
}

export default Card



const Box = styled.div`
    box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
    display: grid;
    transition: width .5s;
    flex-direction: column;
    align-items: center;
    order: ${props => props.card};
    width: 500px;
    margin: 30px;
    transition: width 2s;
    background-color: white;
    transition: all.2s;
    grid-template-rows: 40% 35% 25%;

    &:hover{
      transform: translateY(-20px)    
    }
`

const H1 = styled.h1`
    margin-top: 10px;
    color: black;
    margin-bottom: 20px;
`

const BoxBackGround = styled.div`
    width: 100%;
    height: 100%;
		overflow: hidden;
		position: relative; 
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(${props => props && props.image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: left center;
    object-fit: fill;
    border-bottom: 1px solid black;
`

const BoxAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;
  text-align: center;
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
  `

const ShowMore = styled.button`
    width: 50%;
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    background-color: transparent;
    border: 1px solid black;
    position: relative;
    margin-left: auto;
    margin-right: auto;

    &::before{
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      transition: transform .5s;
      transform-origin: 0 0;
      transition-timing-function: cubic-bezier(0.5, 1.6, 0.4, 0.7);
      transform: scaleX(0);
      background-color: #C89B3C;
    }

    &:hover::before{
      transform: scaleX(1);
    }
  `