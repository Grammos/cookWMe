import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
	  new Recipe('Test recipe', 'Test', 'https://pbs.twimg.com/profile_images/529682367170899968/lffGtykQ.png'),
	  new Recipe('Test Recipe Kosovo', 'Test', 'https://pbs.twimg.com/profile_images/529682367170899968/lffGtykQ.png')
	];	

  getRecipes() {
  	return this.recipes.slice();
  }
}