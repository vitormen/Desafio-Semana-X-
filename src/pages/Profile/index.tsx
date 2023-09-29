import Navbar from "../../components/navbar";
import UserImage from "../../assets/User.png";
import Search from "../../assets/Search.png";
import { useState, useEffect } from "react";

import Fernando from "../../assets/Fernando.png";
import Ana from "../../assets/Ana.png";
import Carlos from "../../assets/Carlos.png";
import Vitor from "../../assets/Vitor.png";
import Matheus from "../../assets/Matheus.png";
import Ramos from "../../assets/Ramos.png";
import Eiji from "../../assets/Eiji.png";
import Julia from "../../assets/Julia.png";
import Carol from "../../assets/Carol.png";

import Carros from "../../assets/Carros.png";
import Desenhos from "../../assets/Desenhos.png";
import Crazy from "../../assets/Crazy.png";
import Fofos from "../../assets/Fofos.png";
import Animes from "../../assets/Animes.png";
import Leitura from "../../assets/Leitura.png";
import MeuOvo from "../../assets/MeuOvo.png";
import MyBooks from "../../assets/MyBooks.png";
import Cafeee from "../../assets/Cafeee.png";

import * as C from "./styles";

const Profile = () => {
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [job, setJob] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [relationship, setRelationship] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/informations")
      .then((response) => response.json())
      .then((data) => {
        setName(data[0].name);
        setBirth(data[0].birth);
        setJob(data[0].job);
        setCountry(data[0].country);
        setCity(data[0].city);
        setRelationship(data[0].relationship);
      })
      .catch((error) => console.error("Erro:", error));
  }, []);

  var meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  let date = new Date();
  let arrData = birth.split("/");

  let idade: number | string = date.getFullYear() - parseInt(arrData[2]);
  if (isNaN(idade)) {
    idade = "Idade não disponível";
  }

  let dia: number | string = arrData[1];
  let Aniversário: number | string = dia + " de " + meses[date.getMonth()];

  let agora = new Date();
  let hora = agora.getHours();
  let saudacao;

  if (hora < 12) {
    saudacao = "Bom dia";
  } else if (hora < 18) {
    saudacao = "Boa tarde";
  } else {
    saudacao = "Boa noite";
  }

  return (
    <>
      <Navbar
        thereIsLoggedOut={false}
        thereIsProfile={true}
        thereIsUserEdit={true}
      />

      <C.DivCenter>
        <C.Search className="hide-on-mobile">
          <C.ImageSearch src={Search} alt="search"></C.ImageSearch>
          <C.SearchInput
            type="text"
            id="search"
            name="search"
            placeholder="Pesquisar no UOLkut"
          ></C.SearchInput>
        </C.Search>
        <C.EditsAndLeftProfile>
          <C.LeftProfile>
            <C.divImg>
              <C.UserImage src={UserImage}></C.UserImage>
            </C.divImg>
            <C.name>{name}</C.name>
            <C.MaritalStatus>
              {relationship}, {country}
            </C.MaritalStatus>
          </C.LeftProfile>

          <C.DivEditProfile>
            <C.StyledLink to="/edit">
              <C.EditProfile>Editar meu perfil</C.EditProfile>
            </C.StyledLink>
          </C.DivEditProfile>
        </C.EditsAndLeftProfile>

        <C.CenterProfile>
          <C.FirstPhrase>
            {saudacao}, {name} !
          </C.FirstPhrase>

          <C.SecondPhrase>
            Programar sem café é igual poeta sem poesia.
          </C.SecondPhrase>

          <C.EmojisProfile>
            <C.EmojisNameImg>
              <C.EmojisName>Fãs</C.EmojisName>
              <C.Emojis>
                <C.YellowStar></C.YellowStar>
                <C.SubTitle>85</C.SubTitle>
              </C.Emojis>
            </C.EmojisNameImg>

            <C.EmojisNameImg>
              <C.EmojisName>Confiável</C.EmojisName>
              <C.Emojis>
                <C.Smiley></C.Smiley>
                <C.Smiley></C.Smiley>
              </C.Emojis>
            </C.EmojisNameImg>

            <C.EmojisNameImg>
              <C.EmojisName>Legal</C.EmojisName>
              <C.Emojis>
                <C.Like></C.Like>
                <C.Like></C.Like>
                <C.Like></C.Like>
              </C.Emojis>
            </C.EmojisNameImg>

            <C.EmojisNameImg>
              <C.EmojisName>Sexy</C.EmojisName>
              <C.Emojis>
                <C.Heart></C.Heart>
                <C.Heart></C.Heart>
              </C.Emojis>
            </C.EmojisNameImg>
          </C.EmojisProfile>

          <C.AboutYou>
            <C.DivAboutYou>
              <C.AboutYouTitle>Relacionamento:</C.AboutYouTitle>
              <C.AboutYouSubTitle>Solteiro</C.AboutYouSubTitle>
            </C.DivAboutYou>

            <C.DivAboutYou>
              <C.AboutYouTitle>Aniversário:</C.AboutYouTitle>
              <C.AboutYouSubTitle>{Aniversário}</C.AboutYouSubTitle>
            </C.DivAboutYou>

            <C.DivAboutYou>
              <C.AboutYouTitle>Idade:</C.AboutYouTitle>
              <C.AboutYouSubTitle>{idade}</C.AboutYouSubTitle>
            </C.DivAboutYou>

            <C.DivAboutYou>
              <C.AboutYouTitle>Quem sou eu:</C.AboutYouTitle>
              <C.AboutYouSubTitle>{job}</C.AboutYouSubTitle>
            </C.DivAboutYou>

            <C.DivAboutYou>
              <C.AboutYouTitle>Moro:</C.AboutYouTitle>
              <C.AboutYouSubTitle>Guaratã</C.AboutYouSubTitle>
            </C.DivAboutYou>

            <C.DivAboutYou>
              <C.AboutYouTitle>País:</C.AboutYouTitle>
              <C.AboutYouSubTitle>{country}</C.AboutYouSubTitle>
            </C.DivAboutYou>

            <C.DivAboutYou>
              <C.AboutYouTitle>Cidade:</C.AboutYouTitle>
              <C.AboutYouSubTitle>{city}</C.AboutYouSubTitle>
            </C.DivAboutYou>
          </C.AboutYou>

          <C.DivPreferences>
            <C.Preferences>
              <C.NamePreferences>Musicas:</C.NamePreferences>
              <C.TypesPrefences>
                <C.NameTypesPreferences>Trap</C.NameTypesPreferences>
              </C.TypesPrefences>
              <C.TypesPrefences className="hide-on-mobile">
                <C.NameTypesPreferences>Rap</C.NameTypesPreferences>
              </C.TypesPrefences>
              <C.TypesPrefences className="hide-on-mobile">
                <C.NameTypesPreferences>Indie</C.NameTypesPreferences>
              </C.TypesPrefences>
              <C.PreferencesSeeAll>Ver Todos</C.PreferencesSeeAll>
            </C.Preferences>

            <C.Preferences style={{ marginBottom: "1.75rem" }}>
              <C.NamePreferences>Filmes:</C.NamePreferences>
              <C.TypesPrefences>
                <C.NameTypesPreferences>A rede social</C.NameTypesPreferences>
              </C.TypesPrefences>
              <C.TypesPrefences className="hide-on-mobile">
                <C.NameTypesPreferences>
                  Meu amigo totoro
                </C.NameTypesPreferences>
              </C.TypesPrefences>
              <C.PreferencesSeeAll>Ver Todos</C.PreferencesSeeAll>
            </C.Preferences>
          </C.DivPreferences>
        </C.CenterProfile>

        <C.FriendsAndComunity>
          <C.RightFriends>
            <C.RightFriendsTitle>
              <C.TitleFriends>Amigos (248)</C.TitleFriends>
              <C.SeeAll>Ver Todos</C.SeeAll>
            </C.RightFriendsTitle>

            <C.DivFriends>
              <C.FriendsNameImg>
                <C.FriendsImage src={Fernando}></C.FriendsImage>
                <C.FriendsName>Fernando</C.FriendsName>
              </C.FriendsNameImg>

              <C.FriendsNameImg>
                <C.FriendsImage src={Ana}></C.FriendsImage>
                <C.FriendsName>Ana</C.FriendsName>
              </C.FriendsNameImg>

              <C.FriendsNameImg>
                <C.FriendsImage src={Carlos}></C.FriendsImage>
                <C.FriendsName>Carlos</C.FriendsName>
              </C.FriendsNameImg>

              <C.FriendsNameImg>
                <C.FriendsImage src={Vitor}></C.FriendsImage>
                <C.FriendsName>Carlos</C.FriendsName>
              </C.FriendsNameImg>

              <C.FriendsNameImg>
                <C.FriendsImage src={Matheus}></C.FriendsImage>
                <C.FriendsName>Vitor</C.FriendsName>
              </C.FriendsNameImg>

              <C.FriendsNameImg>
                <C.FriendsImage src={Ramos}></C.FriendsImage>
                <C.FriendsName>Matheus</C.FriendsName>
              </C.FriendsNameImg>

              <C.FriendsNameImg>
                <C.FriendsImage src={Eiji}></C.FriendsImage>
                <C.FriendsName>Ramos</C.FriendsName>
              </C.FriendsNameImg>

              <C.FriendsNameImg>
                <C.FriendsImage src={Julia}></C.FriendsImage>
                <C.FriendsName>Eiji</C.FriendsName>
              </C.FriendsNameImg>

              <C.FriendsNameImg>
                <C.FriendsImage src={Carol}></C.FriendsImage>
                <C.FriendsName>Carol</C.FriendsName>
              </C.FriendsNameImg>
            </C.DivFriends>
          </C.RightFriends>

          <C.RightFriends>
            <C.RightFriendsTitle>
              <C.TitleFriends>Comunidades (42)</C.TitleFriends>
              <C.SeeAll>Ver Todos</C.SeeAll>
            </C.RightFriendsTitle>

            <C.DivFriends>
              <C.FriendsNameImg>
                <C.ComunityImage src={Carros}></C.ComunityImage>
                <C.FriendsName>Carros</C.FriendsName>
              </C.FriendsNameImg>

              <C.FriendsNameImg>
                <C.ComunityImage src={Desenhos}></C.ComunityImage>
                <C.FriendsName>Desenhos</C.FriendsName>
              </C.FriendsNameImg>

              <C.FriendsNameImg>
                <C.ComunityImage src={Crazy}></C.ComunityImage>
                <C.FriendsName>Crazy</C.FriendsName>
              </C.FriendsNameImg>

              <C.FriendsNameImg>
                <C.ComunityImage src={Fofos}></C.ComunityImage>
                <C.FriendsName>Fofos</C.FriendsName>
              </C.FriendsNameImg>

              <C.FriendsNameImg>
                <C.ComunityImage src={Animes}></C.ComunityImage>
                <C.FriendsName>Animes</C.FriendsName>
              </C.FriendsNameImg>

              <C.FriendsNameImg>
                <C.ComunityImage src={Leitura}></C.ComunityImage>
                <C.FriendsName>Leitura</C.FriendsName>
              </C.FriendsNameImg>

              <C.FriendsNameImg>
                <C.ComunityImage src={MeuOvo}></C.ComunityImage>
                <C.FriendsName>Meu Ovo</C.FriendsName>
              </C.FriendsNameImg>

              <C.FriendsNameImg>
                <C.ComunityImage src={MyBooks}></C.ComunityImage>
                <C.FriendsName>My Books</C.FriendsName>
              </C.FriendsNameImg>

              <C.FriendsNameImg>
                <C.ComunityImage src={Cafeee}></C.ComunityImage>
                <C.FriendsName>Cafeee</C.FriendsName>
              </C.FriendsNameImg>
            </C.DivFriends>
          </C.RightFriends>
        </C.FriendsAndComunity>
      </C.DivCenter>
    </>
  );
};

export default Profile;
