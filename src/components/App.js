import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import Strip1 from './Strip1';
import Strip2 from './Strip2';


const App = () => {
	return (
		<div>
	
			
			<BrowserRouter>
				<div>

				
					<Route path = "/" exact component = {Strip1} />
					<Route path = "/Strip2" exact component = {Strip2} />
				</div>
					
			</BrowserRouter>
		</div>






	)
};

export default App;