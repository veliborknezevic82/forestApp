import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SortimentiComponent } from '../sortimenti/sortimenti.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'sortimenti', component: SortimentiComponent},
  {path: 'home', component: HomeComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule {
}
