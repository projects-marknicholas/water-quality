import React from 'react';

const QualityCategoryAnalysis = ({ ParameterName, ParameterData, Logo }) => {
  return (
    <div className='hf-analysis-item'>
      <div className='hf-analyze'>
        <p>{ParameterName}</p>
        <h1 className={ParameterData}>{ParameterData}</h1>
        <img src={Logo} alt={ParameterName} />
      </div>
    </div>
  );
};

export default QualityCategoryAnalysis;
