import React from 'react';
import '../../App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookReader} from '@fortawesome/free-solid-svg-icons'


class Cursos extends React.Component {
  
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
                <h2><FontAwesomeIcon icon={faBookReader} /> Cursos</h2>
                <ul>
                {datos.cursos && datos.cursos.map( (item, index) => {
                    return <li key={index}><strong>{item.titulo}</strong> - <em>{item.organismo}</em> <br />
                    <span><small>{item.descripcion}</small></span> </li>
                    }
                )
                }
                </ul>
            </div>
        );
    }
    }
}
export default Cursos;