import React from 'react';
import Gauge from './gauge';

const PercentageRangeGauge = ({ parameterData, parameterName, Logo }) => {
  const minPressure = 870;
  const maxPressure = 1085;

  // Calculate the range
  const range = maxPressure - minPressure;

  // Calculate the percentage
  const percentage = ((parameterData - minPressure) / range) * 100;

  return (
    <div className='hf-analysis-item'>
      <div className='hf-analyze'>
        <p>{parameterName}</p>
        <div className="gauge-container">
          <Gauge value={percentage.toFixed(2)} className="gauge" />
        </div>
        <img src={Logo} alt={parameterName} />
      </div>
    </div>
  );
};

export default PercentageRangeGauge;
