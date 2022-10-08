import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesComponent } from './recipes.component';
import {RecipeShowcaseComponent} from "../recipe-showcase/recipe-showcase.component";
import {SearchRecipeComponent} from "../search-recipe/search-recipe.component";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    RecipesComponent,
    RecipeShowcaseComponent,
    SearchRecipeComponent
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    MatIconModule,
  ]
})
export class RecipesModule { }
