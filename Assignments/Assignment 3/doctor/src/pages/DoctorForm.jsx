import React, { useState } from 'react';
import { Form, Button, Card, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const DoctorForm = ({ addDoctor }) => {
  const [doctorData, setDoctorData] = useState({
    photo: '',
    name: '',
    designation: '',
    details: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setDoctorData({ ...doctorData, [e.target.name]: e.target.value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setDoctorData((prev) => ({ ...prev, photo: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addDoctor({ id: Date.now(), ...doctorData });
    navigate('/');
  };

  return (
    <Container className="d-flex justify-content-center mt-4">
      <Card className="p-4 shadow-sm" style={{ width: "100%", maxWidth: "500px" }}>
        <h4 className="mb-4 text-center">Add Doctor</h4>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Upload Photo</Form.Label>
            <Form.Control type="file" accept="image/*" onChange={handlePhotoChange} />

            {doctorData.photo && (
              <div className="text-center mt-3">
                <img src={doctorData.photo} height="120" style={{ borderRadius: "10px" }} />
              </div>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={doctorData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Designation</Form.Label>
            <Form.Control
              type="text"
              name="designation"
              value={doctorData.designation}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Details</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="details"
              value={doctorData.details}
              onChange={handleChange}
            />
          </Form.Group>

          <Button type="submit" className="w-100">
            Save Doctor
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default DoctorForm;
