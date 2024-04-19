// import logo from './logo.svg';

import { Route, Routes } from "react-router-dom";
import Navebar from "./componentes/navBar/Navebar";
import DigitalGuide from "./pages/Digital-guide/DigitalGuide";
import Lawyers from "./pages/lawyers/lawyers";
import OneLawyer from "./pages/oneLawyer/OneLawyer";

function App() {
  return (
    <div className="App">
      <Navebar />
      <Routes>
        <Route path="/" element={<DigitalGuide />} />
        <Route path="/category/:catId" element={<Lawyers />} />
        <Route path="/lawyer/:lawyerId" element={<OneLawyer />} />
      </Routes>
    </div>
  );
}

export default App;
