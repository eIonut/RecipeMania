import { Component, OnInit } from '@angular/core';
import {HttpCallsService} from "../http-calls.service";

@Component({
  selector: 'app-search-recipe',
  templateUrl: './search-recipe.component.html',
  styleUrls: ['./search-recipe.component.css']
})
export class SearchRecipeComponent implements OnInit {
  public recipes: [] = [];
  public inputValue: string = '';
  constructor(private httpCallsService: HttpCallsService) { }

  ngOnInit(): void {
  }

  public getRecipe(searchInput: HTMLInputElement){
    this.inputValue = searchInput.value;
    this.fetchRecipe();
    // this.httpCallsService.getSearchRecipe(searchInput.value);
  }

  public fetchRecipe(){
    this.httpCallsService.getSearchRecipe(this.inputValue).subscribe(data => {
      console.log(data);
    })
  }
}
