import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
  align-self: center;
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  box-sizing: border-box;
  padding: 0.22rem;
  height: calc(100vh - 8.75rem);
  
  @media (max-width: 768px) {
    height: calc(100vh - 5.75rem);
    align-items: start;
    gap: 0;
    padding: 0;
    
`;

export const NewPasswordMenu = styled.div`
  width: 24rem;
  display: flex;
  flex-shrink: 0;
  border-radius: 1rem;
  background: #fdfeff;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  flex-direction: column;
  align-items: end;
  color: #868686;
  font-size: 1rem;
  padding: 1rem 1.5rem 1.87rem 1.5rem;

  @media (max-width: 768px) {
    max-width: 20rem;
    width: 100%;
    margin: 1.06rem 1.25rem 8rem;
  }
`;

export const MenuHeader = styled.div`
  text-align: center;
  width: 100%;
  margin: 1rem 0 0 0;
`;

export const Logo = styled.img``;

export const h1 = styled.h1`
  color: #ed6d25;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
    font-weight: 800;
  }
`;

export const input = styled.input`
  margin-top: ${(props) => props.$marginTop};
  width: ${(props) => props.$widthinput};
  height: 3.1875rem;
  font-size: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background: #EFF3F8;
  border: none;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 17.5625rem;
    padding: 0.56rem 0 0.94rem 1rem;
    font-size: 0.875rem;
  }
  
  &:focus{
    outline:none;
  }
  &::placeholder{
    color: #868686;;
`;

export const SaveButton = styled.button`
  margin-top: 1.25rem;
  width: 21rem;
  height: 3.1875rem;
  flex-shrink: 0;
  border-radius: 0.5rem;
  background: #ed6d25;
  text-align: center;
  color: #fff;
  border: none;
  cursor: pointer;

  font-size: 1.125rem;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 768px) {
    width: 17.5625rem;
    height: 2.3125rem;
    font-size: 0.875rem;
  }
`;

export const ClickText = styled.div`
  color: #ed6d25;

  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 3.37rem;
  display: flex;
  align-self: center;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

export const AlternativeButton = styled.button`
  width: 21rem;
  height: 3.1875rem;
  flex-shrink: 0;
  border-radius: 0.5rem;
  background: #eff3f8;
  border: none;
  color: #ed6d25;

  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  margin-top: 0.94rem;

  @media (max-width: 768px) {
    width: 17.5625rem;
    height: 2.3125rem;
    font-size: 0.875rem;
  }
`;
