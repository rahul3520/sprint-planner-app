import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserStoryComponent } from './add-user-story/add-user-story.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewUserStoryComponent } from './view-user-story/view-user-story.component';
import { SprintCalculatorComponent } from './sprint-calculator/sprint-calculator.component';
import { AutoSprintComponent } from './auto-sprint/auto-sprint.component';

const myRoute:Routes=[
  {
    path:"addStory",
    component:AddUserStoryComponent
  },
  {
    path:"viewStory",
    component: ViewUserStoryComponent
  },
  {
    path:"sprintCalculator",
    component: SprintCalculatorComponent
  },
  {
    path:"autoSelectedSprint",
    component:AutoSprintComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    AddUserStoryComponent,
    NavbarComponent,
    ViewUserStoryComponent,
    SprintCalculatorComponent,
    AutoSprintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(myRoute)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
