import Navbar from "../../components/navbar";
import UserImage from "../../assets/User.png";
import * as C from "./styles";
import Arrow from "../../assets/CaretDown.png";
import { useState } from "react";
import Logo from "../../assets/ps_orkut.png";

const Profile = () => {
  const [selectValue, setSelecValue] = useState<String>("");
  const [options, setOptions] = useState<Boolean>(false);

  const Options = [
    { _id: "1", name: "Solteiro" },
    { _id: "2", name: "Casado" },
    { _id: "3", name: "Divorciado" },
    { _id: "4", name: "Namorando" },
    { _id: "5", name: "Preocupado" },
  ];
  return (
    <>
      <Navbar
        thereIsLoggedOut={false}
        thereIsProfile={false}
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
          <C.logo src={Logo} className="hide-on-descktop" />
          <C.title>Editar informações</C.title>
          <C.DivInpuSelect>
            <C.divInput>
              <C.Input
                widthButton={"13.4375rem"}
                marginTop={"0rem"}
                type="text"
                id="Name"
                name="Name"
                placeholder="Profissão"
              ></C.Input>

              <C.AreaSelect
                onClick={() => setOptions(!options)}
                className="show-on-mobile"
              >
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

              <C.Input
                widthButton={"13.4375rem"}
                marginTop={"1.19rem"}
                type="text"
                id="Name"
                name="Name"
                placeholder="Nome"
              ></C.Input>

              <C.Input
                widthButton={"13.4375rem"}
                marginTop={"1.25rem"}
                type="text"
                id="City"
                name="City"
                placeholder="Cidade"
              ></C.Input>
              <C.DivMobile>
                <C.Input
                  widthButton={"7.8125rem"}
                  marginTop={"1.5rem"}
                  type="text"
                  id="Country"
                  name="Country"
                  placeholder="País"
                  className="on-mobile"
                ></C.Input>

                <C.Input
                  widthButton={"7.8125rem"}
                  marginTop={"1.5rem"}
                  id="Date"
                  name="Date"
                  placeholder="DD/MM/AAA"
                  className="on-mobile"
                ></C.Input>

                <C.Input
                  widthButton={"13.8125rem"}
                  marginTop={"1.5rem"}
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Senha"
                  className="on-mobile"
                ></C.Input>

                <C.Input
                  widthButton={"13.8125rem"}
                  marginTop={"1.5rem"}
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Repetir senha"
                  className="on-mobile"
                ></C.Input>
              </C.DivMobile>
            </C.divInput>

            <C.divSelect>
              <C.AreaSelect
                onClick={() => setOptions(!options)}
                className="hide-on-mobile"
              >
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
            </C.divSelect>
          </C.DivInpuSelect>

          <C.DivButton>
            <C.StyledLink to="/profile">
              <C.Button1>Salvar</C.Button1>
            </C.StyledLink>
          </C.DivButton>
        </C.CenterProfile>
      </C.DivCenter>
    </>
  );
};

export default Profile;
