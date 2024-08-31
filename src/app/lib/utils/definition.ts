import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexLegend,
  ApexFill,
  ApexTooltip,
  ApexTitleSubtitle,
} from 'ng-apexcharts';

export type Entries = {
  title: string;
  date: string;
};

export type EmotionalLabel = {
  id: number;
  label: string;
  color: string;
};

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  responsive: ApexResponsive[];
  legend: ApexLegend;
  fill: ApexFill;
  tooltip: ApexTooltip;
  title: ApexTitleSubtitle;
};
