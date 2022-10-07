import { Component, OnInit } from '@angular/core';
import {HttpCallsService} from "../http-calls.service";
import {ActivatedRoute, Router} from "@angular/router";
import {IRecipe} from "./recipe.interface";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  public recipeDetails: IRecipe[] = [];
  public categories: string[] = ['Gluten Free', 'Lunch', 'Main Dishes', 'Paleo', 'Quick Easy'];
  constructor(private httpService: HttpCallsService,
              private route: ActivatedRoute,
              private router: Router,
              ) { }

  ngOnInit(): void {
    //  this.recipeId = this.route.snapshot.params['id'];
    //  console.log(this.recipeId)
    // this.httpService.getOneRecipe(this.recipeId).subscribe((data) =>
    //   {
    //     // this.recipes = data
    //     this.recipeDetails = data;
    //   }
    // );
  }
}
