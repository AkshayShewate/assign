import React from 'react';

import './style.css'
import { AsyncStorage } from 'AsyncStorage';


class Dashboard extends React.Component {
    constructor(props){
        super(props);
      }
    render(){
      return (
            <div>
                <h1>
                    You in Dashboard
                </h1>    
            </div>
    
      );
    }


}


export default Dashboard