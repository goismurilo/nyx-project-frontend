import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { MonthComponent } from './views/month/month.component';
import { CategoryComponent } from './views/category/category.component';
import { SourceComponent } from './views/source/source.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'month',
    component: MonthComponent,
    pathMatch: 'full'
  },
  {
    path: 'category',
    component: CategoryComponent
  },
  {
    path: 'source',
    component: SourceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
