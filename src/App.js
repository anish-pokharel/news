import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { BrowserRouter, Router, Switch, Route } from "react-router-dom";
import Homepage from "./Components/Home/Homepage";

function App() {
  return (
    <>
      <Header />
      {/* <BrowserRouter>
         <Route exact path="/" component={Homepage}></Route> 
      </BrowserRouter> */}
      <Homepage />

      <Footer />
    </>
  );
}

export default App;
