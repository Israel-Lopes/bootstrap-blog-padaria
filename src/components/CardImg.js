import React, { Component } from 'react';



class CardImg extends Component{
    render(){
        return(
            <div className="card-deck bg-transparent font-weight-bold text-monospace text-center" style={{width: "19rem"}}>
                <img className="card-img-top" src={this.props.image} alt="Card image cap" style={{position: "relative" , left: "80px", width: "130px", height: "130px"}} />
                <div className="card-body text-dark">
                    <h1>{this.props.title}</h1>  
                    <p className="card-text">{this.props.text}</p>
                </div>
            </div>
        );
    }
}
export default CardImg;