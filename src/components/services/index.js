import React, { Component } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import axios from 'axios';
import './style.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUsers,faTrophy,faCoffee,faFile,faRocket,faCogs,faPencilAlt,faFlask,faGem} from '@fortawesome/free-solid-svg-icons';
library.add(faUsers,faTrophy,faCoffee,faFile,faRocket,faCogs,faPencilAlt,faFlask,faGem);

class Service extends Component {
  state = {
    x : []
  }
  componentDidMount(){
    axios.get("data.json").then(res => {
      this.setState({
        x : res.data.services
      })
    })
  }
  render(){
    const {x} = this.state;
    const list = x.map(x => {
      return(
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card" id="service1">
                <FontAwesomeIcon icon={x.icon2} id="service5" /><br />
                <h3>{x.type}</h3>
                <p>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero.</p>
            </div>
          </div>
      )
    })
    const list2 = x.map(x => {
      if(x.number!== "0"){
      return(
          <div className="col-md-3">
            <div className="card" id="service2">
              <FontAwesomeIcon icon={x.icon} id="service4" /><br />
                <h3>{x.number}</h3>
                <p>{x.des}</p>
            </div>
          </div>
      )
      }
    })
  return (
    <div className="one">
    <div className="container">
    <h1>What We Offer</h1>
    <hr />
    <br />
      <div className="row">
         {list}
      </div>
    </div>
      <br /><br />
      <div id="service3">
      <div className="container">
      <div className="row">
         {list2}
      </div>
      </div>
      </div>
      </div>
  );
  }
}
export default Service;