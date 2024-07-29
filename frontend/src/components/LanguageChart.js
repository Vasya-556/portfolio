import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

// Define colors for the pie slices
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// Custom label formatter
const renderLabel = ({ name, percent }) => {
  // Format percentage to two decimal places
  const formattedPercent = (percent * 100).toFixed(2);
  return `${name} - ${formattedPercent}%`;
};

function LanguageChart({ data }) {
  // Convert data object to array of objects suitable for Recharts
  const formattedData = Object.entries(data).map(([key, value], index) => ({
    name: key,
    value,
    fill: COLORS[index % COLORS.length]
  }));

  return (
    <PieChart width={550} height={550}>
      <Pie
        data={formattedData}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={120}
        label={renderLabel}
      >
        {formattedData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.fill} />
        ))}
      </Pie>
      {/* <Tooltip /> */}
    </PieChart>
  );
}

export default LanguageChart;
