import * as C from './styles.ts'
import Navbar from "../../components/navbar";
import logo from "../../assets/ps_orkut.png"
import HomepageImg from "../../components/homepageImg";
import Footer from "../../components/footer";

const PasswordRecovery = () => {
    return (
        <>
            <Navbar thereIsLoggedOut={true} thereIsProfile={false} thereIsUserEdit={false}/>
            <C.PageContainer>
                <div>
                    <HomepageImg/>
                </div>

                <C.RecoveryMenu>

                    <C.MenuHeader>
                        <img src={logo} alt="The oulkut logo, orange circle"/>
                        <C.h1>Recupere sua senha</C.h1>
                    </C.MenuHeader>

                    <C.EmailInput type="email" id="email" name="email" placeholder="E-mail cadastrado"></C.EmailInput>

                    <C.SendButton>Enviar Código</C.SendButton>

                    {/*Vai ser necessario mudar isso no futuro para que se torne algo clicavel, pois no momento se trata somente de uma TAG <P></P>*/}
                    <C.ClickText>Lembrou sua Senha?</C.ClickText>

                    {/*<C.AlternativeButton>Entrar com as credenciais</C.AlternativeButton>*/}
                </C.RecoveryMenu>
            </C.PageContainer>
            <Footer/>
        </>

    )
}

export default PasswordRecovery