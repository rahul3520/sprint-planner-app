import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SprintPlanService {

  constructor(private http: HttpClient) {    }

   
   AddUserStoryToSprint=(dataToSend:any)=>{

    return this.http.post("http://localhost:5000/add/story",dataToSend);
   }

   ViewUserStory=()=>{

    return this.http.get("http://localhost:5000/fetch/stories");
   }

   DeleteStoryById=(storyId:any)=>{

    return this.http.delete("http://localhost:5000/delete/story/"+storyId)
   }

   DeleteSprint=()=>{
    
    return this.http.delete("http://localhost:5000/delete/stories")
   }
 
}
