// frontend/src/components/SummaryTable.js

import React from 'react';

const SummaryTable = ({ data }) => {
  const numOnes = data.filter(item => item.machine_status === 1).length;
  const numZeros = data.filter(item => item.machine_status === 0).length;

  return (
    <div>
      <h2>Summary</h2>
      <table>
        <thead>
          <tr>
            <th>Number of 1s</th>
            <th>Number of 0s</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{numOnes}</td>
            <td>{numZeros}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SummaryTable;
