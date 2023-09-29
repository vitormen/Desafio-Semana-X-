import styled from "styled-components";
import { NavLink } from "react-router-dom";

type mobileProps = {
  $mobileLoggedOut?: boolean;
  $moblieProfile?: boolean;
  $mobileUserEdit?: boolean;
};

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`;

export const Nav = styled.div<mobileProps>`
  height: 5.75rem;
  background: #fdfeff;
  display: flex;
  overflow: hidden;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: ${(props) =>
      props.$mobileLoggedOut
        ? "center"
        : props.$moblieProfile
        ? ""
        : props.$mobileUserEdit
        ? "center"
        : "start"};
    padding: 0 2rem 0 2rem;
    height: 3.75rem;
    column-gap: 24vw;
  }
`;

export const MenuLeft = styled.div`
  display: flex;
  align-items: center;
`;
export const MenuRight = styled.div`
  display: flex;
  align-items: center;
`;
export const LogoText = styled.h1`
  color: #ed6d25;
  font-size: 2.25rem;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const Link = styled.p`
  color: #4b4b4b;
  font-size: 1.125rem;
  font-weight: 400;
  margin-left: 57.81rem;
`;

export const MenuOptions = styled.div`
    display: flex;
    width: 21.1rem
    margin-left: 2.13rem;

    &.hide-on-mobile {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

type OptionProps = {
  color: string;
};

export const Option = styled.p<OptionProps>`
  color: ${(props) => props.color};

  font-size: 1.125rem;
  margin-left: 2.31rem;
  cursor: pointer;
`;

export const Search = styled.div`
  width: 22.1875rem;
  border-radius: 0.5rem;
  background: #eff3f8;
  color: #b4aeae;
  font-size: 1rem;
  padding: 0.62rem 0.94rem;
  margin-left: 8.87rem;
  display: flex;
  align-items: center;
  color: #b4aeae;

  @media (max-width: 768px) {
    margin: 0;
  }

  &.hide-on-mobile {
    @media (max-width: 768px) {
      display: none;
    }
`;
export const ImageSearch = styled.img`
  width: 1.5rem;
  height: 1.49863rem;
  @media (max-width: 768px) {
    width: 1rem;
    height: 0.99906rem;
  }
`;
export const SearchInput = styled.input`
  width: 100%;
  border: none;
  background: #eff3f8;
  color: #b4aeae;
  font-size: 1rem;
  padding-left: 0.75rem;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #b4aeae;
  }
`;

export const User = styled.div<mobileProps>`
  display: flex;
  align-items: center;
  margin-left: 0.87rem;
  @media (max-width: 768px){
    display: ${(props) =>
      props.$moblieProfile && props.$mobileUserEdit ? "block" : "none"};
  }
  p {
    margin-right: 0.25rem;

    &.hide-on-mobile {
    @media (max-width: 768px) {
      display: none;
    }
  }

    
`;

export const UserImage = styled.img`
  width: 2.5rem;
  height: 2rem;
  border-radius: 6.25rem;
  margin-right: 0.81rem;
  @media (max-width: 768px) {
    margin: 0;
    width: 1.5rem;
    height: 1.5rem;
  }
`;
