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



type ButtonsProps = { 
    background: string;
    color: string;
}
export const Button = styled.button<ButtonsProps>`
    width: 21rem;
    height: 3.1875rem;
    border-radius: 0.5rem;
    background: ${props => props.background};
    padding: 0.94rem;
    align-text: center;
    color: ${props => props.color};
    font-size: 1.125rem;
    border: none;
    cursor: pointer;
    margin-top: 1.5rem;
    font-family: Roboto Flex;
`


type CheckboxProps = { 
    checked: boolean;
}

export const Text = styled.label`
    color: #868686;
    font-family: Roboto Flex;
    font-size: 1rem;
    margin-left: 0.75rem;
`
export const CheckboxContainer = styled.div`
   display: flex;
   align-items: center;
   margin-top: 1.56rem;
   margin: 1.56rem 0 1rem 0;
`

export const Checkbox = styled.input.attrs({type: 'checkbox'})`
    overflow: hidden;
    white-space: nowrap;width: 0.026rem;
    height: 0.026rem;
    margin: -0.026rem;
    padding: 0;
`
export const StyledCheckbox = styled.label<CheckboxProps>`
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 0.375rem;
    border: 0.026rem solid #DCDCDC;
    background: #EFF3F8;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        display: ${props => props.checked ? 'flex' : 'none'};
        filter: invert(75%) sepia(11%) saturate(6042%) hue- rotate(30deg) brightness(105%) contrast(68%);
    }
`;

export const PasswordForgot = styled.a`
    color: #ED6D25;
    font-family: Roboto Flex;
    font-size: 0.875rem;
    text-decoration-line: underline;
    cursor: pointer;
`