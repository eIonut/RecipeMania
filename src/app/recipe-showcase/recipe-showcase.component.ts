import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-recipe-showcase',
  templateUrl: './recipe-showcase.component.html',
  styleUrls: ['./recipe-showcase.component.css']
})
export class RecipeShowcaseComponent implements OnInit {
  @Input() recipeImage: string = '';
  @Input() recipeName: string = '';
  @Input() recipeRating = 0;
  @Input() recipeCookingTime = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
