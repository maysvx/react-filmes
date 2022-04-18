import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import apiSeries from '../../services/apiSeries';
const SeriesNoAr = () => {

    const [series, setSeries] = useState([])

    useEffect(() => {
        apiSeries.get('on_the_air?language=pt-BR').then(resultado => {
            setSeries(resultado.data.results)
        })

    }, [])

    return (
        <div className='cont'>
            <h1>Séries no ar</h1>
            <br />
            <Row>
                {series.map(item => (

                    <Col md={3} className='mb-3'>

                        <Card >
                            <Link to={"/series/" + item.id}>
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

export default SeriesNoAr;