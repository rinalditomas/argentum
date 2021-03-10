
import React from "react";
import '../App.css';
import {Route, Redirect, Switch} from "react-router-dom"
import SignUp from '../components/signUp'
import Login from '../components/login'

//ACA SE IMPORTAN LOS COMPONENTES


export default () => {

  return (
      // ACA VAN LAS RUTAS
      <React.Fragment>
        <section className="content">
          <Switch>
            <div className= 'App'>
            <Route  path= "/signup" component={SignUp} />
            <Route  path= "/login" component={Login} />
            </div>
          </Switch>
        </section>
      </React.Fragment>

  )
};