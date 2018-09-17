import React, { Component } from 'react';

//Components{
    import NavBar from './components/NavBar.js';
    import Conteudo from './components/Conteudo.js';
    import Rodape from './components/Rodape.js';
    import Carrosel from './components/Carrosel.js';
//}

class BomgostoContainer extends Component{

    render(){
        return (
            <div>
                <div>
                    <NavBar/>
                </div>
                <div className="container">
                   <Carrosel/>
                   <Conteudo/>
                </div>
                <div className="container">
                    <Rodape/>
                </div>
            </div>
        );
    }
}
export default BomgostoContainer;