import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import PrincipalPage from '../components/PrincipalPage'
import SingleProduct from '../components/SingleProduct'

export default function Main(){


    return(
        <React.Fragment>

            <Switch>
            <Route  path="/products" component={PrincipalPage} />
             <Route exact path="/productos" render={({match})=> <SingleProduct match={match}/>} />  
            <Redirect to= "/products" />
            </Switch>
        </React.Fragment>
    )
}