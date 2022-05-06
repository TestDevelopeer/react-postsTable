import React from 'react';
import PostsTableContainer from "../PostsTable/PostsTableContainer";
import {Col, Container, Row} from "react-bootstrap";
import PaginationContainer from "../Pagination/PaginationContainer";
import SearchContainer from "../Search/SearchContainer";

const MainPage = () => {
    return (
        <Container>
            <Row>
                <Col lg={7}>
                    <SearchContainer/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <PostsTableContainer/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <PaginationContainer/>
                </Col>
            </Row>
        </Container>
    );
};

export default MainPage;
