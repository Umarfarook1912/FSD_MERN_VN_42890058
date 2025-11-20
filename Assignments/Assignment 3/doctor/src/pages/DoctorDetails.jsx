import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, Container } from 'react-bootstrap';

const DoctorDetails = ({ doctors }) => {
  const { id } = useParams();
  const doctor = doctors.find((d) => d.id === Number(id));

  if (!doctor) return <p>Doctor not found</p>;

  return (
    <Container className="d-flex justify-content-center mt-4">
      <Card className="shadow-sm p-3" style={{ maxWidth: "600px", width: "100%" }}>
        
        <div className="text-center">
          <img
            src={doctor.photo || "https://via.placeholder.com/200"}
            style={{
              width: "150px",
              height: "150px",
              objectFit: "cover",
              borderRadius: "50%",
              marginBottom: "15px"
            }}
          />
        </div>

        <Card.Body className="text-center">
          <Card.Title>{doctor.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {doctor.designation}
          </Card.Subtitle>
          <Card.Text>{doctor.details}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default DoctorDetails;
