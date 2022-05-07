import './App.css';
import Header from "./widgets/header";
import Content from "./widgets/content";
import Footer from "./widgets/Footer";
import {BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </Router>
      	
      
    </div>
  );
}

export default App;
