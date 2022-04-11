import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import apiFilmes from '../../services/apiFilmes'

const FilmesDetalhes = () => {
  
  const params = useParams()
  const [filmes, setFilmes] = useState([])

    useEffect(() => {

        apiFilmes.get('/movie/'+params.id+'?language=pt-BR').then(resultado =>{
            setFilmes(resultado.data)
        })

    } , [])
  
  return (
    <div>
      <h1>{filmes.title}</h1>
      <h3 className="text-secondary">{filmes.original_title}</h3>
      <br/>
      <Container>
        <Row>
          <Col xs={4}>
            <Card>
                <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500/" + filmes.poster_path} />
              </Card>
          </Col>
          <Col xs={6}>
            <h5>Sinopse</h5>
            <p>{filmes.overview}</p>
            <h5>Lançamento</h5>
            <p>{filmes.release_date}</p>
            <h5>Linguagem original</h5>
            <p>{filmes.original_language}</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FilmesDetalhes