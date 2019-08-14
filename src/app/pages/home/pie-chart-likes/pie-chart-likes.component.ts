import {Component, ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import * as D3 from 'd3';
import {Park, ParkService} from '../../../@core/data/park.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'pie-chart-likes',
  templateUrl: './pie-chart-likes.html',
  styleUrls: ['./pie-chart-likes.component.css']
})

export class PieChartLikesComponent implements AfterViewInit {
  @ViewChild('containerPieChart') element: ElementRef;

  private host: D3.Selection<any>;
  private svg: D3.Selection<any>;
  private width: number;
  private height: number;
  private radius: number;
  private htmlElement: HTMLElement;
  private pieData: Park[];

  constructor(private service: ParkService) {
  }

  ngAfterViewInit() {
    this.htmlElement = this.element.nativeElement;
    this.host = D3.select(this.htmlElement);
    this.service.getAllParks().subscribe(data => {
      this.pieData = data['parks'];
      this.pieData = this.pieData.filter((park) => {
        return park.likes > 50;
      });
      this.setup();
      this.buildSVG();
      this.buildPie();
    });
  }

  private setup(): void {
    this.width = 250;
    this.height = 250;
    this.radius = Math.min(this.width, this.height) / 2;
  }

  private buildSVG(): void {
    this.host.html('');
    this.svg = this.host.append('svg')
      .attr('viewBox', `0 0 ${this.width} ${this.height}`)
      .append('g')
      .attr('transform', `translate(${this.width / 2},${this.height / 2})`);
  }

  private buildPie(): void {
    const pie = D3.layout.pie();
    const values = this.pieData.map(data => data.likes);
    const arcSelection = this.svg.selectAll('.arc')
      .data(pie(values))
      .enter()
      .append('g')
      .attr('class', 'arc');

    this.populatePie(arcSelection);
  }

  private populatePie(arcSelection: D3.Selection<D3.layout.pie.Arc<number>>): void {
    const innerRadius = this.radius - 50;
    const outerRadius = this.radius - 10;
    const pieColor = D3.scale.category20c();
    const arc = D3.svg.arc<D3.layout.pie.Arc<number>>()
      .outerRadius(outerRadius);
    arcSelection.append('path')
      .attr('d', arc)
      .attr('fill', (datum, index) => {
        return pieColor(this.pieData[index].name);
      });

    arcSelection.append('text')
      .attr('transform', (datum: any) => {
        datum.innerRadius = 0;
        datum.outerRadius = outerRadius;
        return 'translate(' + arc.centroid(datum) + ')';
      })
      .text((datum, index) => this.pieData[index].name + this.pieData[index].likes)
      .style('text-anchor', 'middle');
  }
}
