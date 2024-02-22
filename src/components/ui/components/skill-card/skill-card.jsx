import styled from "styled-components";
import Tilt from "react-vanilla-tilt";

const skillCard = ({ Skill, IconImg }) => {
  return (
    <Box style={{}} options={{ scale: 2, max: 25 }}>
      <Icon src={IconImg} />
      <P>{Skill}</P>
    </Box>
  );
};

export default skillCard;

const Box = styled(Tilt)`
  width: 150px;
  height: 150px;
  /* margin: 1.5rem; */
  cursor: pointer;
  display: flex;
  color: white;
  align-items: center;
  flex-direction: column;

  &:hover {
    border: 1px solid white;
  }
`;

const Icon = styled.img`
  width: 75%;
  height: 75%;
  margin: 5px;
`;

const P = styled.p`
  margin-top: 5px;
`;
