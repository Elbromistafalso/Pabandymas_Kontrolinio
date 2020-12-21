import React from 'react';
import Proptypes from 'prop-types';

let CartComponent = (props) =>{

    let cities = props.cities.map((city, index) => {

        return(
            <tr key={index}>
                <td><image src={city.imgUrl}></image></td>
                <td>{city.name}</td>
                <td><button className="btn btn-danger" onClick={props.onCityRemove(city)}></button></td>
            </tr>

        );

    })

        return(

            <div>
              <table className="table">
                <tbody>
                  {cities}
                </tbody>
              </table>
            </div>
        );

}

CartComponent.propTypes = {

    cities: Proptypes.array.isRequired,
    onCityRemove: Proptypes.func.isRequired
}

export default CartComponent;
