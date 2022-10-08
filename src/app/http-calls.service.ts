import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HttpCallsService {

  private getAllRecipesUrl = `https://api.spoonacular.com/recipes/random?apiKey=${environment.API_KEY}&number=20`;
  constructor(private http: HttpClient) {

  }

  public getRandomRecipes() {
    return this.http.get<any>(this.getAllRecipesUrl);
  }

  public getOneRecipe(id:number){
    return this.http.get<any>(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${environment.API_KEY}`);
  }

  public getInstructionsForRecipe(id:number){
    return this.http.get<any>(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${environment.API_KEY}`);
  }

  public getSearchRecipe(query:string){
    return this.http.get<any>(`https://api.spoonacular.com/recipes/complexSearch?query=${query}?apiKey=${environment.API_KEY}&number=99`);
  }
}
