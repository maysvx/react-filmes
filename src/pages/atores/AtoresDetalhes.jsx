import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import apiAtores from '../../services/apiAtores'


const AtoresDetalhes = () => {

    const params = useParams()
    const [ator, setAtor] = useState({})
    const [filmes, setFilmes] = useState([])


    useEffect(() => {
        apiAtores.get(params.id + '?language=pt-BR').then(resultado => {
            setAtor(resultado.data)
        })

        apiAtores.get( params.id + '/movie_credits?language=pt-BR').then(resultado => {
            setFilmes(resultado.data.cast);
        })
    }, [])

    return (
        <div className='cont'>
            <h1>{ator.name}</h1>
            <br />
            <Row>
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" className='shadow-lg rounded' src={'https://image.tmdb.org/t/p/w500/' + ator.profile_path} />
                    </Card>
                </Col>
                <Col md={8}>
                    <h5>Nascimento:</h5>
                    <p>{ator.birthday}</p>
                    <h5>Nacionalidade:</h5>
                    <p>{ator.place_of_birth}</p>
                    <h5>Ocupação:</h5>
                    <p>{ator.known_for_department}</p>
                    <h5>Biografia:</h5>
                    <p>{ator.biography}</p>
                    <br></br>
                    <Link className='btn btn-dark' to={-1}>Voltar</Link>

                </Col>
                <Col md={12} className="mt-3">
                    <h1>Filmes</h1>
                </Col>
                <Row>
                    {filmes.map(item => (
                        <Col className="mb-3" md={2} key={item.id}>
                            <Link to={'/filmes/' + item.id}>
                                <Card title={item.title}>
                                    <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.poster_path} />
                                </Card>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Row>
        </div>
    )
}

export default AtoresDetalhes