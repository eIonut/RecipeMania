import { Component, OnInit } from '@angular/core';
import {HttpCallsService} from "../http-calls.service";
import {ActivatedRoute, Router} from "@angular/router";
import {IRecipe} from "./recipe.interface";
import {IInstructions} from "./recipeInstructions.interface";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  public recipeId: number = 0;
  public recipeDetails: IRecipe[] = [];
  public recipeInstructions: IInstructions[] = [];
  constructor(private httpService: HttpCallsService,
              private route: ActivatedRoute,
              private router: Router,
              ) { }

  ngOnInit(): void {
     this.recipeId = this.route.snapshot.params['id'];
     console.log(this.recipeId)
    this.httpService.getOneRecipe(this.recipeId).subscribe((data) =>
      {
        console.log(data)
        // this.recipes = data
        this.recipeDetails.push(data);
        console.log(this.recipeDetails)
      }
    );

     this.httpService.getInstructionsForRecipe(this.recipeId).subscribe((data) => {
       this.recipeInstructions= data;
       console.log(this.recipeInstructions)
     })
  }
}
