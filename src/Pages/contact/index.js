import React, { Component} from 'react'
import './style.css'

export default class Contact extends Component{
    render(){

        return(
            <div className="main">
                <div className="sub">
                    <article>
                        <h3>Developer:</h3>
                        <p>João Victor Picanço da Silva - Manaus/AM - Brazil</p>
                    </article>
                    <article>
                        <h3>E-mail adress:</h3>
                        <p className="email">satinyginger276@gmail.com</p>
                    </article>
                    <article>
                        <h3>Tel.</h3>
                        <p>+55 92 99469-8038</p>
                    </article>
                </div>
            </div>
        )

    }
}