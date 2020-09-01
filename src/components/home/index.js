import React, { Component , Fragment } from 'react';
import {Paper , Title , Say , Button1 , Over ,Over2} from './style.js';
import About  from '../about/index';
import Contact from '../contact/index';
import Portofolio from '../portofolio/index';
import Price from '../price/index';
import Service from '../services/index';
import Team from '../team/index';

class Home extends Component {
  render(){
  return (
    <div>
    <Paper>
      <Over>  
      </Over>
      <Over2>
      <div className="container">
      <Title>WE ARE CREATIVE AGENCY</Title>
      <Say>Morbi mattis felis at nunc. Duis viverra diam non justo. In nisl. Nullam sit amet magna in magna gravida vehicula. Mauris tincidunt sem sed arcu. Nunc posuere.</Say>
      <Button1 className="btn btn-primary">Get Started!</Button1>
      <Button1 className="btn btn-success">Learn More</Button1>
      </div>
      </Over2>
    </Paper>
    <About />
    <Portofolio />
    <Service />
    <Price />
    <Team />
    <Contact />
    </div>
  );
  }
}

export default Home;