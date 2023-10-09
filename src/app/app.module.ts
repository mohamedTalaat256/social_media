import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppSideNavbarComponent } from './global/app-side-navbar/app-side-navbar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';
import { AppToolbarListComponent } from './global/app-side-navbar/components/app-toolbar-list/app-toolbar-list.component';
import { AppSidenavListComponent } from './global/app-side-navbar/components/app-sidenav-list/app-sidenav-list.component';
import { UserComponent } from './layouts/user/user.component';
import { TimeLineComponent } from './layouts/user/pages/time-line/time-line.component';
import { ProfileComponent } from './layouts/user/pages/profile/profile.component';
import { TimelinePostsListComponent } from './layouts/user/components/timeline-posts-list/timeline-posts-list.component';
import { UserRoutingModule } from './layouts/user/user-routing.module';
import { FriendsComponent } from './layouts/user/pages/friends/friends.component';
import { FriendsListComponent } from './layouts/user/components/friends-list/friends-list.component';
import { AddPostFormComponent } from './layouts/user/components/add-post-form/add-post-form.component';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { CommentsModalComponent } from './layouts/user/components/comments-modal/comments-modal.component';


const appearance: MatFormFieldDefaultOptions = {
  appearance: 'outline'
};

@NgModule({
  declarations: [
    AppComponent,
    AppSideNavbarComponent,
    AppToolbarListComponent,
    AppSidenavListComponent,
    UserComponent,
    TimeLineComponent,
    ProfileComponent,
    TimelinePostsListComponent,
    FriendsComponent,
    FriendsListComponent,
    AddPostFormComponent,
    CommentsModalComponent
  ],
  imports: [
    MatSidenavModule,
    BrowserModule,
    AppRoutingModule,
    UserRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: appearance
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
