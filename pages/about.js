import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

export async function getServerSideProps() {
    const filePath = path.join(process.cwd(), 'data', 'pageData.json');
    let pageData = null;

    try {

        const fileContent = fs.readFileSync(filePath, 'utf8');
        const data = JSON.parse(fileContent);
        pageData = data.website.routes.find(route => route.path === '/about');
    } catch (error) {
        console.error('Error reading the JSON file:', error);
    }

    return {
        props: { pageData },
    };
}

export default function About({ pageData }) {
    return (
        <div>
            <Head>
                <title>{pageData.meta.title}</title>
                <meta property="og:title" content={pageData.meta.title} />
                <meta property="og:description" content={pageData.meta.description} />
            </Head>
            <Container className="mt-5">
                <Row>
                    <Col lg={8} className="mx-auto">
                        <Card className="shadow-lg " style={{ background: 'transparent', color: 'black' }}>
                            <Card.Body>
                                <h1 className="text-center">{pageData?.meta.title}</h1>
                                <p className="text-center">{pageData?.meta.description}</p>
                                <h1 className="display-4 text-center mt-5">{pageData.content.h1}</h1>
                                <p className="lead   text-center">{pageData.content.description}</p>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}