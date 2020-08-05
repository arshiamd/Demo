import React from "react";
import Home from "./components/Home";
import Details from './components/Details';
import {BrowserRouter , Route} from 'react-router-dom';
function App (){
  return(
    <div className="App" style={{textAlign: "center"}}>
      {/* <Home />
        */}
      <Route exact path = '/' component = {Home} />
      <Route exact path = '/Details' component = {Details} />
    </div>
  );
 
}

export default App;