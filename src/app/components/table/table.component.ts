import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { Data } from 'src/app/store/data.actions';
import { DataState } from 'src/app/store/data.state';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  readonly allowedPageSizes = [5, 10, 50, 100];
  showPageSizeSelector = true;
  showInfo = true;
  showNavButtons = true;
  subscribed: Subscription | undefined;
  dataSource: [] = [];
  columns: [] = [];

  @Select(DataState.getAnimalList) dataLista$?: Observable<[]>;

  constructor() {}

  ngOnInit(): void {
    this.subscribed = this.dataLista$?.subscribe((res) => {
      this.dataSource = [...res];
    })
  }

  ngOnDestroy(){
    this.subscribed?.unsubscribe();
  }

}
