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

          <C.DivEditProfile>
            <C.EditProfile>Editar meu perfil</C.EditProfile>
          </C.DivEditProfile>
        </C.EditsAndLeftProfile>
        <C.CenterProfile></C.CenterProfile>


      </C.DivCenter>
    </>
  );
};

export default Profile;
