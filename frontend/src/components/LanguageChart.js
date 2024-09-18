import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const renderLabel = ({ name, percent }) => {
  const formattedPercent = (percent * 100).toFixed(2);
  return `${name} - ${formattedPercent}%`;
};

function LanguageChart({ data }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const formattedData = Object.entries(data).map(([key, value], index) => ({
    name: key,
    value,
    fill: COLORS[index % COLORS.length]
  }));

  const pieChartWidth = isMobile ? 300 : 550;
  const pieChartHeight = isMobile ? 300 : 550;
  const outerRadius = isMobile ? 80 : 120;

  return (
    <div className="LanguageChartContainer">
      <PieChart width={pieChartWidth} height={pieChartHeight}>
        <Pie
          data={formattedData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={outerRadius}
          label={isMobile ? undefined : renderLabel}
        >
          {formattedData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill} />
          ))}
        </Pie>
      </PieChart>
      {isMobile && (
        <div className="LanguageChartLabels">
          {formattedData.map((entry, index) => (
            <div key={index} style={{ color: entry.fill, marginBottom: '5px' }}>
              <span style={{ display: 'inline-block', width: '15px', height: '15px', backgroundColor: entry.fill, marginRight: '10px' }}></span>
              {entry.name} - {(entry.value / formattedData.reduce((acc, { value }) => acc + value, 0) * 100).toFixed(2)}%
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguageChart;
