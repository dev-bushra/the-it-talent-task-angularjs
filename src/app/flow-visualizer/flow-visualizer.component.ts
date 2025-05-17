import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

interface Field {
  id: string;
}

interface Database {
  id: string;
  fields: Field[];
}

interface System {
  id: string;
  databases: Database[];
}

@Component({
  selector: 'app-flow-visualizer',
  templateUrl: './flow-visualizer.component.html',
  styleUrls: ['./flow-visualizer.component.css']
})
export class FlowVisualizerComponent implements OnInit {
  data: { systems: System[] } = {
    systems: [
      {
        id: 'System A',
        databases: [
          { id: 'DB1', fields: [{ id: 'Field1' }, { id: 'Field2' }] },
          { id: 'DB2', fields: [{ id: 'Field3' }] }
        ]
      },
      {
        id: 'System B',
        databases: [
          { id: 'DB3', fields: [{ id: 'FieldA' }] },
          { id: 'DB4', fields: [{ id: 'FieldB' }] },
        ]
      }
    ]
  };

  selectedSystemId: string | null = null;
  selectedDBId: string | null = null;
  newFieldId: string = '';

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};

  ngOnInit(): void {
    if (this.data.systems.length > 0) {
      this.selectedSystemId = this.data.systems[0].id;
      const firstSystem = this.getSelectedSystem();
      if (firstSystem && firstSystem.databases.length > 0) {
        this.selectedDBId = firstSystem.databases[0].id;
      }
    }
    this.updateChart();
  }

  getSelectedSystem(): System | undefined {
    return this.data.systems.find(s => s.id === this.selectedSystemId);
  }

  getDatabasesForSelectedSystem(): Database[] {
    const system = this.getSelectedSystem();
    return system ? system.databases : [];
  }

  addField(): void {
    if (!this.newFieldId || !this.selectedSystemId || !this.selectedDBId) {
      alert('Please select system, database and enter field name');
      return;
    }

    const system = this.getSelectedSystem();
    if (!system) return;

    const db = system.databases.find(d => d.id === this.selectedDBId);
    if (!db) return;

    if (db.fields.find(f => f.id === this.newFieldId)) {
      alert('Field already exists');
      return;
    }

    db.fields.push({ id: this.newFieldId });
    this.newFieldId = '';
    this.updateChart();
  }

  updateChart() {
    const seriesData:any = [];

    this.data.systems.forEach(system => {
      system.databases.forEach(db => {
        db.fields.forEach(field => {
          seriesData.push({
            name: `${system.id} > ${db.id} > ${field.id}`,
            y: Math.floor(Math.random() * 100) + 1
          });
        });
      });
    });

    this.chartOptions = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Fields Usage Example Chart'
      },
      xAxis: {
        type: 'category',
        title: { text: 'System > Database > Field' }
      },
      yAxis: {
        title: {
          text: 'Random Value'
        }
      },
      legend: {
        enabled: false
      },
      series: [{
        name: 'Field Value',
        data: seriesData,
        type: 'column',
        colorByPoint: true
      }]
    };
  }
}
