
import React from "react";
import {Route, Redirect, Switch} from "react-router-dom"
import SignUp from '../components/signUp'
import Login from '../components/login'
import PrincipalPage from '../components/PrincipalPage'
import SingleProduct from '../components/SingleProduct'
import Admin from '../components/Admin'


export default function Main() {

  return (
      
      <React.Fragment>
        {/* <section className="content"> */}
          <Switch>
            {/* <div className= 'App'> */}
            <Route  path="/products" component={PrincipalPage} />
            <Route exact path= "/signup" component={SignUp} />
            <Route exact path= "/login" component={Login} />
            <Route exact path="/productos" render={({match})=> <SingleProduct match={match}/>} />
            <Route exact path='/admin' component={Admin} />
            <Redirect to= "/products" />
            {/* </div> */}
          </Switch>
        {/* </section> */}
      </React.Fragment>

  )
};