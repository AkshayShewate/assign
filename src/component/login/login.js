import React, {useRef} from 'react';
import {Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
// import {DropdownButton, Dropdown} from  'react-dropdown'
import Dropdown from 'react-dropdown';

import { AsyncStorage } from 'AsyncStorage';

// const validEmailRegex = 
//   RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

  const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
    console.log(valid);
  };



export default class Login extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name : '',
            address : '',
            phone : '',
            password : '',
            isLoading: false,
            errors: {
                name : '',
                address : '',
                phone : '',
                password : '',
              }
        };
     }

     handleChange= (e, value)=> {

        this.setState({[value]:e.target.value});

    }

    checkValidation=(e, value)=>{
        e.preventDefault();
        // const { name, value } = e.target;
         let error = this.state.errors;
         console.log('check value', error)
            switch (value) {
                
            case 'name': 
                error.name = this.state.name.length < 3 ? 'First Name must be at least 3 characters long!' : '';
                this.setState({ errors : error});
                break;
            case 'password': 
                error.password =  this.state.password.length < 8 ? 'Password must be at least 8 characters long!' : '';
                this.setState({ errors : error});
                break;
            case 'phone': 
                var phoneno = /^\d{10}$/;
                error.phone =  this.state.phone.length < 10 && !this.state.phone.match(phoneno) ? 'Phone must be at least 3 characters long!' : '';
                this.setState({ errors : error});
                break;
            case 'address': 
                error.address = this.state.address.length < 5 ? 'Address must be at least 5 characters long!' : '';
                this.setState({ errors : error});
                break;
            default:
                return '';
            }
    }




      

    saveData=(e)=>{
        e.preventDefault();
        let registerData={
            name : this.state.name,
            address : this.state.address,
            phone : this.state.phone,
            password : this.state.password
        }

       
        if(validateForm(this.state.errors)) {
        // this.props.addUser(registerData);
        // localStorage.setItem('local',JSON.stringify(this.state));
        let myData = JSON.stringify(registerData)
        
        this.props.history.push(`/admin:${myData}`);

        // this.props.history.push({
        //     pathname: '/admin',
        //     myData: myData // your data array of objects
        //   })

        }
        else{
        console.error('Invalid Form')
        }

       

        //  AsyncStorage.setItem('userData',JSON.stringify(registerData));

      
      
    }

    renderInput(){

        return inputData.map((item, index)=>{
             const {errors} = this.state;
            return(

                <FormGroup row key={index} style={{width: '100%'}}>
                    <Label  for={index+''} sm={2}>{item.title}</Label>
                    <Col sm={10}>
                        <Input style={{width: '100%'}} type={item.title=="Password" ? "password" : ((item.key == 'Phone') || ( item.key == 'Pincode')) ? 'number' : 'text'}  name={item.name} id={index+''} placeholder={item.placeholder} value={this.state[item.key]}  onChange={(e)=>this.handleChange(e, item.key)} onBlur={(e)=>
                            {this.checkValidation(e, item.key)}}/>
                        {errors[item.key].length > 0 ? <span className='error'>{errors[item.key]}</span> : <div></div>}
                    </Col>
                   
                </FormGroup>
            )
        })
        
        
    }

    

    renderButton(){
        return(
            <FormGroup check row>
                <Col md={{ size: 30, offset: 2 }}>
                    <Button style={{backgroundColor: "gray"}} onClick={(e)=>this.saveData(e)}> Login </Button>
                </Col>
            </FormGroup>
        )
    }

    renderDropDown(){
        const options = [
            'Admin', 'User'
          ];
          const defaultOption = options[0];
        return(
            
              <Dropdown style={{borderColor: 'black', borderWidth: '1'}} height="100" width="200" options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
         )
     }

    render(){

    
        
        return(
            <div className="app" style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}>
                <Form>
                    {this.renderInput()}

                    {this.renderDropDown()}
                    
                    {this.renderButton()}
                </Form>       
            </div>
        )
    }

   

}

const inputData = [
    {
        title : 'Name',
        key : 'name',
        name : 'name',
        placeholder: 'Enter Your Name'
    },
    {
        title : 'Password',
        key : 'password',
        name : 'password',
        placeholder: 'Enter Password'
    },
    {
        title : 'Phone',
        key : 'phone',
        name : 'phone',
        placeholder: 'Enter Your phone'
    },

    {
        title : 'Address',
        key : 'address',
        name : 'address',
        placeholder: 'Enter Your address'
    }
]



