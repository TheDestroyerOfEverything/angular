import { Component, OnInit } from '@angular/core';
import {DataService, FetchDataResponse} from "../data-service.service";
import {AppComponent} from "../app.component";


@Component({
  selector: 'app-form',
  templateUrl: '/form.component.html',
  styleUrls: ['/form.component.css']
})
export class FormComponent implements OnInit{


  constructor(private dataService: DataService, private appComponent: AppComponent) {}
    profileForm = this.appComponent.profileForm;
    message = this.appComponent.message;
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
    this.profileForm.controls.age.valueChanges.subscribe((val: any) => {
      console.log("value of age is changed", val);
    });
  }

}
