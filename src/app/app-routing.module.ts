import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UpdatePageComponent} from "./update-page/update-page.component";
import {FormComponent} from "./form/form.component";

const routes: Routes = [
  { path: 'form-page', component: FormComponent},
  { path: 'update-page', component: UpdatePageComponent },
  { path: '', redirectTo: '/form-page', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
