import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import apiFilmes from '../../services/apiFilmes'

const FilmesDetalhes = () => {

  const params = useParams()
  const [filmes, setFilmes] = useState([])
  const [atores, setAtores] = useState([])
  const [elenco, setElenco] = useState([])

  useEffect(() => {


    apiFilmes.get(params.id + '?language=pt-BR').then(resultado => {
      setFilmes(resultado.data)
    })

    apiFilmes.get(params.id + '/credits?language=pt-BR').then(resultado => {
      setAtores(resultado.data.cast)
      setElenco(resultado.data.crew)
    })
  }, [params.id])
  return (
    <div className='cont'>
      <h1>{filmes.title}</h1>
      <h3 className="text-secondary">{filmes.original_title}</h3>
      <br />
      <Container>
        <Row>
          <Col xs={4}>
            <Card className='shadow-lg rounded'>
              <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500/" + filmes.poster_path} />
            </Card>
          </Col>
          <Col xs={6}>
            <h5>Sinopse:</h5>
            <p>{filmes.overview}</p>
            <h5>Lançamento:</h5>
            <p>{filmes.release_date}</p>
            <h5>Popularidade:</h5>
            <p>{filmes.popularity}</p>
            <h5>Linguagem original:</h5>
            <p>{filmes.original_language}</p>
            <br /><br />
            <Link className='btn btn-dark' to={-1}>Voltar</Link>
          </Col>

          <Col md={12} className="mt-3">
            <h1>Atores</h1>
          </Col>
        </Row>

        <Row>
          {atores.map(item => (
            <Col className="mb-3" md={2} key={item.id}>
              <Link to={'/atores/' + item.id}>
                <Card title={item.name}>
                  <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.profile_path} />
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default FilmesDetalhes