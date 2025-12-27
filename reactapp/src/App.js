import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PatientProvider } from './context/PatientContext';
import Navbar from './components/Navbar';
import PatientList from './components/PatientList';
import AddPatient from './components/AddPatient';
import PatientDetails from './components/PatientDetails';
import RoomStatus from './components/RoomStatus';

function App() {
  return (
    <div>
     {/* <PatientProvider> */}
        <Navbar />
        <Switch>
          <Route exact path="/" component={PatientList} />
          <Route path="/add" component={AddPatient} />
          <Route path="/patient/:id" component={PatientDetails} />
          <Route path="/room/:id" component={RoomStatus} />
        </Switch>
    {/* </PatientProvider> */}
    </div>
  );
}

export default App;
