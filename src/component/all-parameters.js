import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BigPlotlyCharts from './plotly-charts'
import PlotlyCharts from './plotly-charts-small'

function AllParameters() {
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

  const getParameter = (selectedAnalysis) => {
    switch (selectedAnalysis) {
      case 'Air Quality Index':
        return { parameter: 'AQI', predParam: 'aqi' };
      case 'Temperature':
        return { parameter: 'temperature', predParam: 'temp' };
      case 'Pressure':
        return { parameter: 'pressure', predParam: 'pressure' };
      case 'Humidity':
        return { parameter: 'humidity', predParam: 'humid' };
      case 'Gas':
        return { parameter: 'gas', predParam: 'gas' };
        case 'Altitude':
          return { parameter: 'altitude', predParam: 'altitude' };
      case 'Particular Matter':
        return { parameter: 'PM2_5', predParam: 'pm' };
      case 'Number Concentration':
        return { parameter: 'NC2_5', predParam: 'nc' };
      default:
        return { parameter: '', predParam: '' };
    }
  };  

  const { parameter, predParam } = getParameter(selectedAnalysis);

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
            <option value="Air Quality Index">Air Quality Index</option>
            <option value="Temperature">Temperature</option>
            <option value="Pressure">Pressure</option>
            <option value="Humidity">Humidity</option>
            <option value="Gas">Gas</option>
            <option value="Altitude">Altitude</option>
            <option value="PM 1.0">PM 1.0</option>
            <option value="PM 2.5">PM 2.5</option>
            <option value="PM 4.0">PM 4.0</option>
            <option value="PM 10">PM 10</option>
            <option value="NC 1.0">NC 1.0</option>
            <option value="NC 2.5">NC 2.5</option>
            <option value="NC 4.0">NC 4.0</option>
            <option value="NC 10">NC 10</option>
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
              parameter={parameter}
              predParam={predParam}
              parameterName={selectedAnalysis}
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
                <h1>Air Quality Index</h1>
                <Link onClick={() => handleViewClick('Air Quality Index')}>View →</Link>
              </div>
              <div className='graph'>
                <div className='plotly-chart'>
                  <PlotlyCharts 
                    parameter="AQI"
                    predParam="aqi"
                    parameterName = "Air Quality Index"
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
                <h1>Temperature</h1>
                <Link onClick={() => handleViewClick('Temperature')}>View →</Link>
              </div>
              <div className='graph'>
                <div className='plotly-chart'>
                  <PlotlyCharts 
                    parameter="temperature"
                    predParam="temp"
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
                <h1>Pressure</h1>
                <Link onClick={() => handleViewClick('Pressure')}>View →</Link>
              </div>
              <div className='graph'>
                <div className='plotly-chart'>
                  <PlotlyCharts 
                    parameter="pressure"
                    predParam="pressure"
                    parameterName = "Pressure"
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
                <h1>Humidity</h1>
                <Link onClick={() => handleViewClick('Humidity')}>View →</Link>
              </div>
              <div className='graph'>
                <div className='plotly-chart'>
                  <PlotlyCharts 
                    parameter="humidity"
                    predParam="humid"
                    parameterName = "Humidity"
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
                <h1>Gas</h1>
                <Link onClick={() => handleViewClick('Gas')}>View →</Link>
              </div>
              <div className='graph'>
                <div className='plotly-chart'>
                  <PlotlyCharts 
                    parameter="gas"
                    predParam="gas"
                    parameterName = "Gas"
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
                <h1>Altitude</h1>
                <Link onClick={() => handleViewClick('Altitude')}>View →</Link>
              </div>
              <div className='graph'>
                <div className='plotly-chart'>
                  <PlotlyCharts 
                    parameter="altitude"
                    predParam="altitude"
                    parameterName = "Altitude"
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
                <h1>PM 1.0</h1>
                <Link onClick={() => handleViewClick('PM 1.0')}>View →</Link>
              </div>
              <div className='graph'>
                <div className='plotly-chart'>
                  <PlotlyCharts 
                    parameter="PM1_0"
                    predParam="pm"
                    parameterName = "PM 1.0"
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
                <h1>PM 2.5</h1>
                <Link onClick={() => handleViewClick('PM 2.5')}>View →</Link>
              </div>
              <div className='graph'>
                <div className='plotly-chart'>
                  <PlotlyCharts 
                    parameter="PM2_5"
                    predParam="pm"
                    parameterName = "PM 2.5"
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
                <h1>PM 4.0</h1>
                <Link onClick={() => handleViewClick('PM 4.0')}>View →</Link>
              </div>
              <div className='graph'>
                <div className='plotly-chart'>
                  <PlotlyCharts 
                    parameter="PM4_0"
                    predParam="pm"
                    parameterName = "PM 4.0"
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
                <h1>PM 10</h1>
                <Link onClick={() => handleViewClick('PM 10')}>View →</Link>
              </div>
              <div className='graph'>
                <div className='plotly-chart'>
                  <PlotlyCharts 
                    parameter="PM10"
                    predParam="pm"
                    parameterName = "PM 10"
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
                <h1>NC 1.0</h1>
                <Link onClick={() => handleViewClick('NC 1.0')}>View →</Link>
              </div>
              <div className='graph'>
                <div className='plotly-chart'>
                  <PlotlyCharts 
                    parameter="NC1_0"
                    predParam="nc"
                    parameterName = "NC 1.0"
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
                <h1>NC 2.5</h1>
                <Link onClick={() => handleViewClick('NC 2.5')}>View →</Link>
              </div>
              <div className='graph'>
                <div className='plotly-chart'>
                  <PlotlyCharts 
                    parameter="NC2_5"
                    predParam="nc"
                    parameterName = "NC 2.5"
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
                <h1>NC 4.0</h1>
                <Link onClick={() => handleViewClick('NC 4.0')}>View →</Link>
              </div>
              <div className='graph'>
                <div className='plotly-chart'>
                  <PlotlyCharts 
                    parameter="NC4_0"
                    predParam="nc"
                    parameterName = "NC 4.0"
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
                <h1>NC 10</h1>
                <Link onClick={() => handleViewClick('NC 10')}>View →</Link>
              </div>
              <div className='graph'>
                <div className='plotly-chart'>
                  <PlotlyCharts 
                    parameter="NC10"
                    predParam="nc"
                    parameterName = "NC 10"
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

export default AllParameters;
