import styled from "styled-components";

import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Container = styled.div`
  box-sizing: border-box;
  padding: 0 22rem;
  height: calc(100vh - 8.75rem);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    height: calc(100vh - 5.75rem);
    align-items: start;
    margin-top: 1.06rem;
    padding: 0;
  }
`;

export const Card = styled.div`
  width: 24rem;
  height: 37.375rem;
  border-radius: 1rem;
  background-color: #fdfeff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  color: #868686;
  font-size: 1rem;
  padding: 1rem 1.5rem 1.87rem 1.5rem;
  margin-left: 2rem;
  @media (max-width: 768px) {
    max-width: 20rem;
    height: 37.375rem;
    margin-left: 0;
  }
`;

//props to pass values ​​to input
type InputProps = {
  $widthinput: string;
  $margintop: string;
  $widthmobileinput?: string;
  $inputvalid?: boolean;

};

export const Title = styled.p`
  color: #ed6d25;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 1.25rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
  }
`;
export const Header = styled.span`
  text-align: center;
  width: 100%;
  margin: 1rem 0 0 0;
`;

export const Input = styled.input<InputProps>`
  width: ${(props) => props. $widthinput};
  margin-top: ${(props) => props.$margintop};
  height: 3.1875rem;
  font-size: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background: #eff3f8;
  border: ${(props) => props.$inputvalid? '0.02rem solid #F00' : '0.02rem solid #eff3f8'};
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #868686;
  }
  @media (max-width: 768px) {
    max-width: ${(props) => props.$widthmobileinput};
    height: 2.3125rem;
    font-size: 0.875rem;
  }
`;

export const AreaInputs = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
  > div {
    position: relative;
    width: 100%;
  }
`;

export const AreaSelect = styled.div`
  position: relative;
  width: inherit;
  height: 2.5rem;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background: #eff3f8;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  @media (max-width: 768px) {
    width: inherit; 
    font-size: 0.875rem;
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
  @media (max-width: 768px) {
    width: 0.82031rem;
    height: 0.40975rem;
  }
`;

export const Button = styled.button`
  width: 21rem;
  height: 3.1875rem;
  border-radius: 0.5rem;
  background: #ed6d25;
  padding: 0.94rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 1.125rem;
  border: none;
  cursor: pointer;
  margin-top: 2.19rem;
  @media (max-width: 768px) {
    font-size: 0.875rem;
    max-width: 17.5625rem;
    height: 2.3125rem;
    margin-top: 6.81rem;
    width: 17.5625rem;
  }
`;
export const AreaOptions = styled.div`
  margin-top: 0.13rem;
  padding: 0.3rem;
  width: inherit;
  border-radius: 0rem 0rem 0.375rem 0.375rem;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  position: absolute;
  z-index: 1;
  top: 100%;
  right: 0;
  font-size: 1rem;
  @media (max-width: 768px) {
    width: inherit;
    height: 8.375rem; 
    font-size: 0.875rem;
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

export const FieldSelect = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;


export const AlertError = styled.p`
  position: absolute;
  font-size: 0.8rem;
  color: #F00;
  z-index: 1;
  margin: 0;
`;

export const DateFormat = styled.p`
  color: #ED6D25;
  font-size: 0.375rem;
  letter-spacing: 0.0625rem;
  margin: 0;
  @media (max-width: 768px){
    display: none;
  }
`;