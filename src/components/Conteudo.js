import React, { Component } from 'react';

class Conteudo extends Component{

    render(){
        return(
            <div>
                 <div id="conteudo-principal">
                        <h3>NOSSA TAREFA</h3>
                        <h2>REFEIÇÕES MEMORÁVEIS</h2>
                        <p>Nós adoramos provar o nosso produto, depois compartilhar o quão bom ele provou.</p>
                        <p>Nós adoramos fazê-lo, depois compartilhá-lo com outras pessoas.</p>
                        <p>Quando se trata de assar, trata-se de garantir que o produto que servimos seja fresco, os ingredientes são reais eo sabor é memorável.</p>
                    </div>
                    <div id="conteudo-secundario">
                        <h3>NOSSA MISSÃO</h3>
                        <h2>FORNO DE MOMENTOS</h2>
                        <p>A atmosfera geral em cada padaria Bom Gosto é quente, confortável e fresca.</p>
                        <p>Construímos cada local da loja, sabendo que é um reflexo do nosso novo bairro.</p>
                    </div>
            </div>
        );
    }
}
export default Conteudo;