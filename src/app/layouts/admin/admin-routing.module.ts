import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MyCommunityComponent } from './components/my-community/my-community.component';

const routes: Routes = [
  {
    path:'admin',
    component: AdminComponent,
    children: [
      {path:'dashboard', component: DashboardComponent},
      {path:'my-comunity', component: MyCommunityComponent}


    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
