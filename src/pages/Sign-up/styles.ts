import styled from 'styled-components'

export const Container = styled.div`
    box-sizing: border-box;
    background-color: #D9E6F7;
    padding: 0 22rem;
    height: calc(100vh - 8.75rem);
    font-family: Roboto Flex;
    display: flex;
    justify-content: center;
    align-items: center;
`;


export const Card = styled.div`
    width: 24rem;
    height: 37.375rem;
    border-radius: 1rem;
    background-color: #FDFEFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    align-items: end;
    color: #868686;
    font-family: Roboto Flex;
    font-size: 1rem;
    padding: 1rem 1.5rem 1.87rem 1.5rem;
    margin-left: 2rem;
    
`


type InputProps = { 
    widthbutton: string;
    margintop: string;
}

export const Title = styled.p`
    color: #ED6D25;
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0;
    font-family: Roboto Flex;
`
export const Header = styled.span`
    text-align: center;
    width: 100%;
    margin: 1rem 0 0 0;
    font-family: Roboto Flex;

`


export const Input = styled.input<InputProps>` 
    width: ${props => props.widthbutton};
    margin-top: ${props => props.margintop};
    height: 3.1875rem;
    font-size: 1rem;
    padding: 1rem;
    border-radius: 0.5rem;
    background: #EFF3F8;
    border: none;
    font-family: Roboto Flex;
    &:focus{
        outline: none;
    }
    &::placeholder{
        color: #868686;;
    }
`;

export const AreaButton = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`


export const AreaSelect = styled.div`
    position: relative;
    width: 11.3125rem;
    height: 2.1875rem;
    margin-top: 0.75rem;
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
    align-text: center;
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
    background: #ED6D25;
`
