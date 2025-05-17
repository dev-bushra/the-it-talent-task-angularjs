import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';


import { FlowVisualizerComponent } from './flow-visualizer/flow-visualizer.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { FormsModule } from '@angular/forms';
import { HorizontalOrganizationChartVisualizerComponent } from './horizontal-organization-chart-visualizer/horizontal-organization-chart-visualizer.component';


@NgModule({
  declarations: [
    AppComponent,
    FlowVisualizerComponent,
    // HorizontalOrganizationChartVisualizerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
