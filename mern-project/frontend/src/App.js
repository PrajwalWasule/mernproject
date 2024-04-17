// frontend/src/App.js

import React, { useState, useEffect } from 'react';
import PlotComponent from './components/PlotComponent';
import SummaryTable from './components/SummaryTable';

const App = () => {
  // Sample data state
  const [sampleData, setSampleData] = useState([]);

  // Fetch sample data from backend
  useEffect(() => {
    // Fetch sample data from backend API
    fetch('/api/data')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setSampleData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>MERN Stack Sample Data UI</h1>
      <PlotComponent data={sampleData} />
      <SummaryTable data={sampleData} />
    </div>
  );
};

export default App;
