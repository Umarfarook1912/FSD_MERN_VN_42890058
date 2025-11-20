import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Spinner, Alert } from 'react-bootstrap';
import ProductCard from './components/ProductCard';
import AppNavbar from './components/Navbar';

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get('https://api.escuelajs.co/api/v1/products')
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch products.');
        setLoading(false);
      });
  }, []);

  // Filter products by title (case-insensitive)
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
    <AppNavbar/>
      <Container className="mt-4">
        <h2 className="mb-4 text-center">Product Catalog</h2>
        <Form className="mb-4">
          <Form.Control
            type="text"
            placeholder="Search products…"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </Form>
        {loading ? (
          <div className="text-center">
            <Spinner animation="border" />
          </div>
        ) : error ? (
          <Alert variant="danger">{error}</Alert>
        ) : (
          <Row xs={1} md={2} lg={3} className="g-4">
            {filteredProducts.map(product => (
              <Col key={product.id}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
}

export default App;
