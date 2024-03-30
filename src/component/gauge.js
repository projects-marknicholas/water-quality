import React from 'react';
import Plot from 'react-plotly.js';

const Gauge = ({ value, className }) => {
  // Determine tick color based on the value
  const tickColor = value < 33.33 ? 'green' : value < 66.66 ? 'blue' : 'red';

  const data = [
    {
      type: 'indicator',
      mode: 'gauge+number',
      value: value,
      title: {
        text: 'Gauge Chart',
        font: { size: 12 },
      },
      gauge: {
        axis: { range: [null, 100], tickwidth: 1, tickcolor: tickColor },
        bar: { color: tickColor },
        bgcolor: 'white',
        bordercolor: 'gray',
        steps: [
          { range: [0, 50], color: 'white' },
          { range: [50, 100], color: 'white' },
        ],
        threshold: {
          line: { color: tickColor, width: 4 },
          thickness: 0.3,
          value: 3,
        },
      },
    },
  ];

  const layout = {
    width: 100,
    height: 100,
    margin: { t: 10, b: 10, l: 10, r: 10 },
    font: { color: 'darkblue' },
  };

  return <Plot data={data} layout={layout} className={className} />;
};

export default Gauge;
