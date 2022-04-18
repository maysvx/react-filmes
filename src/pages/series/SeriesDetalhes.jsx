import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import apiSeries from '../../services/apiSeries'
import '../../App.css'
import { Link, useParams } from 'react-router-dom'

const SeriesDetalhes = () => {
    const params = useParams()

    const [series, setSeries] = useState([])
    const [atores, setAtores] = useState([])
    const [temporadas, setTemporadas] = useState([])

    useEffect(() => {
        apiSeries.get(params.id + '?language=pt-BR').then(resultado => {
            setSeries(resultado.data)
            setTemporadas(resultado.data.seasons)
        })

        apiSeries.get(params.id + '/credits?language=pt-BR').then(resultado => {
            setAtores(resultado.data.cast)
        })
    }, [])
    return (

        <div className='cont'>
            <h1>{series.name}</h1>
            <h3 className="text-secondary">{series.original_name}</h3>
            <br />
            <Row>
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" className='shadow-lg rounded' src={'https://image.tmdb.org/t/p/w500/' + series.poster_path} />
                    </Card>
                </Col>
                <Col md={8}>
                    <h5>Lançamento:</h5>
                    <p>{series.first_air_date}</p>
                    <h5>Popularidade:</h5>
                    <p>{series.popularity}</p>
                    <h5>Linguagem:</h5>
                    <p>{series.original_language}</p>
                    <h5>Sinopse:</h5>
                    <p>{series.overview}</p>

                    <Link className='btn btn-dark' to={-1}>Voltar</Link>

                </Col>
                <Col md={12} className="mt-3">
                    <h1>Temporadas</h1>
                </Col>
                <Row>
                    {temporadas.map(item => (
                        <Col className="mb-3" md={2} key={item.id}>
                                <Card title={item.name}>
                                    <Card.Img variant="top" className='rounded' src={'https://image.tmdb.org/t/p/w500/' + item.poster_path} />
                                </Card>
                        </Col>
                    ))}
                </Row>
                <Col md={12} className="mt-3">
                    <h1>Elenco</h1>
                </Col>
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

            </Row>

        </div>
    );
}

export default SeriesDetalhes;