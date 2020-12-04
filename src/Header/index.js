import React, {Component} from 'react'

import './style.css'

export default class Header extends Component{
    render(){
        return(
           
                    <div>
                        <header id="header">
                            <h3><strong>//</strong> HunterWEB</h3>
                            <div className="contact">
                                <a href="/contact" className="contact-link">Contato</a>
                            </div>
                        </header>
                    </div>
    
        )
    }
}

