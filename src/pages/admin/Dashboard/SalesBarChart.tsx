import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

const SalesBarChart = (props: {
	data?: { label: string; value: number }[];
}) => {
	const { data } = props;
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
			data: data?.map((item) => item.value) ?? [],
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
