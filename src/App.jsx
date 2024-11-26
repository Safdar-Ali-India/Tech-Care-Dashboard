// App.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import MetricsOverview from "./components/MetricsOverview";
import BloodPressureGraph from "./components/BloodPressureGraph";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.example.com/patient-data/jessica-taylor"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="app">
      <Sidebar patients={data.patients} />
      <main>
        <Header />
        <MetricsOverview metrics={data.metrics} />
        <BloodPressureGraph data={data.bloodPressure} />
      </main>
    </div>
  );
};

export default App;
