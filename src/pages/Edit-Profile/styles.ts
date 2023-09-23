import styled from "styled-components";

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
  margin-top: 4.44rem;
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
  font-family: Roboto Flex;
  font-size: 1.5rem;
  margin-bottom: 0rem;
  margin-top: 1.19rem;
`;

export const MaritalStatus = styled.p`
  color: #4b4b4b;
  font-family: Roboto Flex;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 133.333% */
`;

export const EditsAndLeftProfile = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CenterProfile = styled.div`
  width: 37rem;
  height: 53.375rem;
  border-radius: 1rem;
  background: #fdfeff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin: 0 2rem;
`;

export const title = styled.h1`

color: #ED6D25;
font-family: Roboto Flex;
font-size: 2.25rem;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: 0.1875rem;
text-align: center;
margin-top: 2rem;
`;
type InputProps = { 
  widthButton: string;
  marginTop: string;
  imgInput?: string;
}
export const divSelect = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 6.63rem;
`;
export const AreaSelect = styled.div`
    position: relative;
    width: 11.3125rem;
    height: 2.1875rem;
    margin-top: 5.75rem;
    margin-left: 22.94rem;
    padding: 1rem;
    border-radius: 0.5rem;
    background: #EFF3F8;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
`
export const Select = styled.span`
    color: #868686;
    font-size: 1rem;
    font-family: Roboto Flex;
`
export const Arrowimg = styled.img`
    width: 1.3125rem;
    height: 1.31131rem;
`

export const Button = styled.button`
    width: 21rem;
    height: 3.1875rem;
    border-radius: 0.5rem;
    background: #ED6D25;
    padding: 0.94rem;
    color: #FFF;
    font-size: 1.125rem;
    border: none;
    cursor: pointer;
    margin-top: 2.19rem;
    font-family: Roboto Flex;
`
export const AreaOptions = styled.div`
    margin-top: 0.13rem;
    padding: 1rem;
    width: 11.3125rem;
    border-radius: 0rem 0rem 0.375rem 0.375rem;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    position: absolute;
    z-index: 1;
    top: 100%;
    right: 0;
    font-size: 0.875rem;

    
`
export const Option = styled.p`
    color: #8D8D8D;
    font-family: Roboto Flex;
    font-size: 0.875rem;
    margin: 0;
    padding: 0.12rem 0 0.5rem 0;
    &:hover{
        color: #000;
        font-weight: 400;
        }
`
export const LineOption = styled.div`
    width: inherit;
    height: 0.0625rem;
    background: #ED6D25;
`;

export const divInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2.88rem;
`;
export const Input = styled.input<InputProps>` 
    width: ${props => props.widthButton};
    margin-top: ${props => props.marginTop};
    display: flex;
    flex-direction: column;
    height:3.1875rem;
    font-size: 1rem;
    padding: 1rem;
    border-radius: 0.5rem;
    background: #EFF3F8;
    border: none;
    &:focus{
        outline: none;
    }
    &::placeholder{
        color: #868686;;
    }
`;



export const Button1 = styled.button`
    width: 21rem;
    height: 3.1875rem;
    border-radius: 0.5rem;
    background: #ED6D25;
    padding: 0.94rem;
    align-text: center;
    margin-left: 8.94rem;
    color: #FFF;
    font-size: 1.125rem;
    border: none;
    cursor: pointer;
    margin-top: 2.19rem;
    font-family: Roboto Flex;
    `;
    //