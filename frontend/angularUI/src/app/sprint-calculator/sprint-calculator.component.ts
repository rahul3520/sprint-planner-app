import { Component } from '@angular/core';
import { SprintPlanService } from '../sprint-plan.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sprint-calculator',
  templateUrl: './sprint-calculator.component.html',
  styleUrls: ['./sprint-calculator.component.css']
})
export class SprintCalculatorComponent {

  maxPoint:any=""

  constructor(private sprintService:SprintPlanService,private router: Router){}

  generateSprint=(maxPoint:any)=>{

    localStorage.setItem("maxStoryPoint",this.maxPoint);
    this.router.navigateByUrl('/autoSelectedSprint');

  }

  deleteSprint=()=>{

    this.sprintService.DeleteSprint().subscribe(

      (response:any)=>{       

        try {
          
          if(response.message==="All user stories are deleted from sprint!"){

            console.log(response);
            alert("All user stories are deleted from sprint!");
          }    
        } catch (error:any) {

          console.log(error.message)
          alert("Nothing to delete from sprint!");
          
        } 
        
      }
    )
  }
}
