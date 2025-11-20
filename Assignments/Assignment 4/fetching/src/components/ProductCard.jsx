// src/components/ProductCard.jsx
import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';

const ProductCard = ({ product }) => (
  <Card style={{ transition: 'box-shadow .2s', minHeight: '420px' }} className="h-100 shadow-sm">
    <Card.Img
      variant="top"
      src={product.images && product.images[0] ? product.images[0] : 'https://placehold.co/600x400'}
      alt={product.title}
      style={{ height: '200px', objectFit: 'cover' }}
    />
    <Card.Body>
      <Card.Title>{product.title}</Card.Title>
      <Card.Text>
        {product.description.length > 80
          ? product.description.slice(0, 80) + '…'
          : product.description}
      </Card.Text>
      <Badge bg="success">₹ {product.price}</Badge>
      <div className="mt-2">
        <Badge bg="info">{product.category.name}</Badge>
      </div>
          
    </Card.Body>
  </Card>
);

export default ProductCard;
