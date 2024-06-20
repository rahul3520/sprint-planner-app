import { Component } from '@angular/core';
import { SprintPlanService } from '../sprint-plan.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-view-user-story',
  templateUrl: './view-user-story.component.html',
  styleUrls: ['./view-user-story.component.css']
})
export class ViewUserStoryComponent {

  userStories:any=[]

  constructor(private sprintService: SprintPlanService){

    this.sprintService.ViewUserStory().subscribe(

      (response:any)=>{

        if(response.length!=0){
          console.log(response);
          this.userStories=response;
        }
        else{
          console.log(response);
          alert("No user stories to view");
        }
      }
    )
  }

  deleteStory=(storyId:any)=>{

    this.sprintService.DeleteStoryById(storyId).subscribe(

      (response:any)=>{

        console.log(response);

        if(response.message==="User story deleted successfully"){

          alert("User story deleted successfully!")
        }
        else{

          alert("Unable to delete user story, Try again!")
        }
      }
    )
  }
}
