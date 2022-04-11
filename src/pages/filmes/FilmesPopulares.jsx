import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiFilmes from '../../services/apiFilmes'

const FilmesPopulares = () => {

    const [filmes, setFilmes] = useState([])

    useEffect(() => {

        apiFilmes.get('movie/popular?language=pt-BR').then(resultado =>{
            setFilmes(resultado.data.results)
        })

    } , [])

    return (
      <div>
          <h1>Filmes Populares</h1>
          <br/>

          <Row>
                {filmes.map(item =>(

                    <Col md= {3} className='mb-3'>

                        <Card >
                        <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500/" + item.poster_path} />
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"> ({item.original_title})</Card.Subtitle>
                            <Card.Text> {item.release_date}</Card.Text>
                            <br/>
                            <Link className="btn btn-danger" to={"/filmes/" + item.id}>Detalhes</Link>
                        </Card.Body>
                        </Card>
                    
                    </Col>
                    
                    
                    ))
                }
            </Row>

      </div>
    )
  }
  
  export default FilmesPopulares