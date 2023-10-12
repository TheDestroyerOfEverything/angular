import { Component, OnInit } from '@angular/core';
import {DataService, FetchDataResponse} from "../data-service.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-form',
  templateUrl: '/form.component.html',
  styleUrls: ['/form.component.css']
})
export class FormComponent implements OnInit{
  show_error = false;
  content_list = false;
  show: any;
  profileForm = new FormGroup({
    id: new FormControl<number | null>(null, [Validators.required]),
    name: new FormControl<string | null>(null, [Validators.required]),
    age: new FormControl<number | null>(null, [Validators.required, Validators.min(1)]),
  });
  message: string | null | undefined = '';

  constructor(private dataService: DataService) {}

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
      const id = form.id;
      if (!id) {
        throw new Error("id is undefined");
      }
      const name = form.name;
      if (!name) {
        throw new Error("name is undefined");
      }
      const age = form.age;
      if (!age) {
        throw new Error("age is undefined");
      }
      console.log("errors", this.profileForm.errors);

      const result = await this.dataService.sendData({id: id, name: name, age: age});
      console.log("result: ", result);
      window.location.reload()
    } else {
      this.show_error = true;
    }
  }

  async showData(){
    const result = await this.dataService.fetchData()
    this.show = await this.dataService.fetchData()
    this.content_list = !this.content_list;
    console.log("result: ", result)

  }

  ngOnInit() {
    this.profileForm.controls.age.valueChanges.subscribe((val: any) => {
      console.log("value of age is changed", val);
    });
  }
}
