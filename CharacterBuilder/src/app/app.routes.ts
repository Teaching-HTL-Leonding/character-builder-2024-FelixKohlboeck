import { Routes } from '@angular/router';
import {BuilderComponent} from "./builder/builder.component";

export const routes: Routes = [
  {path: 'builder', component: BuilderComponent},
  {path: '', redirectTo: 'builder', pathMatch: 'full'},
];
