import React from "react";

const MetricsOverview = ({ metrics }) => (
  <div className="metrics-overview grid">
    <div>Respiratory Rate: {metrics.respiratoryRate}</div>
    <div>Temperature: {metrics.temperature}°F</div>
    <div>Heart Rate: {metrics.heartRate} bpm</div>
  </div>
);

export default MetricsOverview;
