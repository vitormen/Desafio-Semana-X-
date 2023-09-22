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
    widthButton: string;
    marginTop: string;
    imgInput?: string;
}

export const Title = styled.h1`
    color: #ED6D25;
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0;
`
export const Header = styled.h1`
    text-align: center;
    width: 100%;
    margin: 1rem 0 0 0;
`


export const Input = styled.input<InputProps>` 
    width: ${props => props.widthButton};
    margin-top: ${props => props.marginTop};
    height: 3.1875rem;
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

export const AreaButton = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`


export const Select = styled.select<InputProps>`
    width: ${props => props.widthButton};
    margin-top: ${props => props.marginTop};
    height: 2.1875rem;
    font-size: 1rem;
    padding: 1rem;
    border-radius: 0.5rem;
    background: #EFF3F8;
    border: none;
    color: #000

s
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
`

export const Option = styled.option`
    color: #8D8D8D;
    font-size: 0.875rem;
    padding: 0.5rem;
    border: 0.063rem solid #ED6D25;
`