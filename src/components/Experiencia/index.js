import React from 'react';
import '../../App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'

class Experiencia extends React.Component {
  
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
            <div >
                <h2><FontAwesomeIcon icon={faBuilding} /> Experiencia</h2>
                <ul>
                {datos.experiencia && datos.experiencia.map( (item, index) => {
                    return <li key={index}><strong>{item.puesto}</strong> <em>{item.empresa}</em> <small>({item.fechainicio} - {item.fechafin})</small></li>
                    }
                )
                }
                </ul>
            </div>
        );
    }
    }
}
export default Experiencia;