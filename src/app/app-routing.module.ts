import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QaComponent } from './qa/qa.component';

const routes: Routes = [
  { path: '', component: QaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
