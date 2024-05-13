import logo from "../img/travel.png";
import "./style.css";
import React, { useEffect } from 'react';


const Nav = () =>{

  useEffect(() => {
    const handleScroll = () => {
        const header = document.getElementById("App-header");
        if (header) {
            if (window.pageYOffset > 50) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
        }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

    return(      
    <header className="App-header">
         <div className="conteiner">
              <div className="header-wrap">
              <a href="#!"><img src={logo} alt="" className="logo"/></a>
         <nav className="header-menu">
           <ul>
             <li><a href="#!">Review</a></li>
             <li><a href="#!">Tips</a></li>
             <li><a href="#!">Alerts</a></li>
             <li><a href="#!">Blog</a></li>
           </ul>    
         </nav> 

        <a href="#!" className="top-button">Sign in</a>

          </div>
      </div>

    </header>);
}

export default Nav;