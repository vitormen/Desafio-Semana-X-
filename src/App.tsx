import "./App.css";
import { RouteList } from "./routes/routerList";
import  Navbar  from "./components/navbar"
import  { Container }  from "./AppStyles";

function App() {
  return (
    <>
    <Container>
      <Navbar/>
      <RouteList/>
    </Container>

    </>
  );
}

export default App;
