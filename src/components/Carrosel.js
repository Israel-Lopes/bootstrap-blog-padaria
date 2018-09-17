import React, { Component } from 'react';

import cafedamanha from '../img/cafe-da-manha.jpg';
import massa from '../img/massa.jpg';
import paofresquinho from '../img/pao-fresquinho.jpg';

const Carrosel = (props) =>{
        return(
            <div className="container">
                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={cafedamanha} alt="First slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={massa} alt="Second slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={paofresquinho} alt="Third slide"/>
                        </div>
                    </div>
                    </div>
            </div>
          
        );
}
export default Carrosel;