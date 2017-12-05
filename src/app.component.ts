import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="jumbotron">
      <h1>Recipe Box</h1>
      <ul>
        <li *ngFor="let recipe of recipes">{{recipe.name}}<ul><li *ngFor="let ingredient of recipe.ingredients">{{ingredient}}</li></ul>{{recipe.directions}}</li>
      </ul>
    </div>
  </div>
  `
})

export class AppComponent {
  public recipes: Recipe[] = [];

  constructor() {
    this.recipes.push(new Recipe("Pizza", ["dough", "cheese"], ["put dough in oven", "enjoy meal"]));
  }
}


export class Recipe {
  constructor(public name: string, public ingredients: string[], public directions: string[]) {}
}
