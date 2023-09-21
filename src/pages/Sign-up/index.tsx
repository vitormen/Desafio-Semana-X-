import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
import Logo from "../../assets/ps_orkut.png"
import * as C from './styles'


const Login = () => {
    return(
        <>
        <Navbar  thereIsLoggedOut={false} thereIsProfile={true} thereIsUserEdit={false}/>
            <C.Container>
                <C.Card>
                    
                    <C.Header>
                        <img src={Logo} alt="logo"/>
                        <C.Title>Cadastre-se o UOLkut</C.Title>
                    </C.Header>
                    <C.Input widthButton={"21rem"} marginTop={"0.69rem"} type="email" id="email" name="email" placeholder="E-mail"></C.Input>
                    <C.Input widthButton={"21rem"} marginTop={"1.5rem"} type="password" id="password" name="password" placeholder="Senha"></C.Input>
                    <C.Input widthButton={"20.75rem"} marginTop={"1rem"} type="text" id="name" name="name" placeholder="Nome"></C.Input>
                    <C.AreaButton>
                        <C.Input widthButton={"7.8125rem"} marginTop={"1rem"} type="text" id="birthday" name="birthday" placeholder="Nascimento"></C.Input>
                        <C.Input widthButton={"11.5rem"} marginTop={"1rem"} type="text" id="profession" name="profession" placeholder="Profissão"></C.Input>
                    </C.AreaButton>
                    <C.AreaButton>
                        <C.Input widthButton={"7.8125rem"} marginTop={"1.31rem"} type="text" id="country" name="country" placeholder="País"></C.Input>
                        <C.Input widthButton={"11.5rem"} marginTop={"1.31rem"} type="text" id="city" name="city" placeholder="Cidade"></C.Input>
                    </C.AreaButton>
                    <C.Select widthButton={"11.3125rem"} marginTop={"0.75rem"} value="" disabled selected></C.Select>
                    <C.Button>Criar conta</C.Button>
                </C.Card>
            </C.Container>
        <Footer/>
        </>
    )
}


export default Login