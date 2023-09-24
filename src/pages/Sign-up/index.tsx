import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Logo from "../../assets/ps_orkut.png";
import Banner from "../../components/homepageImg";
import Arrow from "../../assets/CaretDown.png";
import * as C from "./styles";

import { useState } from "react";

const SignUp = () => {
  const [selectValue, setSelecValue] = useState<String>("");
  const [options, setOptions] = useState<Boolean>(false);
  const [date, setDate] = useState("");

  const Options = [
    { _id: "1", name: "Solteiro" },
    { _id: "2", name: "Casado" },
    { _id: "3", name: "Divorciado" },
    { _id: "4", name: "Namorando" },
    { _id: "5", name: "Preocupado" },
  ];
  const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newData = e.target.value;
    if (
      (newData.length == 2 || newData.length == 5) &&
      newData.length > date.length
    ) {
      newData += "/";
    }
    if (newData.length <= 10) {
      setDate(newData);
    }
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
          <C.Input
            $widthinput="21rem"
            $margintop="0.69rem"
            $widthmobileinput={"17.5625rem"}
            type="email"
            id="email"
            name="email"
            placeholder="E-mail"
          ></C.Input>
          <C.Input
            $widthinput="21rem"
            $margintop="1.5rem"
            $widthmobileinput={"17.5625rem"}
            type="password"
            id="password"
            name="password"
            placeholder="Senha"
          ></C.Input>
          <C.Input
            $widthinput="21rem"
            $margintop="1rem"
            $widthmobileinput={"17.0625rem"}
            type="text"
            id="name"
            name="name"
            placeholder="Nome"
          ></C.Input>
          <C.AreaInputs>
            <C.Input
              $widthinput="7.8125rem"
              $margintop="1rem"
              type="text"
              id="birthday"
              name="birthday"
              placeholder="Nascimento"
              onChange={handleData}
              value={date}
            ></C.Input>
            <C.Input
              $widthinput="11.5rem"
              $margintop="1rem"
              $widthmobileinput={"8.5625rem"}
              type="text"
              id="profession"
              name="profession"
              placeholder="Profissão"
            ></C.Input>
          </C.AreaInputs>
          <C.AreaInputs>
            <C.Input
               $widthinput="7.8125rem"
               $margintop="1.31rem"
              type="text"
              id="country"
              name="country"
              placeholder="País"
            ></C.Input>
            <C.Input
               $widthinput="11.5rem"
               $margintop="1.31rem"
               $widthmobileinput={"8.5625rem"}
              type="text"
              id="city"
              name="city"
              placeholder="Cidade"
            ></C.Input>
          </C.AreaInputs>

          <C.FieldSelect>
            <C.AreaSelect onClick={() => setOptions(!options)}>
              <C.Select>
                {selectValue === "" ? "Relacionamento" : selectValue}
              </C.Select>
              <C.Arrowimg src={Arrow} alt="caretdown" />
              {options && (
                <C.AreaOptions>
                  {Options.map((option, index, Options) => (
                    <div key={index}>
                      <C.Option onClick={() => setSelecValue(option.name)}>
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
        

          <C.StyledLink to="/">
            <C.Button>Criar conta</C.Button>
          </C.StyledLink>
        </C.Card>
      </C.Container>
      <Footer />
    </>
  );
};

export default SignUp;
