import React, { useEffect } from "react";
import { options } from "../data/radialBarOptions";
import ApexCharts from "apexcharts";

const MultiRadialBarChart = () => {
  useEffect(() => {
    let chart = new ApexCharts(
      document.querySelector("#multiradialchart"),
      options
    );

    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div>
      <div>
        <div id="multiradialchart"></div>

        <ul>
          {options.labels.map((cur) => (
            <li style={{ listStyleType: "none" }}>
              <span
                style={{
                  borderRadius: "50px",
                  backgroundColor: "red",
                  width: "10px",
                  height: "10px",
                }}
              ></span>
              {cur}
            </li>
          ))}
        </ul>

        <h1>This is a MultiRadialBarChart</h1>
      </div>
    </div>
  );
};

export default MultiRadialBarChart;
