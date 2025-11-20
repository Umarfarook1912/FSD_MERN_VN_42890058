import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import DoctorCard from '../components/DoctorCard';

const DoctorList = ({ doctors }) => {
  const navigate = useNavigate();

  return (
    <Row xs={1} md={3} className="g-4">
      {doctors.map((doctor) => (
        <Col key={doctor.id}>
          <DoctorCard doctor={doctor} onClick={(id) => navigate(`/details/${id}`)} />
        </Col>
      ))}
    </Row>
  );
};

export default DoctorList;
