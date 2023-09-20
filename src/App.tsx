import "./App.css";
import { RouteList } from "./routes/routerList";
import  Navbar  from "./components/navbar"
import Footer from "./components/footer";
import  { Container }  from "./AppStyles";

function App() {
  return (
    <>
    <Navbar/>
      <Container>
        <RouteList/>
      </Container>
    <Footer/>

    </>
  );
}

export default App;
