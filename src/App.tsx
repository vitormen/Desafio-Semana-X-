import "./App.css";
import { RouteList } from "./routes/routerList";
import  Navbar  from "./components/navbar"
import  { Container }  from "./AppStyles";

function App() {
  return (
    <>
    <Navbar/>
    <Container>
      
      <RouteList/>
    </Container>

    </>
  );
}

export default App;
