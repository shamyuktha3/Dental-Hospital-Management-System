import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { PatientContext } from '../context/PatientContext';

const AddPatient = () => {
  const { addPatient } = useContext(PatientContext);
  const history = useHistory();

  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = () => {
      addPatient({ 
        id:Date.now().toString(),name, age,roomStatus:'Available'});
      history.push('/'); // Navigate back to list
  };

  return (
    <div>
      <h1>Add New Patient</h1>
      <div>
        <input 
          placeholder="Patient Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          placeholder="Age" 
          value={age} 
          onChange={(e) => setAge(e.target.value)} 
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default AddPatient;