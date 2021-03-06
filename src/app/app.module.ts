import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { GameControlComponent } from './playground/game-control/game-control.component';
import { OddComponent } from './playground/odd/odd.component';
import { EvenComponent } from './playground/even/even.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AppRouteModule } from './app-route/app-route.module';
import { RecipeSelectionComponent } from './recipes/recipe-selection/recipe-selection.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeItemComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    DropdownDirective,
    RecipeSelectionComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
