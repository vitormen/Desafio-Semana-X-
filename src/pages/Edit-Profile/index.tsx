import Navbar from "../../components/navbar";
import UserImage from "../../assets/User.png";

import * as C from "./styles";

const Profile = () => {
  
  return (
    <>
      <Navbar
        thereIsLoggedOut={false}
        thereIsProfile={true}
        thereIsUserEdit={true}
      />
      <C.DivCenter>
        <C.EditsAndLeftProfile>
          <C.LeftProfile>
            <C.divImg>
              <C.UserImage src={UserImage}></C.UserImage>
            </C.divImg>
          </C.LeftProfile>
        </C.EditsAndLeftProfile>
        <C.CenterProfile>
          <C.title>Editar informações
          </C.title>
                        <C.Input widthButton={"13.4375rem"} marginTop={"5.75rem"} type="text" id="Name" name="Name" placeholder="Profissão"></C.Input>


                        <C.Input widthButton={"13.4375rem"} marginTop={"1.19rem"} type="text" id="Name" name="Name" placeholder="Nome"></C.Input>

                        <C.Input widthButton={"13.4375rem"} marginTop={"1.25rem"} type="text" id="City" name="City" placeholder="Cidade"></C.Input>

                        <C.Input widthButton={"7.8125rem"} marginTop={"1.5rem"} type="text" id="Country" name="Country" placeholder="País"></C.Input>

                        <C.Input widthButton={"7.8125rem"} marginTop={"1.5rem"} type="date" id="Date" name="Date" placeholder="Data"></C.Input>

                        <C.Input widthButton={"13.8125rem"} marginTop={"1.5rem"} type="password" id="password" name="password" placeholder="Senha"></C.Input>

                        <C.Input widthButton={"13.8125rem"} marginTop={"1.5rem"} type="password" id="password" name="password" placeholder="Repetir senha"></C.Input>
                    <C.Button>Salvar</C.Button>

                  
          
        </C.CenterProfile>


      </C.DivCenter>
    </>
  );
};

export default Profile;
//