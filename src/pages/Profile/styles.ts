import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`;

export const DivCenter = styled.div`
  box-sizing: border-box;
  padding: 0 22rem;
  margin-top: 5rem;
  display: flex;
  align-items: flex-start;
`;

export const LeftProfile = styled.div`
  width: 17.5rem;
  height: 20.3125rem;
  border-radius: 1rem;
  background: #fdfeff;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const divImg = styled.div`
  width: 11.5rem;
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
  width: 10.625rem;
  height: 10.625rem;
  margin-bottom: 0rem;
`;

export const name = styled.p`
  color: #4b4b4b;
  font-size: 1.5rem;
  margin-bottom: 0rem;
  margin-top: 1.19rem;
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
  height: 3.5rem;
  border-radius: 1rem;
  background: #fdfeff;
  margin-top: 1.94rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EditProfile = styled.p`
  color: #ed6d25;
  font-size: 1.125rem;
  cursor: pointer;
`;

export const EditsAndLeftProfile = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CenterProfile = styled.div`
  width: 37rem;
  // height: 53.375rem;
  border-radius: 1rem;
  background: #fdfeff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin: 0 2rem;
`;

export const FriendsAndComunity = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RightFriends = styled.div`
  width: 17.5rem;
  // height: 25.6875rem;
  border-radius: 1rem;
  background: #fdfeff;
  margin-bottom: 2rem;
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
  justify-content: space-between;
  margin: 0 1.6em;
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
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 6.25rem;
  margin-bottom: 0rem;
`;

export const ComunityImage = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 0.75rem;
  margin-bottom: 0rem;
`;
