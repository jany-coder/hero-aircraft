import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Hero.css';
import { Container, Row, Col } from 'react-bootstrap';
import Ticket from '../Ticket/Ticket';


const Hero = ({ handleLogout }) => {

   
    return (
        <section>
            <nav>
                <h2>Welcome</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>

            <Container>
                <Row>
                    <Col>
                        <Ticket></Ticket>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;