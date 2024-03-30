import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BigPlotlyCharts from './plotly-charts'
import PlotlyCharts from './plotly-charts-small'

function Water() {
  const [selectedAnalysis, setSelectedAnalysis] = useState('All');
  const [filterOption, setFilterOption] = useState('Hour');

  const handleFilterChange = (e) => {
    setFilterOption(e.target.value);
  };

  const handleAnalysisChange = (e) => {
    setSelectedAnalysis(e.target.value);
  };

  const handleViewClick = (analysis) => {
    setSelectedAnalysis(analysis);
  };

  // Function to map selected analysis to parameter
  const getParameter = (selectedAnalysis) => {
    switch (selectedAnalysis) {
      case 'Temperature':
        return 'temp';
      case 'pH':
        return 'ph';
      case 'Dissolved Oxygen':
        return 'dosensor';
      case 'Total Dissolved Solids':
        return 'tds';
      default:
        return '';
    }
  };

  return (
    <div className='analysis-header'>
      <div className='flex-header'>
        {/* Dropdown for selecting time range */}
        <div className='header-inputs'>
          <span>Filter by: </span>
          <select onChange={handleFilterChange} value={filterOption}>
            <option value="Hour">Hour</option>
            <option value="Day">Day</option>
            <option value="Week">Week</option>
            <option value="Month">Month</option>
            <option value="Year">Year</option>
          </select>
        </div>

        {/* Dropdown for selecting analysis type */}
        <div className='header-inputs'>
          <select onChange={handleAnalysisChange} value={selectedAnalysis}>
            <option value="All">All</option>
            <option value="Temperature">Temperature</option>
            <option value="pH">pH</option>
            <option value="Dissolved Oxygen">Dissolved Oxygen</option>
            <option value="Total Dissolved Solids">Total Dissolved Solids</option>
          </select>
        </div>
      </div>

      {/* Conditional rendering based on selected analysis type */}
      {selectedAnalysis !== 'All' ? (
        <div className='whole-data-analyze'>
          <p>
            {selectedAnalysis} filtered by <span>{filterOption}</span>
          </p>
          <div className='graph'>
            <BigPlotlyCharts
              parameter={getParameter(selectedAnalysis)}
              parameterName = {selectedAnalysis}
              filterOption={filterOption} 
              className="plot-chart" 
            />
          </div>
        </div>
      ) : (
        <div className='data-analysis'>
          <div className='analysis-item'>
            <div className='custom-analysis'>
              <div className='home-map-flex'>
                <h1>Temperature</h1>
                <Link onClick={() => handleViewClick('Temperature')}>View →</Link>
              </div>
              <div className='graph'>
                <div className='plotly-chart'>
                  <PlotlyCharts 
                    parameter="temp"
                    parameterName = "Temperature"
                    filterOption={filterOption} 
                    className="plot-chart" 
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='analysis-item'>
            <div className='custom-analysis'>
              <div className='home-map-flex'>
                <h1>pH</h1>
                <Link onClick={() => handleViewClick('pH')}>View →</Link>
              </div>
              <div className='graph'>
                <div className='plotly-chart'>
                  <PlotlyCharts 
                    parameter="ph"
                    parameterName = "pH"
                    filterOption={filterOption} 
                    className="plot-chart" 
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='analysis-item'>
            <div className='custom-analysis'>
              <div className='home-map-flex'>
                <h1>Dissolved Oxygen</h1>
                <Link onClick={() => handleViewClick('Dissolved Oxygen')}>View →</Link>
              </div>
              <div className='graph'>
                <div className='plotly-chart'>
                  <PlotlyCharts 
                    parameter="dosensor"
                    parameterName = "Dissolved Oxygen"
                    filterOption={filterOption} 
                    className="plot-chart" 
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='analysis-item'>
            <div className='custom-analysis'>
              <div className='home-map-flex'>
                <h1>Total Dissolved Solids</h1>
                <Link onClick={() => handleViewClick('Total Dissolved Solids')}>View →</Link>
              </div>
              <div className='graph'>
                <div className='plotly-chart'>
                  <PlotlyCharts 
                    parameter="tds"
                    parameterName = "Total Dissolved Solids"
                    filterOption={filterOption} 
                    className="plot-chart" 
                  />
                </div>
              </div>
            </div>
          </div>
          {/* analysis items end */}
        </div>
      )}
    </div>
  );
};

export default Water;
