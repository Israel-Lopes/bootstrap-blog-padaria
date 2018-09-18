import React, { Component } from 'react';

import doce from '../img/doce.png';
import salgado from '../img/salgado.png';
import torta from '../img/torta.png';
import bolo from '../img/bolo.png';

import CardImg from './CardImg';


class Conteudo extends Component{

    render(){
        return(
            <div>
             <div>
                <br/>
                <br/>
                
                <div className="section-header text-dark font-weight-bold text-monospace text-center">
                    <h1>PRODUTOS</h1>
                     <h5 className="section-legend ">Conheça nossos produtos</h5>
                     <br/>
                </div> 

                <div className="card-deck">
                <br/>
                     <CardImg title="DOCES" image={doce} text="Dos pratos mais tradicionais, que a vovó fazia, a sobremesas de chefs renomados, veja uma reunião de doces que vão dar água na boca"/>  
                     <CardImg title="SALGADOS" image={salgado} text="Deliciosos salgados de qualidade e de abricação própria." />
                     <CardImg title="TORTAS" image={torta} text="Uma torta é um alimento cozido ao forno, feito com massa de farinha e recheado com ingredientes de sua preferência, tanto doces quanto salgados." />
                     <CardImg title="BOLOS" image={bolo} text="Bolo é um alimento à base de massa de farinha, geralmente doce e cozido no forno. Os bolos são um dos componentes principais das festas!" /> 
               </div>
            </div>

                <div className="font-weight-bold text-center text-monospace">
                <br/>
                    <h1>REFEIÇÕES MEMORÁVEIS</h1>
                    <p>Nós adoramos provar o nosso produto, depois compartilhar o quão bom ele provou.</p>
                    <p>Nós adoramos fazê-lo, depois compartilhá-lo com outras pessoas.</p>
                    <p>Quando se trata de assar, trata-se de garantir que o produto que servimos seja fresco, os ingredientes são reais eo sabor é memorável.</p>
                </div> 

                <div className="font-weight-bold text-center text-monospace">
                <br/>
                    <h1>NOSSA MISSÃO</h1>
                    <p>A atmosfera geral em cada padaria Bom Gosto é quente, confortável e fresca.</p>
                    <p>Construímos cada local da loja, sabendo que é um reflexo do nosso novo bairro.</p>
                </div>       
            </div>
        );
    }
}
export default Conteudo;