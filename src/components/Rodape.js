import React, { Component } from 'react';
import NavBar from './NavBar.js';

import rodape from '../img/rodape.jpg';
import contato from '../img/contato.png';
import marcador from '../img/marcador.png';


class CardRodape extends Component{
       render(){
           return(
            <div className="card-deck bg-transparent font-weight-bold text-monospace text-center" style={{width: "19rem"}}>
            <img className="card-img-top" src={this.props.image} alt="Card image cap" style={{position: "relative" , left: "50px", width: "50px", height: "50px"}} />
                <div className="card-body text-dark">
                    <p className="card-text">{this.props.text}</p>
                </div>
            </div>
           );
       }
}

class Rodape extends Component{

    render(){
        return(
            <div className="container">
               <div className="card-deck text-center" id="rodape" style={{position: "relative"}}>
                    <CardRodape  text="(48) 9999-9999" image={contato}/>
                    <CardRodape text="Av. Ficticia" image={marcador}/>
               </div> 

               <div className="text-center">
                   <img src={rodape}></img>
               </div>
            </div>
        );
    }
}
export default Rodape;