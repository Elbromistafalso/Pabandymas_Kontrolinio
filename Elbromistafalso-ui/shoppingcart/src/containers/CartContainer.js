import React from 'react';
import axios from 'axios';
import CartComponent from '../components/CartComponent';
import UserService from '../services/user_service';

class CartContainer extends React.Component{

    constructor(props){

        super(props);
        this.state= {cities: []};
        
    }

    componentDidMount(){

        axios.get('/api/users/' + UserService.getUsername() + '/cities')
        .then((respone) => {

            this.setState({cities :respone.data})

        })
        .catch((error) => {

            console.log(error);
        })        
    }

    handleCityRemove = (city) => {

        axios.delete('/api/users/' + UserService.getUsername() + '/cities/' + city.id)
        .then((respone) => {

            this.setState({cities :respone.data})

        })
        .catch((error) => {

            console.log(error);
        })        
    }


    render(){
        return(
            <CartComponent cities={this.state.cities} onCityRemove={this.handleCityRemove}/>
        )
    }

    }

    export default CartContainer;

