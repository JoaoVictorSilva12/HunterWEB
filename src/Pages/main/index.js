import React, { Component} from 'react'
import api from '../../services/API/api.js'
import './style.css'
import {Link} from 'react-router-dom'


export default class Main extends Component{

    state = {
        themes: []
    }
    
    componentDidMount(){
        this.getProducts()
    }

    getProducts = async()=>{

        try {
            const response = await api.get()
            console.log(response)
            this.setState({themes: response.data.docs})
        } catch (error) {
            console.log(error)
        }
    }

    render(){
        return(
            <div id="main-container">
                
                    
                <div className='courses'>
                    {this.state.themes.map(theme =>{
                        return(
                            <article key={theme.id}>
                                <strong>{theme.title}</strong>
                                <p>{theme.description}</p>
                                <Link to={`/details/${theme.id + 1}`}>Detalhes</Link>
                            </article> 
                        )
                    })}
                    <h2 className="footer">Quantitade de tecnologias: {this.state.themes.length}</h2>
                </div>


            </div>
        )
    }
}