import { keyframes, styled } from "styled-components";

const PopUp = ({ popup, setPopup }) => {
  return (
    <Box popup={popup}>
      <H1>{popup}</H1>
      <FechatBtn onClick={() => setPopup(null)}>Fechar</FechatBtn>
    </Box>
  );
};

export default PopUp;

const fadedown = keyframes`
  from{
    opacity: 0;
    transform: translateY(-100px);
  }
  to{
    opacity: 1;
    transform: translateY(0px);
  }
`;

const Box = styled.div`
  position: absolute;
  background-color: white;
  width: 800px;
  height: 400px;
  justify-self: center;
  display: ${(props) =>
    props.popup !== null && props.popup !== undefined ? "flex" : "none"};
  animation: ${fadedown} 1s;
  border-radius: 15px;
  justify-content: center;
`;

const FechatBtn = styled.button`
  width: 100px;
  height: 50px;
  cursor: pointer;
  position: absolute;
  bottom: 0;
  right: 0;
  margin-bottom: 20px;
  margin-right: 35px;
  border-radius: 10px;
  background-color: black;
  color: white;
  border: none;
`;

const H1 = styled.h1`
  margin-top: 3.5vh;
  font-size: 2.5rem;
`;
