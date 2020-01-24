import React from 'react';
import '../../App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward } from '@fortawesome/free-solid-svg-icons'

class Certificaciones extends React.Component {
  
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
                <h2><FontAwesomeIcon icon={faAward} /> Certificaciones</h2>
                <ul>
                {datos.certificaciones && datos.certificaciones.map( (item, index) => {
                return <li key={index}><strong>{item.certificado}</strong> {item.id && '#'+item.id} <br /> <em>{item.organismo}</em> </li>
                    }
                )
                }
                </ul>
            </div>
        );
    }
    }
}
export default Certificaciones;