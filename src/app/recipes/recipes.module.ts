import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesComponent } from './recipes.component';
import {RecipeShowcaseComponent} from "../recipe-showcase/recipe-showcase.component";


@NgModule({
  declarations: [
    RecipesComponent,
    RecipeShowcaseComponent


  ],
    imports: [
        CommonModule,
        RecipesRoutingModule,
    ]
})
export class RecipesModule { }
