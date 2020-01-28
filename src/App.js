import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

import config from './config.js'

import Experiencia from './components/Experiencia/'
import Formacion from './components/Formacion/'
import Certificaciones from './components/Certificaciones/'
import Proyectos from './components/Proyectos/'
import Cursos from './components/Cursos/'
import Publicaciones from './components/Publicaciones/'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'


firebase.initializeApp(config);

class App extends Component {
  
  constructor () {
    super();
    this.state = { 
      nombre: 'Pepe',
      isLoaded: false, 
      error:false,
      start:false
    };
    this.comenzar = this.comenzar.bind(this);
    this.volver = this.volver.bind(this);

  }
  
  componentDidMount(){
    
    const db = firebase.database().ref().child('cv')    
    
    db.on('value', snapshot => {
      setTimeout(function(){ 
        this.setState({ 
          datos: snapshot.val(),
          error:false,
          isLoaded: true
      })
      }.bind(this), 1000);
    })

  }

  comenzar = () => {
    this.setState({
        start:true,
      }
    );
  }

  volver = () => {
    this.setState({
        start:false,
      }
    );
  }

  render(){
        
    const {datos, isLoaded, start } = this.state;
    if (!isLoaded || !start) {
      return(
        <header className="App-header">
          <h1>SYSMANA XII - Enero 2020</h1>
          <h2>Construye tu portfolio con React y Firebase</h2>
          <img src={logo} className="App-logo" alt="logo" />
          <button type="button" className="btn btn-info" onClick={this.comenzar}>Continuar</button>
        </header>
        );
    } else {
      return (
        <div className="App">
          <div className="App-body">
            
            <img src={datos.foto} alt="" />

            <div className="nombre">
              <h2 className="mt-4" >{datos.nombre.toUpperCase()} {datos.apellido.toUpperCase()}</h2>
            </div>

            <div className="items">
            <Container>
              <Row className="justify-content-md-center">
                <Col xs="12" lg="12">            
                  <div className="text-justify">
                    <p>{datos.resumen}</p>
                  </div>
                  
                </Col>
              </Row>
              <Row className="justify-content-md-center">
                <Col xs="12" lg="4" className="d-flex">                
                  <Card body color="success" className="mx-auto my-2 text-dark flex-fill ">  
                    <Experiencia  datos={datos}  />
                  </Card>
                </Col> 
                <Col xs="12" lg="4" className="d-flex">
                  <Card body color="success" className="mx-auto my-2 text-dark flex-fill ">  
                    <Formacion datos={datos} />
                  </Card>
                </Col>
                <Col xs="12" lg="4" className="d-flex"> 
                <Card body color="success" className="mx-auto my-2 text-dark flex-fill ">  
                  <Certificaciones datos={datos} />
                </Card>
                </Col>
              </Row>
              <Row className="justify-content-md-center">
                <Col xs="12" lg="4" className="d-flex"> 
                <Card body color="success" className="mx-auto my-2 text-dark flex-fill ">  
                  <Proyectos datos={datos} />
                </Card>
                </Col>
                <Col xs="12" lg="4" className="d-flex"> 
                <Card body color="success" className="mx-auto my-2 text-dark  flex-fill">  
                  <Cursos datos={datos} />
                </Card>
                </Col>
                <Col xs="12" lg="4" className="d-flex"> 
                <Card body color="success" className="mx-auto my-2 text-dark  flex-fill">  
                  <Publicaciones datos={datos} />
                </Card>
                </Col>
              </Row>
              <Row className="justify-content-md-center">
                <Col xs="12" lg="12" className="d-flex"> 
                  <p className="mx-auto">
                  <a className="App-link" href={"mailto:"+datos.mail}><FontAwesomeIcon className="pt-1" icon={faEnvelope} /> {datos.mail}</a>
                  <a className="ml-4 App-link" href={datos.linkedin}><FontAwesomeIcon className="pt-1" icon={faLinkedin} /> LinkedIn</a>
                  <a className="ml-4 App-link" href={datos.github}><FontAwesomeIcon className="pt-1" icon={faGithub} /> Github</a>
                  </p>  
                  <button type="button" className="btn btn-info" onClick={this.volver}>Volver</button>
                </Col>
              </Row>
            </Container>             
            </div>
          </div>
        </div>
      );
    }
  }
}
export default App;
