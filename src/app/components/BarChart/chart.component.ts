import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { DataState } from 'src/app/store/data.state';

@Component({
  selector: 'app-barChart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
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
