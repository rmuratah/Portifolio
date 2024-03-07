import { keyframes, styled } from "styled-components";
import JavaScript from "../../../../assets/icons/habilidades/javascript.png";

const PopUp = ({ popup, setPopup }) => {
  console.log(popup);

  return (
    <Box popup={popup}>
      <ImgSkill src={JavaScript} alt={"skill"} />
      <H1>{popup}</H1>
      <FechatBtn onClick={() => setPopup(null)}>Fechar</FechatBtn>
      <BoxSkills>
        <BoxSkill>
          <BoxSkillH1>Sobre</BoxSkillH1>
          <P>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing
          </P>
        </BoxSkill>
        <BoxSkill>
          <BoxSkillH1>Nível</BoxSkillH1>
          <P>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing
          </P>
        </BoxSkill>
        <BoxSkill>
          <BoxSkillH1>Teste</BoxSkillH1>
          <P>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing
          </P>
        </BoxSkill>
      </BoxSkills>
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
  display: ${(props) =>
    props.popup !== null && props.popup !== undefined ? "flex" : "none"};
  animation: ${fadedown} 1s;
  border-radius: 15px;
  top: 20%;
  left: 20%;
  z-index: 1;
  flex-direction: column;
  align-items: center;
`;

const FechatBtn = styled.button`
  width: 100px;
  height: 50px;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 20px;
  margin-right: 35px;
  border-radius: 10px;
  background-color: black;
  color: white;
  border: none;
`;

const H1 = styled.h1`
  font-size: 1.75rem;
`;

const ImgSkill = styled.img`
  width: 75px;
  height: 75px;
  margin-top: 3vh;
`;

const BoxSkills = styled.div`
  width: 90%;
  height: 50%;
  margin-top: 3.5vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const BoxSkill = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BoxSkillH1 = styled.h3`
  font-size: 1.25rem;
`;

const P = styled.p`
  text-align: center;
  margin-top: 2vh;
`;
