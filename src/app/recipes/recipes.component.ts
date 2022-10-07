import { Component, OnInit } from '@angular/core';
import {HttpCallsService} from "../http-calls.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  public recipeName = "asd";
  public recipeCooking = 3;
  public recipeRating = 9;
  public recipes: [] = [];
  constructor(private httpService: HttpCallsService) { }

  ngOnInit(): void {
    // this.httpService.getRandomRecipes().subscribe((data) =>
    // {
    //   this.recipes = data.recipes
    //   console.log(this.recipes)
    //
    // }
    // );
  }

}
