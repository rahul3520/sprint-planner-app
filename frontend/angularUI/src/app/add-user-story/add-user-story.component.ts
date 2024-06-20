import { Component } from '@angular/core';
import { SprintPlanService } from '../sprint-plan.service';

@Component({
  selector: 'app-add-user-story',
  templateUrl: './add-user-story.component.html',
  styleUrls: ['./add-user-story.component.css']
})
export class AddUserStoryComponent {
  
  storyName=""
  storyPoint=""

  constructor(private sprintService: SprintPlanService){}

  addUserStory=()=>{

    console.log("Inside button function")
    
    let data:any={"storyName":this.storyName,"storyPoint":this.storyPoint}
    
    console.log(data)

    this.sprintService.AddUserStoryToSprint(data).subscribe(

      (response:any)=>{

        if(response.length!=0){

          alert("New user story added to sprint successfully!")
          this.storyName=""
          this.storyPoint=""
        }
        else{
          alert("Failed to add user story to sprint, Try again!")
        }
      }
    )
  }

}
 
