import React, { Component } from 'react';
import doce from '../img/doce.png';

class Card extends Component{
    render(){
        return(
                <div className="card text-dark bg-transparent mb-3" style={{maxWidth: "18rem"}}>
                    <div className="card-header">{this.props.text1}</div>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.text2}</h5>
                        <p className="card-text">{this.props.text3}</p>
                    </div>
                </div>
        );
    }
}

class CardImg extends Component{
    render(){
        return(
            <div className="card bg-transparent" style={{width: "18rem"}}>
            <img className="card-img-top" src={this.props.image} alt="Card image cap" style={{backgroundSize: "250px"}} />
            <div className="card-body">
            <h1>{this.props.title}</h1>  
              <p className="card-text text-dark">{this.props.text}</p>
            </div>
          </div>
        );
    }
}

class Conteudo extends Component{

    render(){
        return(
            <div>
                  <div className="container">
                  <br/>
                  <br/>
                        <div className="section-header " style={{textAlign: "center"}}>
                            <h1 className="dark-text">PRODUTOS</h1>
                            <h5 className="section-legend">Conheça nossos produtos</h5>
                        </div>  
                   <CardImg title="DOCES" image={doce} text="Dos pratos mais tradicionais, que a vovó fazia, a sobremesas de chefs renomados, veja uma reunião de doces que vão dar água na boca"/>  
                   
                        <div className="col-lg-3 col-sm-3 focus-box">
                            <h3 className="dark-text">DOCES</h3>
                            <h5>
                                <p>Dos pratos mais tradicionais, que a vovó</p> 
                                <p>fazia, a sobremesas de chefs renomados, veja</p>
                                <p>uma reunião de doces que vão dar água na boca</p>
                            </h5>
                        </div>

                        <div className="col-lg-3 col-sm-3 focus-box">
                            <h3>SALGADOS</h3>
                            <h5>
                                <p>Deliciosos salgados de qualidade e de </p>
                                <p>fabricação própria.</p>
                            </h5>
                        </div>
                        
                        <div className="col-lg-3 col-sm-3 focus-box">
                            <h3>TORTAS</h3>
                            <h5>
                                <p>Uma torta ou tarte é um alimento cozido </p>
                                <p>ao forno, feito com massa de farinha e </p>
                                <p>recheado com ingredientes de sua </p>
                                <p>preferência, tanto doces quanto salgados.</p>
                            </h5>
                        </div>

                        <div className="col-lg-3 col-sm-3 focus-box">
                            <h3>BOLOS</h3>
                            <h5>
                                <p>Bolo é um alimento à base de massa de </p>
                                <p>farinha, geralmente doce e cozido no </p>
                                <p>forno. Os bolos são um dos componentes </p>
                                <p>principais das festas!</p>
                            </h5>
                        </div>
                    </div>

                <div clasName="container" style={{display: "flex"}}>
                    <Card   text1="REFEIÇÕES MEMORÁVEIS" 
                                text2="Nós adoramos provar o nosso produto, depois compartilhar o quão bom ele provou. 
                                    Nós adoramos fazê-lo, depois compartilhá-lo com outras pessoas."
                                text3="Quando se trata de assar, trata-se de garantir que o produto que servimos seja fresco, os ingredientes são reais eo sabor é memorável."       
                                />
                        <Card   text1="NOSSA MISSÃO"
                                text2="A atmosfera geral em cada padaria Bom Gosto é quente, confortável e fresca"
                                text3="Construímos cada local da loja, sabendo que é um reflexo do nosso novo bairro."
                                /> 
                </div>       
            </div>
        );
    }
}
export default Conteudo;