import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import OrganizationModule from 'highcharts/modules/organization';
import ExportingModule from 'highcharts/modules/exporting';

OrganizationModule(Highcharts);
ExportingModule(Highcharts);

@Component({
  selector: 'app-horizontal-organization-chart-visualizer',
  templateUrl: './horizontal-organization-chart-visualizer.component.html',
})
export class HorizontalOrganizationChartVisualizerComponent implements OnInit {
  ngOnInit(): void {
    // Highcharts.chart('container', {
    //   chart: {
    //     height: 600,
    //     inverted: false
    //   },
    //   title: {
    //     text: 'Carnivora Phylogeny'
    //   },
    //   subtitle: {
    //     text: 'Tracing the Evolutionary Relationship of Carnivores'
    //   },
    //   plotOptions: {
    //     series: {
    //       nodeWidth: '22%'
    //     }
    //   },
    //   accessibility: {
    //     point: {
    //       descriptionFormat:
    //         '{toNode.name} ' +
    //         '{#if (eq toNode.level 1 )} is a distinct family within the ' +
    //         'order of {fromNode.id}. {toNode.custom.info}{/if}' +
    //         '{#if (eq toNode.level 2 )} is a genus within the {fromNode.id}. ' +
    //         '{toNode.custom.info} {/if}' +
    //         '{#if (eq toNode.level 3 )} is a species within the ' +
    //         '{fromNode.id}. {toNode.custom.info} {/if}'
    //     }
    //   },
    //   series: [
    //     {
    //       type: 'organization',
    //       name: 'Carnivora Phylogeny',
    //       keys: ['from', 'to'],
    //       data: [
    //         ['Carnivora', 'Felidae'],
    //         ['Carnivora', 'Mustelidae'],
    //         ['Carnivora', 'Canidae'],
    //         ['Felidae', 'Panthera'],
    //         ['Mustelidae', 'Taxidea'],
    //         ['Mustelidae', 'Lutra'],
    //         ['Panthera', 'Panthera pardus'],
    //         ['Taxidea', 'Taxidea taxus'],
    //         ['Lutra', 'Lutra lutra'],
    //         ['Canidae', 'Canis'],
    //         ['Canis', 'Canis latrans'],
    //         ['Canis', 'Canis lupus']
    //       ],
    //       levels: [
    //         {
    //           level: 0,
    //           color: '#DEDDCF',
    //           dataLabels: {
    //             color: 'black'
    //           }
    //         },
    //         {
    //           level: 1,
    //           color: '#DEDDCF',
    //           dataLabels: {
    //             color: 'black'
    //           },
    //           height: 25
    //         },
    //         {
    //           level: 2,
    //           color: '#DEDDCF',
    //           dataLabels: {
    //             color: 'black'
    //           }
    //         },
    //         {
    //           level: 3,
    //           dataLabels: {
    //             color: 'black'
    //           }
    //         }
    //       ],
    //       nodes: [
    //         {
    //           id: 'Carnivora',
    //           title: 'Order: Carnivora',
    //           name: 'Carnivora',
    //           layout: 'hanging',
    //           color: '#DFDFDF',
    //           height: 25
    //         },
    //         { id: 'Felidae', title: 'Family: Felidae', name: 'Felidae' },
    //         {
    //           id: 'Panthera',
    //           title: 'Genus: Panthera',
    //           name: 'Panthera',
    //           custom: {
    //             info: 'Includes large cats like lions, tigers, leopards.'
    //           }
    //         },
    //         {
    //           id: 'Panthera pardus',
    //           title: 'Species: Panthera pardus',
    //           name: 'Leopard',
    //           custom: {
    //             info: 'Native to Africa and parts of Asia.'
    //           }
    //         },
    //         { id: 'Mustelidae', title: 'Family: Mustelidae', name: 'Mustelidae' },
    //         {
    //           id: 'Taxidea',
    //           title: 'Genus: Taxidea',
    //           name: 'Taxidea',
    //           custom: {
    //             info: 'Includes the American badger.'
    //           }
    //         },
    //         {
    //           id: 'Taxidea taxus',
    //           title: 'Species: Taxidea taxus',
    //           name: 'American badger',
    //           custom: {
    //             info: 'Found in North America.'
    //           }
    //         },
    //         {
    //           id: 'Lutra',
    //           title: 'Genus: Lutra',
    //           name: 'Lutra',
    //           custom: {
    //             info: 'Includes species of otters.'
    //           }
    //         },
    //         {
    //           id: 'Lutra lutra',
    //           title: 'Species: Lutra lutra',
    //           name: 'Eurasian otter',
    //           custom: {
    //             info: 'Widely distributed in Europe and Asia.'
    //           }
    //         },
    //         { id: 'Canidae', title: 'Family: Canidae', name: 'Canidae' },
    //         {
    //           id: 'Canis',
    //           title: 'Genus: Canis',
    //           name: 'Canis',
    //           custom: {
    //             info: 'Includes wolves, dogs, coyotes.'
    //           }
    //         },
    //         {
    //           id: 'Canis latrans',
    //           title: 'Species: Canis latrans',
    //           name: 'Coyote',
    //           custom: {
    //             info: 'Native to North America.'
    //           }
    //         },
    //         {
    //           id: 'Canis lupus',
    //           title: 'Species: Canis lupus',
    //           name: 'Wolf',
    //           custom: {
    //             info: 'Found across Eurasia and North America.'
    //           }
    //         }
    //       ],
    //       colorByPoint: false,
    //       borderColor: 'black',
    //       borderWidth: 2
    //     }
    //   ],
    //   tooltip: {
    //     outside: true,
    //     format: '{point.custom.info}',
    //     style: {
    //       width: '320px'
    //     }
    //   },
    //   exporting: {
    //     allowHTML: true,
    //     sourceWidth: 800,
    //     sourceHeight: 600
    //   }
    // });
  }
}
