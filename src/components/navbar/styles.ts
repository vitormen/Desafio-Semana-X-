import styled from 'styled-components'

export const Nav = styled.div`
    font-family: Roboto Flex;
    height: 5.75rem;
    background: #FDFEFF;
    display: flex;
    align-items: center;
    overflow: hidden;
    padding: 0 22rem;
    justify-content: space-between;
`;

export const MenuLeft = styled.div`
    display: flex;
    align-items:center;
`
export const MenuRight = styled.div`
    display: flex;
    align-items:center;
`
export const LogoText = styled.h1`
    color: #ED6D25;
    font-size: 2.25rem;
    font-weight: 800;
`;

export const Link = styled.p`
    color: #4B4B4B;
    font-size: 1.125rem;
    font-weight: 400;
`
export const MenuOptions = styled.div`
    display: flex;
    width: 21.1rem
    margin-left: 2.13rem;
`

type OptionProps = {
    color: string;
}

export const Option = styled.p<OptionProps>`
    color: ${props => props.color};
    font-family: Roboto Flex;
    font-size: 1.125rem;
    margin-left: 2.31rem;
    cursor: pointer;
    @media (max-width: 1750px){
        margin-left: 1.2rem;
    }
`

export const Search = styled.div`
    width: 22.1875rem;
    border-radius: 0.5rem;
    background: #EFF3F8;
    color: #B4AEAE;
    font-size: 1rem;
    padding: 0.62rem 0.94rem;
    display: flex;
    align-items: center;
    color: #B4AEAE;
    margin-left: 3rem;
    @media (max-width: 1750px){
        width: 19rem;
    }

`
export const ImageSearch = styled.img`
    width: 1.5rem;
    height: 1.49863rem;
`
export const SearchInput = styled.input`
    width: 100%;
    border: none;
    background: #EFF3F8;
    color: #B4AEAE;
    font-size: 1rem;
    padding-left: 0.75rem;
    &:focus{
        outline: none;
    }
    &::placeholder{
        color: #B4AEAE;
    }
`


export const User  = styled.div`
    display: flex;
    align-items: center;
    margin-left: 0.87rem;
    p{
        margin-right: 0.25rem;
    }

`


export const UserImage = styled.img`
    width: 2.5rem;
    height: 2.rem;
    border-radius: 6.25rem;
    margin-right: 0.81rem;
`