import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
	  new Recipe(
	     'Test recipe', 
	     'Test', 
	     'https://pbs.twimg.com/profile_images/529682367170899968/lffGtykQ.png',
	     [
	     	new Ingredient('Meat', 1),
	     	new Ingredient('Blah', 3)
	     ]),
	  new Recipe(
	     'Test Recipe Kosovo', 
	     'Test', 
	     'https://pbs.twimg.com/profile_images/529682367170899968/lffGtykQ.png',
	     [
	     	new Ingredient('Meat', 10),
	     	new Ingredient('Blah', 9)
	     ])
	];

  constructor(private slService: ShoppingListService){}		

  getRecipes() {
  	return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
  	this.slService.addIngredients(ingredients);
  }
}