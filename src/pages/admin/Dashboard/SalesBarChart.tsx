import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

const SalesBarChart = () => {
  const options: ApexOptions = {
    chart: {
      type: "bar",
      id: "sales-bar-chart",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: [
        "Janvier",
        "Février",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Août",
        "Septembre",
        "Octobre",
        "Novembre",
        "Décembre",
      ],
    },
    yaxis: {},
    plotOptions: {
      bar: {
        distributed: false,
        horizontal: false,
      },
    },
    colors: ["#66B32E"],
  };

  const series = [
    {
      name: "Ventes",
      data: [10, 20, 15, 25, 30, 35, 40, 30, 25, 20, 30, 40],
    },
  ];

  return (
    <Chart
      options={options}
      series={series}
      type="bar"
      width="100%"
      height={300}
    />
  );
};

export default SalesBarChart;
