import { Component, inject, OnInit } from '@angular/core';
import { MealsService } from '../../services/meals/meals.service';
import { IMeals } from '../../shared/interfaces/imeals';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-meal-details',
  imports: [],
  templateUrl: './meal-details.component.html',
  styleUrl: './meal-details.component.scss'
})
export class MealDetailsComponent implements OnInit{
  private readonly Meal=inject(MealsService);
  private readonly activatedRoute=inject(ActivatedRoute);
  private readonly router=inject(Router);
  isLoading:boolean=true;
  mealDetails!:IMeals;
  getMealDetails()
  {
   this.activatedRoute.params.subscribe({
    next:(res) => {
      this.isLoading=true;
      this.Meal.getMealDetails(res['id']).subscribe({
        next:(res) => {
          if (res.meals && res.meals.length > 0) {
            this.mealDetails = res.meals[0];
            this.isLoading = false;
          } else {
            this.router.navigate(['/not-found']);
          }
        },
        error:(err)=>{
          console.log(err);
          this.router.navigate(['/not-found']);
        }
      })
    }
   }) 
    }
    ngOnInit(): void {
     this.getMealDetails();
    }
     getIngredientsAndMeasures(meal:any): { ingredient: string; measure: string }[] {
    const ingredientsAndMeasures = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient && ingredient.trim() !== '') {
        ingredientsAndMeasures.push({ ingredient, measure });
      }
    }
    return ingredientsAndMeasures;
  }
  }
