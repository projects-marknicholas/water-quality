import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";

const PlotlyCharts = ({ parameter, parameterName, filterOption, className }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://lspu.edu.ph/e-sentry/api/public/arduino/mikeparam"
      );
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Function to group data by the selected filter option (Day, Week, Month, Year)
  const groupDataByFilterOption = () => {
    const groupedData = {};
    const millisecondsInDay = 24 * 60 * 60 * 1000;
    data.forEach(entry => {
      const date = new Date(entry.datetime);
      let key;
      switch (filterOption) {
        case "Day":
          key = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
          break;
        case "Week":
          const firstDayOfWeek = new Date(date);
          firstDayOfWeek.setDate(date.getDate() - date.getDay());
          key = `${firstDayOfWeek.getFullYear()}-${firstDayOfWeek.getMonth() + 1}-${firstDayOfWeek.getDate()}`;
          break;
        case "Month":
          key = `${date.getFullYear()}-${date.getMonth() + 1}`;
          break;
        case "Year":
          key = `${date.getFullYear()}`;
          break;
        case "Hour":
          key = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}-${date.getHours()}`;
          break;
        default:
          key = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
      }
      if (!groupedData[key]) {
        groupedData[key] = [];
      }
      groupedData[key].push(parseFloat(entry[parameter]));
    });
    return groupedData;
  };

  const groupedData = groupDataByFilterOption();

  const xData = Object.keys(groupedData);
  const yData = xData.map(date => {
    const values = groupedData[date];
    // For simplicity, taking the average value for each date
    return values.reduce((acc, curr) => acc + curr, 0) / values.length;
  });

  const plotData = [
    {
      x: xData,
      y: yData,
      type: "scatter",
      mode: "lines+markers",
      marker: {
        size: 4,
        color: '#0463CA',
      },
      name: parameterName,
    },
  ];

  const layout = {
    title: parameterName,
    xaxis: {
      title: "Date",
    },
    yaxis: { title: "Value" },
    width: 430,
    height: 400,
    margin: {
      l: 50,
      r: 50,
      b: 100,
      t: 100,
      pad: 4,
    },
  };

  return (
    <div className={className} style={{ width: '100%', textAlign: 'center' }}>
      <Plot data={plotData} layout={layout} />
    </div>
  );
};

export default PlotlyCharts;
