import { Routes } from '@angular/router';
import { MealDetailsComponent } from './pages/meal-details/meal-details.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
     {path:"", component:HomeComponent,title:"Meals"},
    {path:"mealDetails/:id", component:MealDetailsComponent,title:"Meal Details"},
    {path:'**',component:NotFoundComponent,title:"Not Found"}
];
