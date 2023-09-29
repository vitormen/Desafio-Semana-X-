import Navbar from "../../components/navbar";
import UserImage from "../../assets/User.png";
import * as C from "./styles";
import Arrow from "../../assets/CaretDown.png";
import { useState, useEffect } from "react";
import Logo from "../../assets/ps_orkut.png";
import Mode_edit from "../../assets/Mode_edit.png";
import { set } from "date-fns";

const Profile = () => {
  const [selectValue, setSelecValue] = useState<String>("");
  const [options, setOptions] = useState<Boolean>(false);

  const [informations, setinformations] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [job, setJob] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  const Options = [
    { _id: "1", name: "Solteiro" },
    { _id: "2", name: "Casado" },
    { _id: "3", name: "Divorciado" },
    { _id: "4", name: "Namorando" },
    { _id: "5", name: "Preocupado" },
  ];

  useEffect(() => {
    fetch("http://localhost:3000/informations")
      .then((response) => response.json())
      .then((data) => {
        setinformations(data[0]);
        setEmail(data[0].email);
        setPassword(data[0].password);
        setName(data[0].name);
        setBirth(data[0].birth);
        setJob(data[0].job);
        setCountry(data[0].country);
        setCity(data[0].city);
        setSelecValue(data[0].selectField);
      })
      .catch((error) => console.error("Erro:", error));
  }, []);

  function updateInformation() {
    const updatedInformatio = {
      ...informations,
      email: email,
      password: password,
      name: name,
      birth: birth,
      job: job,
      country: country,
      city: city,
      selectField: selectValue,
    };

    fetch("http://localhost:3000/informations/1", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedInformatio),
    })
      .then((response) => response.json())
      .then((data) => {
        setinformations(data);
        console.log("Sucesso:", data);
      })
      .catch((error) => {
        console.error("Erro:", error);
      });
  }

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
              <C.ModeEdit>
                <img src={Mode_edit}></img>
              </C.ModeEdit>
            </C.divImg>
          </C.LeftProfile>
        </C.EditsAndLeftProfile>
        <C.CenterProfile>
          <C.logo src={Logo} className="hide-on-descktop" />
          <C.title>Editar informações</C.title>
          <C.DivInpuSelect>
            <C.divInput>
              <C.Input
                $widthinput={"13.4375rem"}
                $margintop={"0rem"}
                type="text"
                id="Profession"
                name="Profession"
                placeholder="Profissão"
                value={job}
                onChange={(e) => setJob(e.target.value)}
              ></C.Input>
              <C.AreaSelect
                onClick={() => setOptions(!options)}
                className="show-on-mobile"
              >
                <C.Select>
                  {selectValue === ""
                    ? "Relacionamento"
                    : selectValue &&
                      Options.find((option) => option._id === selectValue)
                        ?.name}
                </C.Select>
                <C.Arrowimg src={Arrow} alt="caretdown" />
                {options && (
                  <C.AreaOptions>
                    {Options.map((option, index, Options) => (
                      <div key={index}>
                        <C.Option onClick={() => setSelecValue(option._id)}>
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
                $widthinput={"13.4375rem"}
                $margintop={"1.19rem"}
                type="text"
                id="Name"
                name="Name"
                placeholder="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></C.Input>
              <C.Input
                $widthinput={"13.4375rem"}
                $margintop={"1.25rem"}
                type="text"
                id="City"
                name="City"
                placeholder="Cidade"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              ></C.Input>
              <C.DivMobile>
                <C.Input
                  $widthinput={"7.8125rem"}
                  $margintop={"1.5rem"}
                  type="text"
                  id="Country"
                  name="Country"
                  placeholder="País"
                  className="on-mobile"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                ></C.Input>

                <C.Input
                  $widthinput={"7.8125rem"}
                  $margintop={"1.5rem"}
                  id="Date"
                  name="Date"
                  placeholder="DD/MM/AAA"
                  className="on-mobile"
                  value={birth}
                  onChange={(e) => setBirth(e.target.value)}
                ></C.Input>

                <C.Input
                  $widthinput={"13.8125rem"}
                  $margintop={"1.5rem"}
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Senha"
                  className="on-mobile"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></C.Input>

                <C.Input
                  $widthinput={"13.8125rem"}
                  $margintop={"1.5rem"}
                  type="password"
                  id="repeatPassword"
                  name="repeatPassword"
                  placeholder="Repetir senha"
                  className="on-mobile"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></C.Input>
              </C.DivMobile>
            </C.divInput>

            <C.divSelect>
              <C.AreaSelect
                onClick={() => setOptions(!options)}
                className="hide-on-mobile"
              >
                <C.Select>
                  {selectValue === ""
                    ? "Relacionamento"
                    : selectValue &&
                      Options.find((option) => option._id === selectValue)
                        ?.name}
                </C.Select>
                <C.Arrowimg src={Arrow} alt="caretdown" />
                {options && (
                  <C.AreaOptions>
                    {Options.map((option, index, Options) => (
                      <div key={index}>
                        <C.Option onClick={() => setSelecValue(option._id)}>
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
              <C.Button1 onClick={updateInformation}>Salvar</C.Button1>
            </C.StyledLink>
          </C.DivButton>
        </C.CenterProfile>
      </C.DivCenter>
    </>
  );
};

export default Profile;
