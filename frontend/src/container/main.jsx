import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import PrincipalPage from '../components/PrincipalPage'
import SingleProduct from '../components/SingleProduct'
import Admin from '../components/Admin'

export default function Main(){


    return(
        <React.Fragment>

            <Switch>
             <Route  exact path="/products" component={PrincipalPage} />
             <Route exact path="/productos" render={({match})=> <SingleProduct match={match}/>} />  
            <Route  exact path="/admin" component={Admin} />
            <Redirect to= "/products" />
            </Switch>
        </React.Fragment>
    )
}