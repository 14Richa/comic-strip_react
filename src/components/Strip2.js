import './Strip2.css';

import React from 'react';
//import { Link } from 'react-router-dom';

var request = require('request');

let options = {
  url: 'https://api.chucknorris.io/jokes/random',
  method: 'GET'
}

request(options, (err, response, body) => {
    if(!err && response.statusCode === 200)
        console.log(body.value)
});


class Strip2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numChildren: 0,
      items: []
    }
  }

  

handleAddSecondInput = () => {
  	this.setState({
  		numChildren: this.state.numChildren + 1
  	})
    this.setState({
      items: this.state.items.concat(<div className="dialogue" key={this.state.numChildren}> "Hi" </div>)
    })

    request(options, (err, response, body) => {
    if(!err && response.statusCode === 200)
        console.log(body)
	});
  
}


  render() {
  	console.log(this.state);

    return(
          <div>
            <h1> strip 2 </h1>
            <div> check </div>
            {this.state.items}
            <button type="button" onClick={this.handleAddSecondInput} >
              Add a condition
            </button>


          </div>

        
     
    );
  }
}
export default Strip2;