import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { PatientProvider } from './context/PatientContext';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

// Rendering the App within StrictMode for identifying potential problems
ReactDOM.render(
 <BrowserRouter>
<PatientProvider>
  <App />
  </PatientProvider>
 </BrowserRouter>,
 document.getElementById('root')
);

	
