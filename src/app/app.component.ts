import {Component, OnInit} from '@angular/core';
import {DataService} from "./data-service.service";
import {FormControl, FormGroup, FormsModule, Validators} from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name?: string;
  age?: number;
  message?: string | null;
  title: string | undefined;
  profileForm = new FormGroup({
    name: new FormControl<string | null>(null, [Validators.required]),
    age: new FormControl<number | null>(null, [Validators.required, Validators.min(10)]),
  });

  constructor(private dataService: DataService) {
  }

  async sendDataToBackend() {
    /* if (!this.name) {
       throw new Error("name.undefined");
     }
     if (!this.age) {
       throw new Error("age.undefined");
     }*/
    for (const i in this.profileForm.controls) {
      this.profileForm.get(i)?.markAsDirty();
      this.profileForm.get(i)?.updateValueAndValidity();
    }
    if (this.profileForm.valid) {
      const form = this.profileForm.value;
      const name = form.name;
      if (!name) {
        throw new Error("name is undefined");
      }
      const age = form.age;
      if (!age) {
        throw new Error("age is undefined");
      }
      console.log("errors", this.profileForm.errors);

      const result = await this.dataService.sendData({name: name, age: age});
      console.log("result: ", result);
      this.message = result.message;
    } else {

    }
  }

  ngOnInit() {
    this.profileForm.controls.age.valueChanges.subscribe(val => {
      console.log("value of age is changed", val);
    });
  }
}
