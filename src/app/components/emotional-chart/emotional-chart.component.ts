import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChartOptions, EmotionalLabel } from '../../lib/utils/definition';
import { emotionalLabel } from '../../lib/datas/emotionalLabel';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-emotional-chart',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './emotional-chart.component.html',
  styleUrl: './emotional-chart.component.scss',
})
export class EmotionalChartComponent {
  emotionalLabels: EmotionalLabel[] = emotionalLabel;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    const data = this.emotionalLabels.map((emotion) => emotion.id);

    this.chartOptions = {
      series: data,
      chart: {
        type: 'donut',
      },
      labels: this.emotionalLabels.map((emotion) => emotion.label),
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
      fill: {
        colors: this.emotionalLabels.map((emotion) => emotion.color),
      },
      tooltip: {
        theme: 'dark',
      },
    };
  }
}
