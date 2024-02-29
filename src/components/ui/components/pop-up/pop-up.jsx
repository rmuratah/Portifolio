import { styled } from "styled-components";

const PopUp = ({ popup, setPopup }) => {
  return (
    <Box popup={popup}>
      <h1>{popup}</h1>
      <button onClick={() => setPopup(null)}>Fechar</button>
    </Box>
  );
};

export default PopUp;
const Box = styled.div`
  position: absolute;
  background-color: white;
  width: 800px;
  height: 400px;
  justify-self: center;
  display: ${(props) => (props.popup !== null && props.popup !== undefined ? "flex" : "none")};
`;
