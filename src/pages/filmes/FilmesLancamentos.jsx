import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import apiFilmes from '../../services/apiFilmes';

function FilmesLancamentos() {

    const [filmes, setFilmes] = useState([])

    useEffect(() => {

        apiFilmes.get('movie/latest?language=pt-BR').then(resultado =>{
            setFilmes(resultado.data)
        })

    } , []) 

    return (

        <div>
          <h1>Ultimo lançamentos</h1>
          <br/>

          <Row>

                    <Col md= {3} className='mb-3'>

                        <Card>
                        <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500/" + filmes.poster_path} />
                        <Card.Body>
                            <Card.Title>{filmes.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"> ({filmes.original_title})</Card.Subtitle>
                            <Card.Text> {filmes.release_date}</Card.Text>
                            <br/>
                            <Link className="btn btn-danger" to={"/filmes/" + filmes.id}>Detalhes</Link>
                        </Card.Body>
                        </Card>
                    
                    </Col>
                    
            </Row>

      </div>
    );
  }
  
  export default FilmesLancamentos;