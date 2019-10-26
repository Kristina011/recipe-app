import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new  Recipe('Test recipe', 'This is a test', 'http://www.donesi.com/blog/wp-content/uploads/2014/11/palacinke-1024x685.jpg'),
    new  Recipe('Test recipe', 'This is a test', 'http://www.donesi.com/blog/wp-content/uploads/2014/11/palacinke-1024x685.jpg')
  ];

  constructor() {}

  ngOnInit() {
  }

}
