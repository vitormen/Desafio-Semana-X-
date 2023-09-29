import * as C from "./styles";
import Search from "../../assets/Search.png";
import CaretDown from "../../assets/CaretDown.png";
import UserImage from "../../assets/User.png";
import { useState, useEffect } from "react";

//viewing conditions for each page type props
interface INavbarProps {
  thereIsLoggedOut: boolean;
  thereIsProfile: boolean;
  thereIsUserEdit: boolean;
}

const Navbar: React.FC<INavbarProps> = ({
  thereIsLoggedOut,
  thereIsProfile,
  thereIsUserEdit,
}): JSX.Element => {
  const handleOptionColor = (value: boolean) => {
    //selected page color
    return value ? "#ED6D25" : "#4B4B4B";
  };

  const [name, setName] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/informations")
      .then((response) => response.json())
      .then((data) => {
        setName(data[0].name);
      })
      .catch((error) => console.error("Erro:", error));
  }, []);

  return (
    <>
      <C.Nav
        $mobileLoggedOut={thereIsLoggedOut}
        $moblieProfile={thereIsProfile}
        $mobileUserEdit={thereIsUserEdit}
      >
        <C.MenuLeft>
          <C.StyledNavLink to="/">
            <C.LogoText>UOLkut</C.LogoText>
          </C.StyledNavLink>

          {!thereIsProfile && !thereIsUserEdit ? (
            " "
          ) : (
            <C.MenuOptions className="hide-on-mobile">
              <C.StyledNavLink to="/">
                <C.Option color={handleOptionColor(false)}>Início</C.Option>
              </C.StyledNavLink>

              <C.StyledNavLink to="/profile">
                <C.Option color={handleOptionColor(true)}>Perfil</C.Option>
              </C.StyledNavLink>

              <C.Option color={handleOptionColor(false)}>Comunidades</C.Option>
              <C.Option color={handleOptionColor(false)}>Jogos</C.Option>
            </C.MenuOptions>
          )}
        </C.MenuLeft>
        <C.MenuRight>
          {!thereIsProfile ? (
            " "
          ) : (
            <C.Search className="hide-on-mobile">
              <C.ImageSearch src={Search} alt="search"></C.ImageSearch>
              <C.SearchInput
                type="text"
                id="search"
                name="search"
                placeholder="Pesquisar no UOLkut"
              ></C.SearchInput>
            </C.Search>
          )}
          {!thereIsProfile && !thereIsUserEdit ? (
            " "
          ) : (
            <C.User
              $mobileUserEdit={thereIsUserEdit}
              $moblieProfile={thereIsProfile}
            >
              <C.UserImage src={UserImage}></C.UserImage>
              <p className="hide-on-mobile">{name}</p>
              <img
                src={CaretDown}
                alt="carretDown"
                className="hide-on-mobile"
              />
            </C.User>
          )}
          {!thereIsLoggedOut ? " " : <C.Link>Centro de segurança</C.Link>}
        </C.MenuRight>
      </C.Nav>
    </>
  );
};

export default Navbar;
