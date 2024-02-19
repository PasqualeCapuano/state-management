import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TableComponent } from './components/table/table.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {NgxsModule} from '@ngxs/store';
import {DataState} from './store/data.state';
import { HttpClientModule } from '@angular/common/http';



import {
  DxButtonModule,
  DxTextBoxModule,
  DxBoxModule,
  DxTagBoxModule,
  DxValidatorModule,
  DxFormModule,
  DxDataGridModule,
  DxValidationGroupModule,
  DxFileUploaderModule,
  DxPopupModule,
  DxTextAreaModule,
  DxSelectBoxModule,
  DxListModule,
  DxCheckBoxModule,
  DxDateBoxModule,
  DxNumberBoxModule,
  DxSliderModule,
  DxTabsModule,
  DxTreeListModule,
  DxDropDownBoxModule,
  DxTreeViewModule,
  DxScrollViewModule,
  DxSwitchModule,
  DxButtonGroupModule,
  DxDropDownButtonModule,
  DxTabPanelModule,
  DxRadioGroupModule,
  DxLoadIndicatorModule,
  DxLoadPanelModule,
  DxPopoverModule,
  DxHtmlEditorModule,
  DxSchedulerModule,
  DxActionSheetModule,
  DxCalendarModule,
  DxTooltipModule,
  DxAutocompleteModule,
  DxChartModule,
  DxProgressBarModule,
  
} from 'devextreme-angular';
import { environment } from 'src/environments/environment';
import { GenericChartComponent } from './components/generic-chart/generic-chart.component';
export const DxModules = [
  DxButtonModule,
  DxTextBoxModule,
  DxTagBoxModule,
  DxBoxModule,
  DxValidatorModule,
  DxFormModule,
  DxDataGridModule,
  DxValidationGroupModule,
  DxFileUploaderModule,
  DxPopupModule,
  DxTextAreaModule,
  DxSelectBoxModule,
  DxListModule,
  DxCheckBoxModule,
  DxDateBoxModule,
  DxNumberBoxModule,
  DxSliderModule,
  DxTabsModule,
  DxTreeListModule,
  DxDropDownBoxModule,
  DxTreeViewModule,
  DxScrollViewModule,
  DxSwitchModule,
  DxButtonGroupModule,
  DxDropDownButtonModule,
  DxTabPanelModule,
  DxRadioGroupModule,
  DxLoadIndicatorModule,
  DxLoadPanelModule,
  DxPopoverModule,
  DxHtmlEditorModule,
  DxSchedulerModule,
  DxCalendarModule,
  DxActionSheetModule,
  DxTooltipModule,
  DxAutocompleteModule,
  DxChartModule,
  DxProgressBarModule,
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TableComponent,
    GenericChartComponent
  ],
  imports: [
    ...DxModules,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxsModule.forRoot([DataState], {
      developmentMode: !environment.production
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
  ],
  exports: [
    ...DxModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
