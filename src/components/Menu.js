import React, { Component } from 'react';

import '../css/Menu.css';

class Menu extends Component{

    render(){
        return(
            <nav id="menu">
                        <ul>
                            <li><a href="#">INICIO</a></li>
                            <li><a href="#">INSTAGRAN</a></li>
                            <li><a href="#">FACEBOOK</a></li>
                        </ul>
                    </nav>
        );
    }
}
export default Menu;