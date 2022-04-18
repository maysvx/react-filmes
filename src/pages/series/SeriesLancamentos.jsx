import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import apiSeries from '../../services/apiSeries';

const SeriesLancamentos = () => {

  const [series, setSeries] = useState([])

  useEffect(() => {
    apiSeries.get(  'popular?language=pt-BR').then(resultado => {
      setSeries(resultado.data.results)
    })

  }, [])
  return (
    <div className='cont'>
      <h1>Lançamentos</h1>
      <br />
      <Row>
        {series.map(item => (
          <Col key={item.id} md={4} className="mb-3" >
            <Card className="rounded shadow">
              <Link to={'/series/' + item.id}>
                <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.backdrop_path} />
              </Link>
            </Card>
          </Col>
        ))
        }
      </Row>

    </div>
  );
}

export default SeriesLancamentos;