import * as C from "./styles";
import Search from "../../assets/Search.png";
import CaretDown from "../../assets/CaretDown.png";
import UserImage from "../../assets/User.png";

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
    return value ? "#ED6D25" : "#4B4B4B";
  };

  return (
    <>
      <C.Nav>
        <C.MenuLeft>
          <C.StyledNavLink to="/">
            <C.LogoText>UOLkut</C.LogoText>
          </C.StyledNavLink>

          {!thereIsProfile && !thereIsUserEdit ? (
            " "
          ) : (
            <C.MenuOptions>
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
            <C.Search>
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
            <C.User>
              <C.UserImage src={UserImage}></C.UserImage>
              <p>Gabriel Barbosa</p>
              <img src={CaretDown} alt="carretDown" />
            </C.User>
          )}
          {!thereIsLoggedOut ? " " : <C.Link>Centro de segurança</C.Link>}
        </C.MenuRight>
      </C.Nav>
    </>
  );
};

export default Navbar;
