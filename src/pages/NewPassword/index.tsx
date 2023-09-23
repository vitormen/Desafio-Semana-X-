import * as C from "./styles.ts";
import HomePageImg from "../../components/homepageImg";
import logo from "../../assets//ps_orkut.png";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

const NewPassword = () => {
  return (
    <>
      <Navbar
        thereIsLoggedOut={true}
        thereIsProfile={false}
        thereIsUserEdit={false}
      />
      <C.PageContainer>
        <div>
          <HomePageImg />
        </div>

        <C.NewPasswordMenu>
          <C.MenuHeader>
            <C.Logo src={logo} />
            <C.h1>Nova senha</C.h1>
          </C.MenuHeader>

          <C.input
            marginTop={"2.25rem"}
            type="text"
            id="code"
            name="code"
            placeholder="Informe o código"
          ></C.input>
          <C.input
            marginTop={"1.12rem"}
            type="password"
            id="password"
            name="password"
            placeholder="Nova Senha"
          ></C.input>
          <C.input
            marginTop={"1.12rem"}
            type="password"
            id="password-confirm"
            name="password-confirm"
            placeholder="Confirmar a senha"
          ></C.input>

          <C.StyledLink to="/">
            <C.SaveButton>Salvar</C.SaveButton>
          </C.StyledLink>

          {/*Vai ser necessario mudar isso no futuro para que se torne algo clicavel, pois no momento se trata somente de uma TAG <P></P>*/}
          <C.ClickText>
            <p>Lembrou sua Senha?</p>
          </C.ClickText>

          <C.AlternativeButton>Entrar com as credenciais</C.AlternativeButton>
        </C.NewPasswordMenu>
      </C.PageContainer>
      <Footer />
    </>
  );
};

export default NewPassword;
