// import logo from './logo.svg';
import './App.css';
import About from './widgets/About';
import Footer from './widgets/Footer';
import Header from './widgets/Header';
import OurTeam from './widgets/OurTeam';
import Testimonals from './widgets/Testimonals';

function App() {
  return (
    <div>
      <Header></Header>
      <About></About>
      <Testimonals></Testimonals>
      <OurTeam></OurTeam>
      <Footer></Footer>
    </div>
  );
}

export default App;
