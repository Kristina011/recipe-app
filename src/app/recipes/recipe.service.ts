import {Injectable} from '@angular/core';
import { Subject } from 'rxjs';

import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeChanged = new Subject;

  private recipes: Recipe[] = [
    new  Recipe(
      'Tasty Schnitzel',
      'A super tasty pork schnitzel - just awesome!',
      'http://www.kuvajza.me/wp-content/uploads/2013/04/Milano-%C5%A1nicle-1-300x225.jpg',
        [
          new Ingredient('Meat', 2),
          new Ingredient('Mashed potato', 1),
          new Ingredient('Tomato sauce', 1),
        ]),

    new  Recipe(
      'Big Fat Burger',
      'Are you hungry?',
      'http://www.vrisak.info/wp-content/uploads/2018/07/Hamburgeri-od-svinjetine-na-francuski-na%C4%8Din.jpg',
        [
          new Ingredient('Buns', 1),
          new Ingredient('Meat', 1),
          new Ingredient('Salad', 1),
          new Ingredient('Onion', 1),
        ])
  ];

    constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
      return this.recipes[index];
  }

  addIngredientsToSl(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
      this.recipes.splice(index, 1);
      this.recipeChanged.next(this.recipes.slice());
  }

}

