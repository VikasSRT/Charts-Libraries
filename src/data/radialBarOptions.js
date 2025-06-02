export const options = {
  series: [91, 83, 67, 55, 44, 25],
  chart: {
    height: 300,
    type: "radialBar",
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: "30%",
        margin: 0,
      },
      dataLabels: {
        name: {
          //   show: false,
          fontSize: "22px",
        },
        value: {
          //   show: false,
          fontSize: "16px",
        },
        // total: {
        //   show: true,
        //   label: "Total",
        //   formatter: function (w) {
        //     // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
        //     console.log("w", w.globals.seriesTotals);
        //     const total = w.globals.seriesTotals.reduce(
        //       (curVal, acc) => curVal + acc,
        //       0
        //     );
        //     console.log(total);
        //     return total;
        //   },
        // },
      },
    },
  },
  labels: [
    "General",
    "Accounting",
    "Webinar",
    "Conference",
    "Certifications",
    "Awards",
  ],
  colors: ["#14B8A6", "#3B82F6", "#6366F1", "#EC4899", "#F59E0B", "#FACC15"],
};
