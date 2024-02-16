import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { DataState } from 'src/app/store/data.state';

@Component({
  selector: 'app-lineChart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  subscribed: Subscription | undefined;
  dataSource: string[] = [];

  @Select(DataState.getAnimalList) dataLista$?: Observable<[]>;

  constructor() { }

  ngOnInit(): void {
    this.subscribed = this.dataLista$?.subscribe((res) => {
      this.dataSource = [...res];
    })
  }

  ngOnDestroy(){
    this.subscribed?.unsubscribe();
  }
}
