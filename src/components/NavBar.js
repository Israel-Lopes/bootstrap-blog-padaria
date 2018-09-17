import React, { Component } from 'react';

import fundoprincipal from '../img/fundo-topo-2.jpg'
const NavBar = (props) =>{
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light navbar navbar-dark bg-dark">
            <a className="navbar-brand h1" href="#">Bom Gosto</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Inicio <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">FaceBook</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Instagram</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Opções
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="#">Preços</a>
                    <a className="dropdown-item" href="#">Contato</a>
                    <a className="dropdown-item" href="#">Onde nos encontrar</a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
          
        );
}
export default NavBar;