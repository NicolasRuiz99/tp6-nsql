import React,{Fragment,useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import HeroInfo from './components/HeroInfo';
import './bootstrap.min.css';
import AddHero from './components/AddHero';

const App = () => {

	const [search,setSearch] = useState ("");

	return (
		<Fragment>
			<Router>
			<Navbar setSearch={setSearch} />
			<Switch>
				<Route exact path="/" render={()=>(
					<Home 
						type = {1}
						search = {search}
					/>
				)} />
				<Route exact path="/marvel" render={()=>(
					<Home 
						type = {2}
						search = {search}
					/>
				)} />
				<Route exact path="/dc" render={()=>(
					<Home 
						type = {3}
						search = {search}
					/>
				)} />
				<Route exact path="/hero/:id" render={(props)=>(
					<HeroInfo 
						id = {props.match.params.id}
					/>
				)} />
				<Route exact path="/add" component={AddHero} />
			</Switch>
			</Router>
		</Fragment>
	);
}

export default App;