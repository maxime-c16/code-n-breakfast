import logo from './logo.svg';
import './App.css';
import Card from './components/Cards';
import Studs from './components/Studs';

function App() {
  return (
	<div className="App">
		< Studs login="mcauchy" name="Maxime cauchy" email="mcauchy@student.42.fr" coalition="The assembly" bh="45" link="intra profile"/>
		< Studs login="hrecolet" name="Hugo recolet" email="hrecolet@student.42.fr" coalition="The Federation" bh="180" link="intra profile"/>
		< Studs login="yschecro" name="Yoseph schecroun" email="yschecro@student.42.fr" coalition="The Federation" bh="10" link="intra profile"/>
		< Studs login="emaugale" name="Elidjah maugalem" email="emaugale@student.42.fr" coalition="the order" bh="none" link="intra profile"/>
	</div>
  );
}

export default App;
