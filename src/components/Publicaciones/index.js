import React from 'react';
import '../../App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChalkboardTeacher} from '@fortawesome/free-solid-svg-icons'


class Publicaciones extends React.Component {
  
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
                <h2><FontAwesomeIcon icon={faChalkboardTeacher} /> Publicaciones</h2>
                <ul>
                {datos.publicaciones && datos.publicaciones.map( (item, index) => {
                    return <li key={index}><strong>{item.titulo}</strong> <a href="www.google.com">+info</a></li>
                    }
                )
                }
                </ul>
            </div>
        );
    }
    }
}
export default Publicaciones;