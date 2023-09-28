import { Component, OnInit } from '@angular/core';
import {DataService, FetchDataResponse} from "../data-service.service";


@Component({
  selector: 'app-form',
  template: `
      <div *ngIf="data">
          <h1>Data from Quarkus Backend:</h1>
          <p>{{ data.message }} & {{data.age}}</p>
      </div>
  `,
})
export class FormComponent implements OnInit {
  data?: FetchDataResponse;

  constructor(private dataService: DataService) {}

  async ngOnInit() {
    this.data = await this.dataService.fetchData();
  }
}
