import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AuthGard} from '../auth/auth.gard';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {RecipeDetailsComponent} from './recipe-details/recipe-details.component';
import {RecipeStartComponent} from './recipe-start/recipe-start.component';
import {RecipesComponent} from './recipes.component';
import {RecipesResolverService} from './recipes-resolver.service';

const routs: Routes = [
  { path: 'recipes',
    component: RecipesComponent,
    canActivate: [AuthGard],
    children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent },
      {
        path: ':id',
        component: RecipeDetailsComponent,
        resolve: [RecipesResolverService]
      },
      {
        path: ':id/edit',
        component: RecipeEditComponent,
        resolve: [RecipesResolverService]
      }
    ]}
]

@NgModule({
  imports: [RouterModule.forChild(routs)],
  exports: [RouterModule]
})
export class RecipesRoutingModule {

}
