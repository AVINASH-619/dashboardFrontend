import Nav from "./pages/Nav";
import Home from "./pages/Home";
import Login from "./pages/Login"
import Commands from "./pages/Commands";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
    <Nav/>
    <Routes>
      <Route exact path="/"  Component={Home} />
      <Route exact path="/login"  Component={Login} />
      <Route exact path="/commands"  Component={Commands} />
      <Route/>
    </Routes>
   </Router>
  );
}

export default App;
