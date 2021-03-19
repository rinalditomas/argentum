import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import PrincipalPage from '../components/PrincipalPage'
import SingleProduct from '../components/SingleProduct'
import AdminLogin from '../components/AdminLogin'
import Admin from '../components/Admin'
import SignUp from '../components/signUp'
import Login from '../components/login'
import SearchProd from '../components/SearchProd'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {useDispatch,useSelector} from "react-redux"
import {sendToken} from "../state/user"
import {sendToken2} from "../state/adminUser"
import panelAdmin from '../components/panelAdmin'
import Shop from "../components/Shop";

import AdminUser from '../components/AdminUser'
//import axios from 'axios'



import searchCategory from '../components/searchCategory'





export default function Main() {
  const dispatch = useDispatch()
  const user = useSelector(state => state)
  const token =localStorage.getItem("token")
  console.log("ACA ESTA EL USER DE USE.SELECTOR",user.name)

  React.useEffect(() => {
    if(token){
      /* axios.defaults.headers.authorization = `Bearer ${token}`; */
      dispatch(sendToken(token))
      dispatch(sendToken2(token))
    }
  }, []);
  React.useEffect(() => {
    if(token){
      /* axios.defaults.headers.authorization = `Bearer ${token}`; */
      dispatch(sendToken2(token))
    }
  }, []);


  return (
      
      <React.Fragment>
        {/* <section className="content"> */}

        <Navbar />
            <Switch>
            <Route  path="/products" component={PrincipalPage} />
            <Route exact path= "/signup" component={SignUp} />
            <Route exact path= "/login" component={Login} />
            <Route exact path="/search/:id" render={({match})=> <SearchProd match={match}/>} />
            <Route exact path="/product/:id" render={({match})=> <SingleProduct match={match}/>} />
            <Route exact path='/admin' component={panelAdmin} />
            <Route exact path='/admin/products' component={Admin} />
            <Route exact path='/admin/users' component={AdminUser} />
            <Route exact path='/admin/login' component={AdminLogin} />
            <Route exact path='/shop' component={Shop} />
            <Route exact path='/searchCategory' component={searchCategory} />
            <Redirect to= "/products" />
            </Switch>
            <Footer />
        </React.Fragment>
    )
}