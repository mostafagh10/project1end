import React, { Component } from 'react';
import About  from './components/about/index'
import Contact from './components/contact/index'
import Home from './components/home/index'
import Nav from './components/navbar/index'
import Portofolio from './components/portofolio/index'
import Price from './components/price/index'
import Service from './components/services/index'
import Team from './components/team/index'
import { BrowserRouter , Route,HashRouter}  from 'react-router-dom'

class App extends Component {
  render(){
  return (
    <div className="App">
      <HashRouter>
      <Nav />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/portofolio" component={Portofolio} />
      <Route exact path="/services" component={Service} />
      <Route exact path="/price" component={Price} />
      <Route exact path="/team" component={Team} />
      <Route exact path="/contact" component={Contact} />
      </HashRouter>
    </div>
  );
  }
}

export default App;
