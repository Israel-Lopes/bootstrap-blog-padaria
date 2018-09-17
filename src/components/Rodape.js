import React, { Component } from 'react';
import rodape from '../img/rodape.jpg';

class Rodape extends Component{

    render(){
        return(
            <div id="rodape">
                <img src={rodape}></img>
            </div>
        );
    }
}
export default Rodape;