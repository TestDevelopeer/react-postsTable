import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import s from './pagination.module.css';
import {Link} from "react-router-dom";

const Pagination = ({page, pagination, allPages}) => {

    return (
        <Container>
            <Row>
                <Col className={s.navigationButtons + ' text-start'}>
                    {page > 1 &&
                        <Link to={`/${page - 1}`}>Назад</Link>
                    }
                </Col>
                <Col className='text-center d-flex justify-content-center'>
                    {pagination}
                </Col>
                <Col className={s.navigationButtons + ' text-end'}>
                    {page < allPages &&
                        <Link to={`/${page + 1}`}>Далее</Link>
                    }
                </Col>
            </Row>
        </Container>
    );
};

export default Pagination;
