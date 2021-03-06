import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Search from "./pages/Search"
import Saved from "./pages/Saved"
import Navbar from "./components/Navbar"

function App(){
  return(
  <Router>
  <div className="App">
    <Navbar/>

    <Route exact path = "/" component={Search}/>
    <Route exact path ="/search" component={Search}/>
    <Route exact path ="/saved" component={Saved}/>
  </div>
  </Router>
  )
}
export default App;