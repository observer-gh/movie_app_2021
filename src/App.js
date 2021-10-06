import React from "react";
import {HashRouter, Route} from 'react-router-dom';
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";


function App (){
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} /> 
      <Route path="/about" exact={true} component={About} />
      <Route path="/movie/:id" component={Detail} />
      {/* <Route path="/home" component={Home} />
      <Route path="/about" component={About} /> */}
    </HashRouter>
  );
};

export default App;