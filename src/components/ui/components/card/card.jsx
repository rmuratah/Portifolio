import styled from "styled-components"

const Card = ({ card }) => {

  return (
    <Box card={card}>
      < BoxBackGround />
      <BoxAbout>
        <H1>League Of Legends</H1>
        <p>
          Lorem ipsum dolor sit amet. Est sunt libero est officiis animi ut veniam consectetur qui illo quaerat.
          Id optio omnis id sint voluptas qui minus repellat et velit architecto qui facilis deserunt est voluptates voluptatem aut culpa earum!
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
    display: flex;
    transition: width .5s;
    flex-direction: column;
    align-items: center;
    order: ${props => props.card};
    width: 500px;
    margin: 30px;
    transition: width 2s;
    background-color: white;
    transition: all.2s;

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
    height: 40%;
		overflow: hidden;
		position: relative; 
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #0F2A43;
    /* background-image: url("https://steamuserimages-a.akamaihd.net/ugc/2010328424759555731/7167A3ECE235D7D7E9CDD5E866E9C556F20C22BD/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: left center;
    object-fit: fill; */
`

const BoxAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;
  text-align: center;
  padding: 10px;
  `

const ShowMore = styled.button`
    width: 50%;
    padding: 10px;
    margin-top: 25px;
    cursor: pointer;
    border-radius: 5px;
    background-color: transparent;
    border: 1px solid black;
    position: relative;

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