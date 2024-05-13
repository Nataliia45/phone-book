import React from 'react';
import './App.css';
import Sidebar from './Sidebar.js';
import Footer from './footer/Footer.js';


import algarve from "./img/algarve.jpg";
import sardin from "./img/sardin.jpg";
import krit from "./img/krit.jpg";
import Nav from './navbar/Nav.js';
import star from "./img/Star.png";
import location from "./img/Location.png";



function App() {

  return (

    <div className="App">

    <Sidebar/>

    <Nav/>

    <main>
      <section className="recomend-wrap">

          <h2>Recommended Destination:</h2>

          <div className="our-destination">

              <article className="our-destination-img">
                  <img src={algarve} alt="" className="picture"/>
                  <h3>Algarve</h3>
                  <div className="locator">
                      <span><img src={location} alt=""/>Portugal</span>
                  </div>
                  <div className="star">
                  <span><img src={star}  alt="" className="star-img"/>4.8</span>
                  </div>
              </article>

              <article className="our-destination-img">
                  <img src={sardin} alt="" className="picture"/>
                  <h3>Sardinia</h3>
                  <div className="locator">
                      <span><img src={location} alt=""/>Spain</span>
                  </div>
                  <div className="star">
                      <span><img src={star} alt="" className="star-img"/>4.7</span>
                  </div>
              </article>

              <article className="our-destination-img">
                  <img src={krit} alt="" className="picture"/>
                  <h3>Krit</h3>
                  <div className="locator">
                      <span><img src={location} alt=""/>Greece</span>
                  </div>
                  <div className="star">
                      <span><img src={star}  alt="" className="star-img"/>4.6</span>
                  </div>
              </article>

              <article className="our-destination-img">
                  <img src={algarve} alt="" className="picture"/>
                  <h3>Algarve</h3>
                  <div className="locator">
                      <span><img src={location} alt=""/>Portugal</span>
                  </div>
                  <div className="star">
                  <span><img src={star}  alt="" className="star-img"/>4.8</span>
                  </div>
              </article>

              <article className="our-destination-img">
                  <img src={sardin} alt="" className="picture"/>
                  <h3>Sardinia</h3>
                  <div className="locator">
                      <span><img src={location} alt=""/>Spain</span>
                  </div>
                  <div className="star">
                      <span><img src={star} alt="" className="star-img"/>4.7</span>
                  </div>
              </article>

              <article className="our-destination-img">
                  <img src={krit} alt="" className="picture"/>
                  <h3>Krit</h3>
                  <div className="locator">
                      <span><img src={location} alt=""/>Greece</span>
                  </div>
                  <div className="star">
                      <span><img src={star}  alt="" className="star-img"/>4.6</span>
                  </div>
              </article>

          </div>
      </section>
    </main>

    <Footer/>

    </div>

    

  );
}

export default App;

