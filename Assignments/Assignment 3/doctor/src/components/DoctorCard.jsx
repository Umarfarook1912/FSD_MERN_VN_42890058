import React from 'react';
import { Card } from 'react-bootstrap';

const DoctorCard = ({ doctor, onClick }) => {
  return (
    <Card 
      onClick={() => onClick(doctor.id)}
      className="shadow-sm h-100"
      style={{ cursor: "pointer", borderRadius: "15px" }}
    >
      <Card.Img
        variant="top"
        src={doctor.photo || "https://via.placeholder.com/200"}
        style={{
          height: "180px",
          objectFit: "cover",
          borderTopLeftRadius: "15px",
          borderTopRightRadius: "15px"
        }}
      />

      <Card.Body className="text-center">
        <Card.Title>{doctor.name}</Card.Title>
        <Card.Text className="text-muted">
          {doctor.designation}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default DoctorCard;
