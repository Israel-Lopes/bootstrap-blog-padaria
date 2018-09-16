import React, { Component } from 'react';

//Components{
    import NavBar from './components/NavBar.js';
    import Conteudo from './components/Conteudo.js';
    import Rodape from './components/Rodape.js';
//}

class BomgostoContainer extends Component{

    render(){
        return (
            <div className="container">
                <div id="cabecalho">
                    <NavBar/>
                </div>
                <div id="conteudo">
                   <Conteudo/>
                </div>
                <div id="rodape">
                    <Rodape/>
                </div>
            </div>
        );
    }
}
export default BomgostoContainer;