import {Component, OnInit} from '@angular/core';
import {DataService} from "./data-service.service";
import {FormControl, FormGroup, FormsModule, Validators} from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message?: string | null;
  title: string | undefined;
  profileForm = new FormGroup({
    name: new FormControl<string | null>(null, [Validators.required]),
    age: new FormControl<number | null>(null, [Validators.required, Validators.min(10)]),
  });

  constructor(private dataService: DataService) {
  }


}
