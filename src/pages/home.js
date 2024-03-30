import Navbar from './navbar'
import React, {useState, useEffect} from 'react'
import QualityScoreAnalysis from '../component/quality-score-analysis'
import QualityCategoryAnalysis from '../component/quality-category-analysis'
import AllParameters from '../component/all-parameters'

// Svg
import sampleSvg from '../assets/svg/sample.svg'
import oxygenSvg from '../assets/svg/oxygen.svg'
import temperatureSvg from '../assets/svg/temperature.svg'
import hydrogenSvg from '../assets/svg/hydrogen.svg'
import solidsSvg from '../assets/svg/solids.svg'

function Home(){

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://lspu.edu.ph/e-sentry/api/public/arduino/mikeparam');
      const jsonData = await response.json();
      const latestData = jsonData[0];
      setData([latestData]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return(
    <>
      {/* Navigation bar */}
      <Navbar/>

      {/* Main Content */}
      <div className='home-page'>
        <div className='home-flex'>
          <div className='hf-right'>
            <div className='hf-analysis-grid'>
              <QualityCategoryAnalysis
                ParameterName="Quality"
                ParameterData="Poor"
                Logo={sampleSvg}
              />
              {data.map((item, index) => (
                <>
                  <QualityScoreAnalysis
                    parameterData={item.temp}
                    parameterName="Temperature"
                    Logo={temperatureSvg}
                  />
                  <QualityScoreAnalysis
                    parameterData={item.ph}
                    parameterName="pH"
                    Logo={hydrogenSvg}
                  />
                  <QualityScoreAnalysis
                    parameterData={item.dosensor}
                    parameterName="Dissolved Oxygen"
                    Logo={oxygenSvg}
                  />
                  <QualityScoreAnalysis
                    parameterData={item.tds}
                    parameterName="Total Dissolved Solids"
                    Logo={solidsSvg}
                  />
                </>
              ))}
            </div>
          </div>
        </div>
        
        {/* Parameters */}
        <AllParameters/>
      </div>
    </>
  );
}

export default Home;