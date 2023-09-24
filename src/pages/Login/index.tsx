import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Logo from "../../assets/ps_orkut.png";
import Banner from "../../components/homepageImg";
import CheckIcon from "../../assets/checkbox.png";
import * as C from "./styles";

const Login = () => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <>
      <Navbar
        thereIsLoggedOut={true}
        thereIsProfile={false}
        thereIsUserEdit={false}
      />
      <C.Container>
        <Banner />
        <C.Card>
          <C.Header>
            <img src={Logo} alt="logo" />
            <C.Title>Acesse o UOLkut</C.Title>
          </C.Header>
          <C.Input
            $widthinput={"21rem"}
            $margintop={"0.69rem"}
            type="email"
            id="email"
            name="email"
            placeholder="E-mail"
          ></C.Input>
          <C.Input
            $widthinput={"21rem"}
            $margintop={"1.5rem"}
            type="password"
            id="password"
            name="password"
            placeholder="Senha"
          ></C.Input>
          <C.CheckboxContainer onClick={handleCheckboxChange}>
            <C.Checkbox onChange={handleCheckboxChange} checked={checked} />
            <C.StyledCheckbox checked={checked}>
              <img src={CheckIcon} alt="check" />
            </C.StyledCheckbox>

            <C.Text>Lembrar minha senha</C.Text>
          </C.CheckboxContainer>
          
          <Link to={"/profile"} style={{textDecoration: "none"}}>
            <C.Button $background={"#ED6D25"} $color={"#FFF"}>
              Entrar
            </C.Button>
          </Link>
          <Link to={"/signup"} style={{textDecoration: "none"}}>
            <C.Button $background={"#EFF3F8"} $color={"#ED6D25"}>
              Criar conta
            </C.Button>
          </Link>
          <Link
            to={"/passwordrecovery"}
            style={{
              textAlign: "center",
              margin: "2rem 0 3.06rem 0",
              textDecoration: "none"
            }}
          >
            <C.PasswordForgot>Esqueci a minha senha</C.PasswordForgot>
          </Link>
        </C.Card>
      </C.Container>
      <Footer />
    </>
  );
};

export default Login;
