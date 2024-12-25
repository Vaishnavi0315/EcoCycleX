import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import './HomePage.css';
import logo1 from './agri.png';
import logo2 from './ecowheel.png';
import logo3 from './matric.png';
import logo4 from './ESus.png';
import logo5 from './SSus.png';
import logo6 from './EcoSus.png';
import '@fortawesome/fontawesome-free/css/all.min.css';




const HomePage = () => {
  return (
    <div className="homepage-container">
      <header className="hero-section">
        <Container>
          <Row>
            <Col>
              <h1>Welcome to the Sustainable Food Ecosystem Platform</h1>
              <p style={{ color: '#f0f9f0' }}>
                A comprehensive and interactive platform designed to support and promote sustainable food practices through collaboration, resource management, and education.
              </p>
            </Col>
          </Row>
        </Container>
      </header>
      <section className="intro-section">
        <Container>
          <Row>
            <Col>
              <ScrollAnimation animateIn="fadeInUp">
                <h2>About Our Platform</h2>
                <p style={{ color: '#333' }}>
                  The Sustainable Food Ecosystem Platform is dedicated to fostering a more sustainable and resilient food system by bridging the gap between various stakeholders. We connect urban farmers who implement innovative agricultural practices within city environments, sustainable food producers who prioritize eco-friendly production methods, consumers seeking healthier and more ethical food choices, and educators who disseminate knowledge about sustainability. This platform facilitates the sharing of valuable knowledge, resources, and best practices, creating a collaborative environment where all participants can contribute to and benefit from a more sustainable and efficient food ecosystem. By promoting communication and cooperation among these diverse groups, we aim to address the pressing challenges of food insecurity, environmental degradation, and resource inefficiency, ultimately enhancing the resilience and sustainability of the entire food system.
                </p>
              </ScrollAnimation>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="content-section">
        <Container>
          <Row>
            <Col md={4}>
              <ScrollAnimation animateIn="fadeInUp" delay={200}>
                <Card className="mb-4">
                  <Card.Body>
                  <Card.Img className='EcoSus' src={logo6} alt="SF"/>
                    <Card.Title>Economic Sustainability</Card.Title>
                    <Card.Text>
                      Ensuring the profitability of the food system while supporting local economies and fair trade practices.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </ScrollAnimation>
            </Col>
            <Col md={4}>
              <ScrollAnimation animateIn="fadeInUp" delay={400}>
                <Card className="mb-4">
                  <Card.Body>
                  <Card.Img  className='SSus' src={logo5} alt="SF"/>
                    <Card.Title>Social Sustainability</Card.Title>
                    <Card.Text>
                      Promoting social equity and community well-being through inclusive and fair food systems.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </ScrollAnimation>
            </Col>
            <Col md={4}>
              <ScrollAnimation animateIn="fadeInUp" delay={600}>
                <Card className="mb-4">
                  <Card.Body>
                  <Card.Img className='ESus' src={logo4} alt="SF"/>
                    <Card.Title>Environmental Sustainability</Card.Title>
                    <Card.Text>
                      Reducing the environmental impact of food production, packaging, and distribution.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </ScrollAnimation>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="features-section">
        <Container>
          <Row>
            <Col md={4}>
              <ScrollAnimation animateIn="fadeInUp">
                <Card className="feature-card">
                  <Card.Body>
                    <Card.Img src={logo1} alt="SF"/>
                    <Card.Title>Food Ecosystem Mapping</Card.Title>
                    <Card.Text>
                      Visualize and interact with data related to sustainable food sources, urban farms, and agricultural practices.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </ScrollAnimation>
            </Col>
            <Col md={4}>
              <ScrollAnimation animateIn="fadeInUp" delay={200}>
                <Card className="feature-card">
                  <Card.Body>
                    <Card.Img src={logo2} alt="SF"/>
                    <Card.Title>Resource Management</Card.Title>
                    <Card.Text>
                      Manage and track resources such as food production, waste, and distribution efficiently.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </ScrollAnimation>
            </Col>
            <Col md={4}>
              <ScrollAnimation animateIn="fadeInUp" delay={400}>
                <Card className="feature-card">
                  <Card.Body>
                    <Card.Img src={logo3} alt="SF"/>
                    <Card.Title>Sustainability Metrics</Card.Title>
                    <Card.Text>
                      Gain insights into sustainability metrics and generate comprehensive reports.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </ScrollAnimation>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="problem-section">
        <Container>
          <Row>
            <Col>
              <ScrollAnimation animateIn="fadeInUp">
                <h2>Global Food System Challenges</h2>
                <p>
                  The global food system faces significant challenges, including food insecurity, environmental degradation, and inefficient resource use. Urbanization and population growth exacerbate these issues, putting immense pressure on traditional agricultural practices.
                </p>
                <p>
                  Broken food systems are not inevitable. They are the result of choices we have made. There is more than enough food in the world to go around. More than enough money to fund efficient and sustainable food systems to feed the world, while supporting decent work for those who grow the food we eat.
                </p>
              </ScrollAnimation>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="testimonials-section">
        <Container>
          <Row>
            <Col>
              <ScrollAnimation animateIn="fadeInUp">
                <h2>What Our Users Say</h2>
                <blockquote>
                  <p>
                    "The Sustainable Food Ecosystem Platform has revolutionized how we manage our resources and collaborate with others in the community."
                  </p>
                  <footer>- Jane Doe, Urban Farmer</footer>
                </blockquote>
                <blockquote>
                  <p>
                    "This platform provides invaluable insights and tools that help us promote sustainable food practices."
                  </p>
                  <footer>- John Smith, Sustainable Food Producer</footer>
                </blockquote>
              </ScrollAnimation>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="cta-section">
        <Container>
          <Row>
            <Col>
              <ScrollAnimation animateIn="fadeInUp">
                <h2>Join Us in Creating a Sustainable Future</h2>
                <p style={{ color: '#f0f9f0' }}> 
                  Sign up today to access our comprehensive tools and resources for promoting sustainable food practices.
                </p>
                <Link to="/sampleregister.js">
                  <Button variant="primary">Sign Up Now</Button>
                </Link>
              </ScrollAnimation>
            </Col>
          </Row>
        </Container>
      </section>

      <footer className="footer-section" style={{ backgroundColor: '#333', padding: '20px 0' }}>
  <Container>
    <Row className="text-center">
      <Col>
        <p style={{ color: '#f0f9f0' }}>
          &copy; 2024 Sustainable Food Ecosystem Platform. All rights reserved.
        </p>
        <div style={{ marginTop: '10px' }}>
          <a href="vaishnavi.bachwal@gmail.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
            <i className="fas fa-envelope" style={{ color: 'white', fontSize: '20px' }}></i>
          </a>
          {"vaishnavi.bachwal@gmail.com"}
          <a href="9769200378" style={{ margin: '0 10px' }}>
            <i className="fas fa-phone-alt" style={{ color: 'white', fontSize: '20px' }}></i>
          </a>{
            "9769200378"
          }
          <a href="https://github.com/Vaishnavi0315" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
            <i className="fab fa-github" style={{ color: 'white', fontSize: '20px' }}></i>
          </a>
          <a href="https://www.linkedin.com/in/vaishnavi-bachwal-2b6083214/" target="_blank" re  l="noopener noreferrer" style={{ margin: '0 10px' }}>
            <i className="fab fa-linkedin" style={{ color: 'white', fontSize: '20px' }}></i>
          </a>
        </div>
      </Col>
    </Row>
  </Container>
</footer>

    </div>
  );
};

export default HomePage;
