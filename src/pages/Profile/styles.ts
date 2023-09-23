import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { AiOutlineStar, AiOutlineHeart } from "react-icons/ai";
import { GoSmiley } from "react-icons/go";
import { FiThumbsUp } from "react-icons/fi";

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`;

export const DivCenter = styled.div`
  box-sizing: border-box;
  padding: 0 22rem;
  margin-top: 3rem;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

//------DO NOME COM IMAGEM E EDITAR PERFIL--------

export const LeftProfile = styled.div`
  max-width: 17.5rem;
  border-radius: 1rem;
  background: #fdfeff;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    min-width: 20rem;
  }
`;

export const divImg = styled.div`
  max-width: 11.5rem;
  flex-shrink: 0;
  stroke-width: 3px;
  border: 3px solid #ed6d25;
  margin-top: 1.06rem;
  border-radius: 6.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserImage = styled.img`
  border-radius: 6.25rem;
  max-width: 10.625rem;
  margin-bottom: 0rem;

  @media (max-width: 768px) {
    width: 7.75rem;
  }
`;

export const name = styled.p`
  color: #4b4b4b;
  font-size: 1.5rem;
  margin-bottom: 0rem;
  margin-top: 1.19rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const MaritalStatus = styled.p`
  color: #4b4b4b;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 133.333% */
`;

export const DivEditProfile = styled.div`
  width: 17.5rem;
  border-radius: 1rem;
  background: #fdfeff;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    min-width: 20rem;
  }
`;

export const EditProfile = styled.p`
  color: #ed6d25;
  font-size: 1.125rem;
  cursor: pointer;
`;

export const EditsAndLeftProfile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.94rem;
`;

//------DO NOME COM IMAGEM E EDITAR PERFIL--------

//------DIV CENTRAL--------

export const CenterProfile = styled.div`
  max-width: 37rem;
  width: 100%;
  border-radius: 1rem;
  background: #fdfeff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  padding: 0 1.5rem;
  flex-direction: column;

  @media (max-width: 768px) {
    min-width: 20rem;
  }
`;

export const DivTopProfile = styled.div``;

export const FirstPhrase = styled.p`
  color: #4b4b4b;
  font-size: 1.625rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const DivSecondPhrase = styled.div`
  max-width: 34rem;
  width: 100%;
  border-radius: 0.625rem;
  background: #eff3f8;

  padding: 0 0.5rem;

  display: flex;
  align-items: center;
`;

export const SecondPhrase = styled.p`
  color: #4b4b4b;
  font-size: 1.125rem;
  margin: 0.75rem 0;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

export const DivMiddleProfile = styled.div``;

export const EmojisProfile = styled.div`
  display: flex;
  margin-top: 2rem;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const EmojisNameImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  border: 1px solid #fdfeff;
`;

export const SubTitle = styled.p`
  color: #4b4b4b;
  font-size: 1rem;
  margin: 0rem;
`;

export const EmojisName = styled.p`
  color: #4b4b4b;
  font-size: 1rem;
  margin: 0 0 0.5rem 0;
`;

export const Emojis = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const YellowStar = styled(AiOutlineStar)`
  color: #facf41;
  width: 1.5rem;
  height: 1.5rem;

  margin-right: 0.37rem;
`;

export const Heart = styled(AiOutlineHeart)`
  color: #ed2590;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.37rem;
`;

export const Smiley = styled(GoSmiley)`
  color: #facf41;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.37rem;
`;

export const Like = styled(FiThumbsUp)`
  color: #26caff;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.37rem;
`;

export const AboutYou = styled.div`
  margin-top: 2rem;
`;

export const DivAboutYou = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const AboutYouTitle = styled.p`
  color: #b4aeae;
  font-size: 1rem;
  margin: 0 0.31rem 0 0;
`;

export const AboutYouSubTitle = styled.p`
  color: #4b4b4b;
  font-size: 1rem;
  margin: 0 0.31rem 1.5rem 0;
`;

export const DivPreferences = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Preferences = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 1rem;
`;

export const NamePreferences = styled.p`
  color: #b4aeae;
  font-size: 1rem;
  margin: 0 0.75rem 0 0;
`;

export const TypesPrefences = styled.div`
  height: 1.75rem;
  display: inline-flex;
  padding: 0.125rem 1rem;
  align-items: center;
  border-radius: 1.875rem;
  border: 1px solid #ed6d25;
  margin-right: 0.88rem;
`;

export const NameTypesPreferences = styled.p`
  color: #4b4b4b;
  font-size: 0.875rem;
  line-height: 1.5rem; /* 171.429% */
`;

export const PreferencesSeeAll = styled.p`
  color: #ed6d25;
  font-size: 0.875rem;
  line-height: 1.5rem; /* 171.429% */
  margin: 0;
`;

//------DIV CENTRAL--------

//------DIV DE AMIGOS E COMUNIDADES--------

export const FriendsAndComunity = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const RightFriends = styled.div`
  max-width: 17.5rem;
  border-radius: 1rem;
  background: #fdfeff;
  @media (max-width: 768px) {
    min-width: 20rem;
  }
`;

export const RightFriendsTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1.6rem;
`;

export const TitleFriends = styled.p`
  color: #4b4b4b;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 150% */
  margin-bottom: 2rem;
`;

export const SeeAll = styled.p`
  color: #ed6d25;
  font-size: 0.875rem;
  line-height: 1.5rem; /* 171.429% */
  cursor: pointer;
`;

export const DivFriends = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 2.8rem;
  justify-content: center;
`;

export const FriendsNameImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  border: 1px solid #fdfeff;
`;

export const FriendsName = styled.p`
  color: #4b4b4b;
  font-size: 0.875rem;
  margin-top: 0.5rem;
  margin-bottom: 0rem;
`;
export const FriendsImage = styled.img`
  max-width: 3.5rem;
  border-radius: 6.25rem;
  margin-bottom: 0rem;
`;

export const ComunityImage = styled.img`
  max-width: 3.5rem;

  border-radius: 0.75rem;
  margin-bottom: 0rem;
`;
//------DIV DE AMIGOS E COMUNIDADES--------
