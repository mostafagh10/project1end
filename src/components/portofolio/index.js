import React, { Component } from 'react';
import axios from 'axios'
import './style.css'

class Portofolio extends Component {
  state = {
    x : []
  }
  componentDidMount(){
    axios.get("data.json").then(res => {
      console.log(res.data.works)
      this.setState({
        x : res.data.works
      })
    })
  }
  render(){
    const {x} = this.state;
    const list = x.map(x => {
      return(
          <div className="col-lg-4 col-md-6 col-sm-12 port1">
                <img src={x.image} height="350" width="350"/>
          </div>
      )
    })
  return (
    <div className="one">
    <div className="container">
    <h1>Featured Works</h1>
    <hr />
    <br />
        <div className="row">
      {list}
      </div>
      </div>
      </div>
  );
  }
}

export default Portofolio;