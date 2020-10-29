/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidehead from "./components/Sidehead";
import Section2 from "./components/Section2";
import Section4 from "./components/Section4";
import Carousel from "./components/Carousel";
import Features from "./components/Feature";
import 'bootstrap/dist/css/bootstrap.css';


// https://colorhunt.co/palette/18612
// https://www.alinea-invest.com/

function App() {
  return (
      
    <div className="App">
    
      <a href="#" class="float" >
        <i class="far fa-comments"></i>
      </a>

      <Header />

      <Sidehead 
        title ="We get it 🤷🏽‍♀️. Investing is overwhelming, but it doesn’t have to be."
      />

      <Section2 />

      <Features />

      <Section4 />

      <Carousel />

      <Footer />

    </div>
  );
}

export default App;
