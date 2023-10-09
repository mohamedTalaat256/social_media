import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { TimeLineComponent } from './pages/time-line/time-line.component';
import { FriendsComponent } from './pages/friends/friends.component';

const routes: Routes = [
  {
    path:'user',
    component: UserComponent,
    children: [
      {path:'timeline', component: TimeLineComponent},
      {path:'friends', component: FriendsComponent},


    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
