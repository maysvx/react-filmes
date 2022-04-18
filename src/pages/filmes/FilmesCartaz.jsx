import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiFilmes from '../../services/apiFilmes'

function FilmesCartaz() {
    const [filmes, setFilmes] = useState([])

    useEffect(() => {

        apiFilmes.get('now_playing?language=pt-BR').then(resultado => {
            setFilmes(resultado.data.results)
        })

    }, [])

    return (
        <div className='cont'>
            <h1>Filmes em cartaz</h1>
            <br />
            <Row>
                {filmes.map(item => (

                    <Col md={3} className='mb-3'>

                        <Card className="rounded shadow">
                            <Link to={"/filmes/" + item.id}>
                                <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500/" + item.poster_path} />
                            </Link>
                        </Card>

                    </Col>
                ))
                }
            </Row>
        </div>
    )
}

export default FilmesCartaz;