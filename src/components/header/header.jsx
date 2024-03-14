import { styled } from "styled-components";

const Header = () => {
  return (
    <Box>
      <Button>Habilidades</Button>
      <Button>Redes Sociais</Button>
      {/* <button></button> */}
    </Box>
  );
};

export default Header;

const Box = styled.header`
  height: 8vh;
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  padding: 10px;
  border: 1px solid black;
  margin: 20px;
  cursor: pointer;
  text-transform: uppercase;
`;
