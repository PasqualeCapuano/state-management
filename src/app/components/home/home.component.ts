import { Component, OnDestroy, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import {
  ChartType,
  Data,
  DataForm,
  DataReset,
  Database,
} from '../../store/data.actions';
import { FormControl, FormGroup } from '@angular/forms';
import { DatabaseService } from 'src/app/services/database.service';
import { DataState } from 'src/app/store/data.state';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  form = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    age: new FormControl(),
  });

  data: any = [];

  n = 0;

  chartOne = true;
  chartTwo = false;
  chartThree = false;

  tabs = ['Bar Chart', 'Line Chart'];

  @Select(DataState.getDataList) dataLista$?: Observable<[]>;
  subscribed: Subscription | undefined;



  constructor(private readonly store: Store, private http: DatabaseService) {}

  ngOnInit(): void {
    this.subscribed = this.dataLista$?.subscribe((res) => {
      this.data = [...res];
    })

    this.http.getData().subscribe((data) => {
      this.data = data;
      this.store.dispatch(new Database(this.data));
    });
  }

  addDataForm() {
    if(!this.data){
      this.n = 0;
    } else {
      this.n = this.data.length + 1;
    }
    this.form.controls['id'].setValue(this.n++);
    this.store.dispatch(new DataForm(this.form.value));
    this.http.postData(this.form.value).subscribe((data) => {
      console.log('data', data);
    });
    this.form.reset();
    console.log('---------------->', this.data);
  
  }

  resetData() {
    this.http.deleteData().subscribe(() => {});
    //this.store.dispatch(new DataReset([]));
    //this.form.reset();
  }

  onItemClick(e: any) {
    if (e.itemData === 'Bar Chart') {
      this.store.dispatch(new ChartType('bar'));
    } else if (e.itemData === 'Line Chart') {
      this.store.dispatch(new ChartType('line'));
    }
  }


  ngOnDestroy(){
    this.subscribed?.unsubscribe();
  }
}
