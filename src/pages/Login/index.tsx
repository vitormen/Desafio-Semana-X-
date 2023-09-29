import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Logo from "../../assets/ps_orkut.png";
import Banner from "../../components/homepageImg";
import CheckIcon from "../../assets/checkbox.png";
import * as C from "./styles";

const Login = () => {
  const navigate = useNavigate();

  const [checked, setChecked] = useState<boolean>(false);
  const [enteredEmail, setEnteredEmail] = useState<string>("");

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const enteredEmailIsValid = emailRegex.test(enteredEmail);
  const [enteredPassword, setEnteredPassword] = useState("");

  const [enteredPasswordTouched, setEnteredPasswordTouched] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredPasswordIsValid = enteredPassword.trim() !== "";
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;
  const passwordInputIsInvalid =
    !enteredPasswordIsValid && enteredPasswordTouched;

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };
  let formIsValid = false;
  if (enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const passwordInputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnteredPassword(event.target.value);
  };

  const passwordInputBlurHandler = () => {
    setEnteredPasswordTouched(true);
  };

  const emailInputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnteredEmail(event.target.value);
  };

  const emailInputBlurHandler = () => {
    setEnteredEmailTouched(true);
  };

  const [isConnected, setIsConnected] = useState(Boolean);
  const [isSave, setisSave] = useState(false);

  const formSubmissionHandler = async () => {
    setEnteredPasswordTouched(true);
    setEnteredEmailTouched(true);

    if (!enteredPasswordIsValid) {
      return;
    }
    try {
      const response = await fetch("http://localhost:3000/informations");
      const data = await response.json();

      if (data.length === 0) {
        setisSave(true);
        return;
      } else {
        setIsConnected(true);
        if (formIsValid && isConnected) {
          setEnteredPassword("");
          setEnteredPasswordTouched(false);
          setEnteredEmail("");

          navigate("/profile");
        } else {
          navigate("/");
        }
      }
    } catch (error) {
      setIsConnected(false);
    }
  };

  const ApiTest = () => {
    fetch("http://localhost:3000/informations")
      .then(() => setIsConnected(true))
      .catch(() => setIsConnected(false));
  };
  ApiTest();

  return (
    <>
      <Navbar
        thereIsLoggedOut={true}
        thereIsProfile={false}
        thereIsUserEdit={false}
      />
      {isConnected ? null : (
        <C.Error>
          Api não conectada, por favor, inicilize com o comando "npm run server"
        </C.Error>
      )}
      {isSave ? (
        <C.Error>Por favor, para continuar realize o cadastro</C.Error>
      ) : null}

      <C.Container>
        <Banner />
        <C.Card>
          <C.Header>
            <img src={Logo} alt="logo" />
            <C.Title>Acesse o UOLkut</C.Title>
          </C.Header>
          <div>
            <C.Input
              $widthinput={"21rem"}
              $margintop={"0.69rem"}
              $inputvalid={emailInputIsInvalid}
              type="email"
              id="email"
              name="email"
              placeholder="E-mail"
              value={enteredEmail}
              onChange={emailInputChangeHandler}
              onBlur={emailInputBlurHandler}
            ></C.Input>
            {emailInputIsInvalid && <C.AlertError>Email inválido</C.AlertError>}
            <C.Input
              $widthinput={"21rem"}
              $margintop={"1.5rem"}
              $inputvalid={passwordInputIsInvalid}
              type="password"
              id="password"
              name="password"
              placeholder="Senha"
              value={enteredPassword}
              onChange={passwordInputChangeHandler}
              onBlur={passwordInputBlurHandler}
            ></C.Input>
            {passwordInputIsInvalid && (
              <C.AlertError>Senha inválida</C.AlertError>
            )}
            <C.CheckboxContainer onClick={handleCheckboxChange}>
              <C.Checkbox onChange={handleCheckboxChange} checked={checked} />
              <C.StyledCheckbox checked={checked}>
                <img src={CheckIcon} alt="check" />
              </C.StyledCheckbox>
              <C.Text>Lembrar minha senha</C.Text>
            </C.CheckboxContainer>

            <C.Button
              $background={"#ED6D25"}
              $color={"#FFF"}
              type={"submit"}
              onClick={formSubmissionHandler}
            >
              Entrar
            </C.Button>
          </div>
          <Link to={"/signup"} style={{ textDecoration: "none" }}>
            <C.Button $background={"#EFF3F8"} $color={"#ED6D25"}>
              Criar conta
            </C.Button>
          </Link>
          <Link
            to={"/passwordrecovery"}
            style={{
              textAlign: "center",
              margin: "2rem 0 3.06rem 0",
              textDecoration: "none",
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
