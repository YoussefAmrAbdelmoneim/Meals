import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealsService {

  constructor(private httpClient:HttpClient) { }

  getMeals(cat:string):Observable<any>
  {
    const endpoint = cat
    ? `https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`
    : `https://www.themealdb.com/api/json/v1/1/search.php?s=`;
    return this.httpClient.get(endpoint)
  }
  getMealDetails(id: string): Observable<any> {
    return this.httpClient.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  }
}
