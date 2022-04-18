import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiFilmes from '../../services/apiFilmes'

const FilmesLancamento = () => {

    const [filmes, setFilmes] = useState([])

    useEffect(() => {

        apiFilmes.get('upcoming?language=pt-BR').then(resultado => {
            setFilmes(resultado.data.results)
        })

    }, [])

    return (
        <div className='cont'>
            <h1>Filmes Lançamentos</h1>
            <br />
            <Row>
                {filmes.map(item => (
                    <Col key={item.id} md={4} className="mb-3">

                        <Card className="rounded shadow">
                            <Link to={'/filmes/' + item.id}>
                                <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.backdrop_path} />
                            </Link>
                        </Card>
                    </Col>
                ))
                }
            </Row>

        </div>
    )
}

export default FilmesLancamento