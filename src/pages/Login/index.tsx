import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
import * as C from './styles'


const Login = () => {
    return(
        <>
        <Navbar  thereIsLoggedOut={true} thereIsProfile={false} thereIsUserEdit={false}/>
            <C.Container>
                Login
            </C.Container>
        <Footer/>
        </>
    )
}


export default Login