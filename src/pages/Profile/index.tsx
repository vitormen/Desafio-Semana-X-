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
            <C.name>Gabriel Barbosa</C.name>
            <C.MaritalStatus>Solteiro, Brasil</C.MaritalStatus>
          </C.LeftProfile>

          <C.DivEditProfile>
            <C.EditProfile>Editar meu perfil</C.EditProfile>
          </C.DivEditProfile>
        </C.EditsAndLeftProfile>
        <C.CenterProfile>Boa tarde, Gabriel Barbosa</C.CenterProfile>

        <C.FriendsAndComunity>
          <C.RightFriends>AMIGOS</C.RightFriends>
          <C.RightComunity>COMUNIDADES</C.RightComunity>
        </C.FriendsAndComunity>
      </C.DivCenter>
    </>
  );
};

export default Profile;
