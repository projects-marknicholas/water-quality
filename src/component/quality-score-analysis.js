import React from 'react'
import Gauge from './gauge'

const QualityScoreAnalysis = ({ parameterData, parameterName, Logo }) => {
  return (
    <div className='hf-analysis-item'>
      <div className='hf-analyze'>
        <p>{parameterName}</p>
        <div className="gauge-container">
          <Gauge value={parameterData} className="gauge" />
        </div>
        <img src={Logo} alt={parameterName} />
      </div>
    </div>
  );
};

export default QualityScoreAnalysis;
