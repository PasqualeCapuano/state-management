import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Data, DataForm, DataReset } from '../../store/data.actions';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  form = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    age: new FormControl()
  });

  n = 0;

  chartOne = true;
  chartTwo = false;
  chartThree = false;

  tabs = [
    'Bar Chart',
    'Line Chart'
  ];
 
  constructor(private readonly store: Store) { }

  ngOnInit(): void {
  }

  addDataForm() {
    this.form.controls['id'].setValue(this.n ++ ) 
    this.store.dispatch(new DataForm(this.form.value));
    this.form.reset();
  }

  resetData() {
    this.store.dispatch(new DataReset([]));
    this.form.reset();
  }

  onItemClick(e: any) {
    if (e.itemData === 'Bar Chart') {
      this.chartOne = true;
      this.chartTwo = false;
      this.chartThree = false;
    } else if (e.itemData === 'Line Chart') {
      this.chartOne = false;
      this.chartTwo = true;
      this.chartThree = false;
    } 
  }
}
