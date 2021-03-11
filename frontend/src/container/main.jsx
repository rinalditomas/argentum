
import React from "react";
import {Route, Redirect, Switch} from "react-router-dom"
import SignUp from '../components/signUp'
import Login from '../components/login'
import PrincipalPage from '../components/PrincipalPage'
import SingleProduct from '../components/SingleProduct'
import Admin from '../components/Admin'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SearchProd from '../components/SearchProd'
import Shop from "../components/Shop";




export default function Main() {

  return (
      
      <React.Fragment>
        {/* <section className="content"> */}
        <Navbar />
          <Switch>
            {/* <div className= 'App'> */}
            <Route  path="/products" component={PrincipalPage} />
            <Route exact path= "/signup" component={SignUp} />
            <Route exact path= "/login" component={Login} />
            <Route exact path="/search" render={({match})=> <SearchProd match={match}/>} />
            <Route exact path="/product/:id" render={({match})=> <SingleProduct match={match}/>} />
            <Route exact path='/admin' component={Admin} />
            <Route exact path='/shop' component={Shop} />
            <Redirect to= "/products" />
            {/* </div> */}
          </Switch>
          <Footer />
        {/* </section> */}
      </React.Fragment>

  )
};