import React, { Component } from 'react';
import axios from 'axios'
import './style.css'

class About extends Component {
  state = {
    x : []
  }
  componentDidMount(){
    axios.get("data.json").then(res => {
      console.log(res.data.about)
      this.setState({
        x : res.data.about
      })
    })
  }
  render(){
    const {x} = this.state;
    const list = x.map(x => {
      return(
          <div className="col-lg-4 col-md-6 col-sm-12 about1">
            <div className="card">
                <h1>{x.title}</h1>
                <p>{x.body}</p>
                <p className="two">READ MORE</p>
            </div>
          </div>
      )
    })
  return (
    <div className="one">
    <div className="container">
    <h1>WELCOME TO WEBSITE</h1>
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

export default About;