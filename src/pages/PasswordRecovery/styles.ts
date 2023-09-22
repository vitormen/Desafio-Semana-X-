import styled from "styled-components";

export const PageContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    font-family: Roboto Flex;
    box-sizing: border-box;
    background-color: #d9e6f7;
    padding: 0.22rem;
    height: calc(100vh - 8.75rem);
`;

export const RecoveryMenu = styled.div`
    width: 24rem;
    height: 37.375rem;
    display: flex;
    flex-shrink: 0;
    border-radius: 1rem;
    background: #FDFEFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    flex-direction: column;
    align-items: end;
    color: #868686;
    font-size: 1rem;
    padding: 1rem 1.5rem 1.87rem 1.5rem;
`;

export const h1 = styled.h1`
  color: #ED6D25;  
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
`;

export const MenuHeader = styled.h1`
  text-align: center;
  width: 100%;
  margin: 1rem 0 0 0;
  
`;

export const EmailInput = styled.input`
  margin-top: 2.38rem;
  width: 21rem;
  height: 3.1875rem;
  font-size: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background: #EFF3F8;
  border: none;
  &:focus{
    outline:none;
  }
  &::placeholder{
    color: #868686;;
  }
`;

export const SendButton = styled.button`
  margin-top: 2.37rem;
  width: 21rem;
  height: 3.1875rem;
  flex-shrink: 0;
  border-radius: 0.5rem;
  background: #ED6D25;
  text-align: center;
  color: #FFF;
  border: none;
  cursor: pointer;
  font-family: Roboto Flex;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: normal;
`;

export const ClickText = styled.div `
  color: #ED6D25;
  font-family: Roboto Flex;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 6.41rem;
  display: flex;
  align-self: center;
`;