import React from 'react';
import ServerTable from 'react-strap-table';

import './style.css'
import { AsyncStorage } from 'AsyncStorage';
class Admin extends React.Component {
    constructor(props){
        super(props);
        this.state = { //state is by default an object
            data: [
               { id: 1, name: 'user1', phone: 15265763278, address: 'pune' },
               { id: 2, name: 'user2', phone: 13232422, address: 'pine' },
               { id: 3, name: 'user3', phone: 34545446, address: 'pune' },
               { id: 4, name: 'user4', phone: 35435435, address: 'pube' }
            ]
         }
      }

    componentDidMount(){
        console.log('getdata', this.props.match.params.myData);
    }

    renderTableData() {
        return this.state.data.map((item, index) => {
           const { id, name, phone, address } = item //destructuring
           return (
              <tr key={id}>
                 <td>{id}</td>
                 <td>{name}</td>
                 <td>{phone}</td>
                 <td>{address}</td>
              </tr>
           )
        })
     }

     renderTableHeader() {
        let header = Object.keys(this.state.data[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }

    render(){
        
        const url = '';
        const columns = ['id', 'Name', 'Phone', 'Address'];
        const options = {  
        headings: {id: '#', },  
        sortable: ['Name', 'Phone', 'Address']  
        };  
      return (
          
            <div>
                <h1>
                    You in Admin
                </h1>   
                <table id='students'>
                    <tbody>
                    <tr>{this.renderTableHeader()}</tr>

                        {this.renderTableData()}
                    </tbody>
                    </table>
            </div>
            
      );
    }


}


export default Admin