// import logo from './logo.svg';
import './App.css';
import AboutUs from './widgets/AboutUs';
import Footer from './widgets/Footer';
import Header from './widgets/Header';
import OurTeam from './widgets/OurTeam';
import Testimonals from './widgets/Testimonals';

function About() {
  return (
    <div>
      <Header></Header>
      <AboutUs></AboutUs>
      <Testimonals></Testimonals>
      <OurTeam></OurTeam>
      <Footer></Footer>
    </div>
  );
}

export default About;
