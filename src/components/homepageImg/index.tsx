import * as C from "./styles.ts";
import img from "../../assets/default-img.png";
const HomePageImg = () => {
  return (
    <>
      <C.imgContainer className="hide-on-mobile">
        <C.styledimg src={img} />
        <C.imgText>
          Conecte-se aos seus amigos e familiares usando recados e mensagens
          instantâneas
        </C.imgText>
      </C.imgContainer>
    </>
  );
};

export default HomePageImg;
