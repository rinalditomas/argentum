import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import PrincipalPage from '../components/PrincipalPage'
import SingleProduct from '../components/SingleProduct'
import Admin from '../components/Admin'
import SignUp from '../components/signUp'
import Login from '../components/login'
import SearchProd from '../components/SearchProd'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Shop from "../components/Shop";


export default function Main(){


    return(
        <React.Fragment>
        <Navbar />
            <Switch>
            <Route  path="/products" component={PrincipalPage} />
            <Route exact path= "/signup" component={SignUp} />
            <Route exact path= "/login" component={Login} />
            <Route exact path="/search/:id" render={({match})=> <SearchProd match={match}/>} />
            <Route exact path="/product/:id" render={({match})=> <SingleProduct match={match}/>} />
            <Route exact path='/admin' component={Admin} />
            <Route exact path='/shop' component={Shop} />
            <Redirect to= "/products" />
            </Switch>
            <Footer />
        </React.Fragment>
    )
}