import { Component } from '@angular/core';
import { SprintPlanService } from '../sprint-plan.service';

@Component({
  selector: 'app-auto-sprint',
  templateUrl: './auto-sprint.component.html',
  styleUrls: ['./auto-sprint.component.css']
})
export class AutoSprintComponent {

  
  userStories:any=[]
  tempStories:any=[]
  maxPoint:any=localStorage.getItem("maxStoryPoint")

  constructor(private sprintService: SprintPlanService){
           
      this.sprintService.ViewUserStory().subscribe(

        (response:any)=>{

          if(response.length!=0){

            console.log("Response from API",response);

            let sum=0;
            for(let i=0;i<response.length;i++){

              sum += parseInt(response[i].storyPoint);
              console.log("Sum value of story points:",sum);
              console.log("MaxPoint: ",this.maxPoint)

              if(sum <= parseInt(this.maxPoint)){

                console.log("sum: ",sum," <= MaxPoint: ",this.maxPoint)
                this.tempStories.push(response[i])
              }
              else{
                sum -= parseInt(response[i].storyPoint);
              }
            }

            console.log("tempstories json array: ",this.tempStories )
            this.userStories=this.tempStories;
            
          }
          else{
            console.log(response);
            alert("No user stories to view");
          }
        }
      )
  }
}
