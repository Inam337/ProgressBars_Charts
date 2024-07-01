import { Component } from '@angular/core';

@Component({
  selector: 'app-progressbars-charts',
  templateUrl: './progressbars-charts.component.html',
  styleUrls: ['./progressbars-charts.component.scss'],
})
export class ProgressBarsChartsComponent {
  progressBarDataList = [
    {
      name: 'Present',
      color: '#00976C',
      value: 24,
    },
    {
      name: 'Temp-Duty',
      color: '#C9D795',
      value: 5,
    },
    {
      name: 'Course',
      color: '#FFF1AF',
      value: 30,
    },
    {
      name: 'Leave',
      color: '#F7C994',
      value: 20,
    },
    {
      name: 'Sec Duty',
      color: '#E57154',
      value: 20,
    },
    {
      name: 'Not Present',
      color: '#D43D51',
      value: 30,
    },
  ];

  getStyle(color: string, value: number): string {
    const generalStyle = `background-color: ${color}; width: ${value}%;`;
    // console.log('Get Style Data', generalStyle);
    return generalStyle;
  }

  getSingleStyle(color: string): string {
    const singleColor = `background-color: ${color};`;
    // console.log('Get Single Value', singleColor);
    return singleColor;
  }
}
