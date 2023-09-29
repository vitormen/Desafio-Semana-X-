import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Logo from "../../assets/ps_orkut.png";
import Banner from "../../components/homepageImg";
import Arrow from "../../assets/CaretDown.png";
import * as C from "./styles";
import useInput from "../../hooks/use-input";
import { parse, isValid } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useState } from "react";

import { useSaveData } from "../../hooks/use-saveDate";

const SignUp = () => {
  const { data, setData, saveData } = useSaveData(
    "http://localhost:3000/informations"
  );

  const emailInputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setData({ ...data, email: event.target.value });
  };

  const combinedEmailChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    emailChangeHandler(event);
    emailInputChangeHandler(event);
  };

  const combinedPasswordChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    passwordChangeHandler(event);
    setData({ ...data, password: event.target.value });
  };

  const combinedNameChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    nameChangeHandler(event);
    setData({ ...data, name: event.target.value });
  };

  const combinedBirthChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    birthdayChangeHandler(event);
    setData({ ...data, birth: event.target.value });
  };

  const combinedJobChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    professionChangeHandler(event);
    setData({ ...data, job: event.target.value });
  };

  const combinedCountryChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    countryChangeHandler(event);
    setData({ ...data, country: event.target.value });
  };

  const combinedCityChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    cityChangeHandler(event);
    setData({ ...data, city: event.target.value });
  };

  //select input states and values
  const [selectValue, setSelecValue] = useState<string>("");
  const [options, setOptions] = useState<Boolean>(false);
  const Options = [
    { _id: "1", name: "Solteiro" },
    { _id: "2", name: "Casado" },
    { _id: "3", name: "Divorciado" },
    { _id: "4", name: "Namorando" },
    { _id: "5", name: "Preocupado" },
  ];

  //form validation with custom hooks
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) =>
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value)
  );
  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: passwordReset,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredBirthday,
    isValid: enteredBirthdayIsValid,
    hasError: birthdayInputHasError,
    valueChangeHandler: birthdayChangeHandler,
    inputBlurHandler: birthdayBlurHandler,
    reset: birthdayReset,
  } = useInput((value) => {
    const selectedDate = parse(value, "P", new Date(), { locale: ptBR });
    const currentDate = new Date();
    const initialDate = new Date('01/01/1900')
    return isValid(selectedDate) && (selectedDate > initialDate) && (selectedDate < currentDate) ;
  });
  const {
    value: enteredProfession,
    isValid: enteredProfessionIsValid,
    hasError: professionInputHasError,
    valueChangeHandler: professionChangeHandler,
    inputBlurHandler: professionBlurHandler,
    reset: professionReset,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredCountry,
    isValid: enteredCountryIsValid,
    hasError: countryInputHasError,
    valueChangeHandler: countryChangeHandler,
    inputBlurHandler: countryBlurHandler,
    reset: countryReset,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredCity,
    isValid: enteredCityIsValid,
    hasError: cityInputHasError,
    valueChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
    reset: cityReset,
  } = useInput((value) => value.trim() !== "");

  //check if the form is valid
  let formIsValid = false;
  if (
    enteredNameIsValid &&
    enteredEmailIsValid &&
    enteredPasswordIsValid &&
    enteredBirthdayIsValid &&
    enteredProfessionIsValid &&
    enteredCountryIsValid &&
    enteredCityIsValid
  ) {
    formIsValid = true;
  }
  //function to reset if the form is valid
  const formSubmissionHandler = () => {
    emailReset();
    passwordReset();
    nameReset();
    birthdayReset();
    professionReset();
    countryReset();
    cityReset();
  };

  const combinedFormSubmissionHandler = () => {
    formSubmissionHandler();
    saveData();
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
            <C.Title>Cadastre-se o UOLkut</C.Title>
          </C.Header>
          <div>
            <C.Input
              $widthinput={"21rem"}
              $margintop={"0.69rem"}
              $widthmobileinput={"17rem"}
              $inputvalid={emailInputHasError}
              onChange={combinedEmailChangeHandler}
              onBlur={emailBlurHandler}
              value={enteredEmail}
              type="email"
              id="email"
              name="email"
              placeholder="E-mail"
            ></C.Input>
            {emailInputHasError && <C.AlertError>Email inválido</C.AlertError>}
            <C.Input
              $widthinput={"21rem"}
              $margintop={"1.5rem"}
              $widthmobileinput={"17rem"}
              $inputvalid={passwordInputHasError}
              type="password"
              id="password"
              name="password"
              placeholder="Senha"
              onChange={combinedPasswordChangeHandler}
              onBlur={passwordBlurHandler}
              value={enteredPassword}
            ></C.Input>
            {passwordInputHasError && (
              <C.AlertError>Senha inválido</C.AlertError>
            )}
            <C.Input
              $widthinput={"21rem"}
              $margintop={"1rem"}
              $widthmobileinput={"17rem"}
              $inputvalid={nameInputHasError}
              type="text"
              id="name"
              name="name"
              placeholder="Nome"
              onChange={combinedNameChangeHandler}
              onBlur={nameBlurHandler}
              value={enteredName}
            ></C.Input>
            {nameInputHasError && <C.AlertError>Nome inválido</C.AlertError>}
            <C.AreaInputs>
              <div>
                <C.Input
                  $widthinput={"10rem"}
                  $margintop={"1rem"}
                  $widthmobileinput={"8rem"}
                  $inputvalid={birthdayInputHasError}
                  type="text"
                  id="birthday"
                  name="birthday"
                  placeholder="Nascimento"
                  onChange={combinedBirthChangeHandler}
                  onBlur={birthdayBlurHandler}
                  value={enteredBirthday}
                ></C.Input>
                {birthdayInputHasError ? (
                  <C.AlertError>Nascimento inválido</C.AlertError>
                ) : (
                  <C.DateFormat>DDD/MM/AAAA</C.DateFormat>
                )}
              </div>
              <div>
                <C.Input
                  $widthinput={"10rem"}
                  $margintop={"1rem"}
                  $widthmobileinput={"8rem"}
                  $inputvalid={professionInputHasError}
                  type="text"
                  id="profession"
                  name="profession"
                  placeholder="Profissão"
                  onChange={combinedJobChangeHandler}
                  onBlur={professionBlurHandler}
                  value={enteredProfession}
                ></C.Input>
                {professionInputHasError && (
                  <C.AlertError>Profissão inválido</C.AlertError>
                )}
              </div>
            </C.AreaInputs>
            <C.AreaInputs>
              <div>
                <C.Input
                  $widthinput={"10rem"}
                  $margintop={"1rem"}
                  $widthmobileinput={"8rem"}
                  $inputvalid={countryInputHasError}
                  type="text"
                  id="country"
                  name="country"
                  placeholder="País"
                  onChange={combinedCountryChangeHandler}
                  onBlur={countryBlurHandler}
                  value={enteredCountry}
                ></C.Input>
                {countryInputHasError && (
                  <C.AlertError>País inválido</C.AlertError>
                )}
              </div>
              <div>
                <C.Input
                  $widthinput={"10rem"}
                  $margintop={"1rem"}
                  $widthmobileinput={"8rem"}
                  $inputvalid={cityInputHasError}
                  type="text"
                  id="city"
                  name="city"
                  placeholder="Cidade"
                  onChange={combinedCityChangeHandler}
                  onBlur={cityBlurHandler}
                  value={enteredCity}
                ></C.Input>
                {cityInputHasError && (
                  <C.AlertError>Cidade inválida</C.AlertError>
                )}
              </div>
            </C.AreaInputs>
            <C.FieldSelect>
              <C.AreaSelect onClick={() => setOptions(!options)}>
                <C.Select
                  onChange={professionChangeHandler}
                  onBlur={professionBlurHandler}
                >
                  {selectValue === "" ? "Relacionamento" : selectValue}
                </C.Select>
                <C.Arrowimg src={Arrow} alt="caretdown" />

                {options && (
                  <C.AreaOptions>
                    {Options.map((option, index, Options) => (
                      <div key={index}>
                        <C.Option
                          onClick={() => {
                            setSelecValue(option.name);
                            setData((prevData) => ({
                              ...prevData,
                              relationship: option.name,
                              selectField: option._id,
                            }));
                          }}
                        >
                          {option.name}
                        </C.Option>
                        {index !== Options.length - 1 && (
                          <C.LineOption></C.LineOption>
                        )}
                      </div>
                    ))}
                  </C.AreaOptions>
                )}
              </C.AreaSelect>
            </C.FieldSelect>
            <C.StyledLink to={formIsValid ? "/profile" : "/signup"}>
              <C.Button onClick={combinedFormSubmissionHandler}>
                Criar conta
              </C.Button>
            </C.StyledLink>
          </div>
        </C.Card>
      </C.Container>
      <Footer />
    </>
  );
};

export default SignUp;
