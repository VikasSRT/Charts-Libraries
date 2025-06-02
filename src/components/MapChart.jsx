import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";
import { option, GeoJsonUrl } from "../data/usa";

const MapChart = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    fetch(GeoJsonUrl)
      .then((res) => res.json())
      .then((geoJson) => {
        echarts.registerMap("USA", geoJson);
        setReady(true);
      });
  }, []);

  return ready ? (
    <ReactECharts option={option} style={{ height: "600px", width: "100%" }} />
  ) : (
    <>
      <div>Loading map...</div>
      <h3>here is also a commit hash</h3>
    </>
  );
};

export default MapChart;
