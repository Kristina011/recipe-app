import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

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

  getRecipe(index: number){
      return this.recipes[index];
  }

  addIngredientsToSl(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}

