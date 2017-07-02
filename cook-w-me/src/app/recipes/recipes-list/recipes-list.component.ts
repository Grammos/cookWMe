import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

	// added the array of the recipes through the Recipe of our model
	recipes: Recipe[] = [
	  new Recipe('Test recipe', 'Test', 'https://pbs.twimg.com/profile_images/529682367170899968/lffGtykQ.png'),
	  new Recipe('Test Recipe Kosovo', 'Test', 'https://pbs.twimg.com/profile_images/529682367170899968/lffGtykQ.png')
	];


  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
