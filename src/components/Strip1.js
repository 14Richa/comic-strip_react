import './Strip1.css';

import React from 'react';
import { Link } from 'react-router-dom';
//import Strip2 from './Strip2';

class Strip1 extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			batman: 0,
			ironman: 0,
			hulk: 0,
			superman: 0
		};
	}

	selectHero(hero)
	{
		this.setState({ [hero]: 1 });
	}

	
	renderContent(){
		var arr = [];
		var count = 0;
		for (var key in this.state) {
			if(this.state[key] === 1) count+=1;
		}
		arr[0] = <button onClick = {() => this.selectHero("ironman")} className = {`btn-warning ${this.state.ironman===1 ? "disabled" : ""}`}>Iron Man</button>
		arr[1] = <button onClick = {() => this.selectHero("batman")} className = {`btn-danger ${this.state.batman===1 ? "disabled" : ""}`}>Batman</button>
		arr[2] = <button onClick = {() => this.selectHero("superman")} className = {`btn-secondary ${this.state.superman===1 ? "disabled" : ""}`}>Superman</button>
		arr[3] = <button onClick = {() => this.selectHero("hulk")} className = {`btn-success ${this.state.hulk===1 ? "disabled" : ""}`}>Hulk</button>
		
		arr[4] = (count >= 2) ? <div> <Link to = {`/Strip2`}><button  >Next </button></Link></div> : null;
		return(
			<div> 
					 {arr[0]}
					 {arr[1]}
					 {arr[2]}
					 {arr[3]}
					 {arr[4]}
			</div>
		);

		
	}


	render() {
		return (
			<div className = "paper container canvas"> 
				<div className = "heading"> <h2> Dynamic Comic Strip </h2> </div>
				{this.renderContent()}
				

			</div>


				

					

			
			
			


		)

	}
}

export default Strip1;