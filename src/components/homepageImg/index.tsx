import * as C from './styles.ts';
import img from '../../assets/imgs/default-img.png';
const HomePageImg=  () =>{

    return(
        <>
            <C.imgContainer>
                <C.img src={img}/>
                <C.imgText>
                    Conecte-se aos seus amigos e familiares usando recados e mensagens instantâneas
                </C.imgText>
            </C.imgContainer>

        </>
    )

}

export default HomePageImg;