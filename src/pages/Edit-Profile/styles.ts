import styled from "styled-components";

import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const DivCenter = styled.div`
  box-sizing: border-box;
  // margin: 5.5rem 22rem 0 22rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5rem;
  padding-bottom: 5rem;
  margin-top: 5rem;

  @media (max-width: 768px) {
    margin: 0;
    align-items: center;
    flex-direction: column;
  }
`;

export const LeftProfile = styled.div`
  width: 17.5rem;
  height: 20.3125rem;
  border-radius: 1rem;
  background: #fdfeff;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const divImg = styled.div`
  width: 11.5rem;
  flex-shrink: 0;
  stroke-width: 3px;
  border: 3px solid #ed6d25;
  margin-top: 4.44rem;
  border-radius: 6.25rem;
  position: relative;
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

export const EditsAndLeftProfile = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CenterProfile = styled.div`
  width: 37rem;
  //height: 53.375rem;
  border-radius: 1rem;
  background: #fdfeff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // padding: 2rem 3.69rem 6.44rem 2.88rem;

  @media (max-width: 768px) {
    width: 20rem;
    padding: 0.62rem 0rem 0rem 0rem;
    width: 100%;
    max-width: 20rem;
  }
`;
export const logo = styled.img`
  &.hide-on-descktop {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;

export const DivButton = styled.div`
  display: flex;
  margin-bottom: 6.61rem;
  @media (max-width: 768px) {
    align-items: end;
    margin-bottom: 4.3rem;
  }
`;

export const title = styled.h1`
  color: #ed6d25;

  font-size: 2.25rem;
  letter-spacing: 0.1875rem;
  text-align: center;
  margin: 2rem 0 5.75rem 0;

  @media (max-width: 768px) {
    color: #ed6d25;
    font-family: Roboto Flex;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    margin: 0.5rem 0 2.19rem 0;
  }
`;
type inputprops = {
  $widthinput: string;
  $margintop: string;
  $imgInput?: string;
};

export const DivInpuSelect = styled.div`
  display: flex;
`;

export const divSelect = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 6.63rem;
  @media (max-width: 768px) {
    margin: 0;
  }
`;
export const AreaSelect = styled.div`
  position: relative;
  width: 11.3125rem;
  padding: 0.44rem 0rem 0.56rem 0.56rem;
  border-radius: 0.5rem;
  background: #eff3f8;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  @media (max-width: 768px) {
    padding: 0.56rem 0.56rem 0.94rem 1rem;
    margin-top: 0.94rem;
    width: 17.3125rem;
  }
  &.hide-on-mobile {
    @media (max-width: 768px) {
      display: none;
    }
  }
  &.show-on-mobile {
    @media (min-width: 769px) {
      display: none;
    }
  }
`;
export const Select = styled.span`
  color: #868686;
  font-size: 1rem;
  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;
export const Arrowimg = styled.img`
  width: 1.3125rem;
  height: 1.31131rem;
`;

export const Button = styled.button`
  width: 21rem;
  height: 3.1875rem;
  border-radius: 0.5rem;
  background: #ed6d25;
  padding: 0.94rem;
  color: #fff;
  font-size: 1.125rem;
  border: none;
  cursor: pointer;
  margin-top: 2.19rem;
`;
export const AreaOptions = styled.div`
  margin-top: 0.13rem;
  padding: 1rem;
  width: 11.3125rem;
  border-radius: 0rem 0rem 0.375rem 0.375rem;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  position: absolute;
  z-index: 1;
  top: 100%;
  right: 0;
  font-size: 0.875rem;
  @media (max-width: 768px) {
    width: inherit;
  }
`;
export const Option = styled.p`
  color: #8d8d8d;

  font-size: 0.875rem;
  margin: 0;
  padding: 0.12rem 0 0.5rem 0;
  &:hover {
    color: #000;
    font-weight: 400;
  }
`;
export const LineOption = styled.div`
  width: inherit;
  height: 0.0625rem;
  background: #ed6d25;
`;

export const divInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Input = styled.input<inputprops>`
  width: ${(props) => props.$widthinput};
  margin-top: ${(props) => props.$margintop};
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background: #eff3f8;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #868686;
  }

  @media (max-width: 768px) {
    max-width: 17.5625rem;
    width: 100%;
    padding: 0.56rem 0rem 0.94rem 1rem;
    font-size: 0.875rem;
  }
  &.on-mobile {
    @media (max-width: 768px) {
      width: 8.5625rem;
    }
  }
`;

export const Button1 = styled.button`
  width: 21rem;
  border-radius: 0.5rem;
  background: #ed6d25;
  padding: 0.94rem;
  color: #fff;
  font-size: 1.125rem;
  border: none;
  cursor: pointer;
  margin-top: 2.19rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 17.5625rem;
    height: 2.3125rem;
    font-size: 0.875rem;
  }
`;

export const DivMobile = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    column-gap: 0.38rem;
    justify-content: center;
  }
`;

export const ModeEdit = styled.div`
  position: absolute;
  z-index: 1;
  margin: 0;
  border: 0.188rem solid #ED6D25;
  bottom: 0;
  left: 0;
  width: 2.625rem;
  height: 2.6875rem;
  border-radius: 100%;
  background-color: #FDFEFF;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`