import React, { Component } from 'react';
import rodape from '../img/rodape.jpg';

class Rodape extends Component{

    render(){
        return(
            <div>
                <div className="text-center">
                    <img src={rodape}></img>
                </div>
            </div>
        );
    }
}
export default Rodape;