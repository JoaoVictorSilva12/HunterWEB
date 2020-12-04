import React, { Component } from 'react'
import api from '../../services/API/api.js'
import './style.css'
import {Link} from 'react-router-dom'

export default class Theme extends Component{  

    state = {
        themes : {}
    }

    async componentDidMount(){

        const { id } = this.props.match.params
         
        const response = (await api.get(`/details/${id}`))
        console.log(response.data.docs)
        this.setState({themes: response.data.docs})
        console.log(this.state.themes)
        
 
    }

    render(){

        const detail = this.state.themes

        return(
            <div className="main-content">
                <div className="up">
                    <h2>{detail.title}</h2>
                    <p>{detail.description}</p>
                </div>

                <div className="middle">
                    <p>{detail.details}</p>
                </div>

                <div className="down">
                    <Link to="/" className="back">Voltar</Link>
                </div>


            </div>
        )
    }
        
    
}