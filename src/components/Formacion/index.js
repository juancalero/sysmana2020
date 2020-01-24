import React from 'react';
import '../../App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons'

class Formacion extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
            datos: props.datos,
            isLoaded: true,
            error: false     
        }        
    }
    
  componentDidMount(){

  }

  render(){ 
    const {datos, isLoaded, error } = this.state;
    if (!isLoaded) {
     return(<div>Loading...</div>);
    }else if(error){
        return(<div>Error...</div>);
    }
    else {
        return (
            <div>
                <h2><FontAwesomeIcon icon={faUserGraduate} /> Formacion</h2>
                <ul>
                {datos.formacion && datos.formacion.map( (item, index) => {
                return <li key={index}><strong>{item.titulo}</strong> <br /> <em>{item.centro}</em></li>
                    }
                )
                }
                </ul>
            </div>
        );
    }
    }
}
export default Formacion;