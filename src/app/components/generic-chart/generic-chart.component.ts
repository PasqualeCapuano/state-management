import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { DataState } from 'src/app/store/data.state';

@Component({
  selector: 'app-generic-chart',
  templateUrl: './generic-chart.component.html',
  styleUrls: ['./generic-chart.component.css']
})
export class GenericChartComponent implements OnInit {
  subscribed: Subscription | undefined;
  dataSource: string[] = [];
  chartType: {} = {};

  @Select(DataState.getDataList) dataLista$?: Observable<[]>;
  @Select(DataState.getChartType) chartType$?: Observable<string>;

  constructor() { }

  ngOnInit(): void {
    this.subscribed = this.dataLista$?.subscribe((res) => {
      this.dataSource = [...res];
    })
    this.subscribed = this.chartType$?.subscribe((res) => {
      this.chartType = res;
    });
  }

  ngOnDestroy(){
    this.subscribed?.unsubscribe();
  }

}
