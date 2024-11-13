import React from 'react';
import data from '../data/pageData.json';
import Head from 'next/head';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const About = ({ pageData}) => {
  return (
   <>
  <Head>
        <title>{pageData.meta.title}</title>
        <meta name="description" content={pageData.meta.description} />
      </Head>
      <Container className="mt-5">
        <Row>
          <Col lg={8} className="mx-auto">
            <Card className="shadow-lg border-light">
              <Card.Body>
                <h1 className="display-4 ">{pageData.content.h1}</h1>
                <p className="lead text-muted">{pageData.content.description}</p>
          
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
   </>
  );
};


export async function getServerSideProps() {

  const pageData = data.website.routes.find(route => route.path === '/about');
  return {
    props: {
      pageData
    }
  };
}

export default About;
