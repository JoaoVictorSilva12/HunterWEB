import React from 'react'
import Main from './Pages/main/index.js'
import Theme from './Pages/theme/index.js'
import Contact from './Pages/contact/index.js'
import {Switch, BrowserRouter, Route} from 'react-router-dom'

const Router = () =>{
    return(
        <BrowserRouter>
            <Switch>

                <Route exact path="/" component={Main}></Route>
                <Route path="/details/:id" component={Theme}></Route>
                <Route path="/contact" component={Contact}></Route>

            </Switch>
        </BrowserRouter>
    )
}
export default Router