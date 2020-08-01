import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../component/login/login'
import Admin  from '../component/admin/admin'
import Dashboard from '../component/dashbord/dashboard'


 
export default class Routes extends React.Component {
   render(){
   return(
       <Switch>
           <Route exact path="/"  component={Login} />
           <Route path="/admin:myData" component={Admin} />
           <Route path="/dashboard" component={Dashboard} />
        </Switch>
        
   )
   }
}