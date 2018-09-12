import React, { Component } from 'react';

//Components{
    import Menu from './components/Menu.js';
    import Conteudo from './components/Conteudo.js';
    import Rodape from './components/Rodape.js';
    import './css/BomgostoContainer.css';
//}

class BomgostoContainer extends Component{

    render(){
        return (
            <div>
                <div id="cabecalho">
                    <Menu/>
                    <h1>Bom Gosto</h1>
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