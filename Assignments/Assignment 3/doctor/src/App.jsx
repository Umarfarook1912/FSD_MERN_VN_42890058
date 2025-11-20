import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DoctorForm from './pages/DoctorForm';
import DoctorList from './pages/DoctorList';
import DoctorDetails from './pages/DoctorDetails';
import NavbarComponent from './components/NavbarComponent';


function App() {
  const [doctors, setDoctors] = useState([]);

  const addDoctor = (doctor) => {
    setDoctors([...doctors, doctor]);
  };

  return (
    <Router>
      <NavbarComponent />
      <div className="container-fluid mt-3 px-4">
        <Routes>
          <Route path="/" element={<DoctorList doctors={doctors} />} />
          <Route path="/add" element={<DoctorForm addDoctor={addDoctor} />} />
          <Route path="/details/:id" element={<DoctorDetails doctors={doctors} />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
