import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
} from "chart.js";

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);

const ctx = document.getElementById("myChart").getContext("2d");
// Chart.defaults.global.defaultFontFamily = "lato";
// Chart.defaults.global.defaultFontSize = 18;
// Chart.defaults.global.defaultFontColor = "orange";
let massPopChart = new Chart(myChart, {
  type: "bar",
  data: {
    labels: ["a", "b"],
    datasets: [
      {
        label: "moslem",
        data: [1, 2],
        backgroundColor: ["red", "green"],
        borderWidth: 10,
        borderColor: "black",
        hoverBackgroundColor: "gray",
        hoverBorderWidth: 2,
        hoverBorderColor: "yellow",
      },
    ],
    options: { title: { display: true, text: "monfaredman is run" } },
  },
});
