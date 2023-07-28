import { Injectable } from '@angular/core';
import { Hotels } from './model/hotels';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class HotelService {
private HotelsUrl = 'http://localhost:3000/hotels'
    constructor(private http: HttpClient) { }

       
  getHotels(): Observable<Hotels[]> {
    return this.http.get<Hotels[]>(this.HotelsUrl);
  }

   getHotelsByName(name: string): Observable< Hotels[] | undefined> {
    return this.getHotels().pipe(
        map(Hotels => Hotels.filter(hotels => hotels.name === name))
      /*map(Groceries => Groceries.find((grocery) => grocery.name === name)) */
    );
  } 

  /* getMoviesByTheater(city: string, theater: string): Observable<Movie[]> {
    return this.getGroceries().pipe(
      map(movies => movies.filter(movie => movie.city === city && movie.theater === theater))
    );
  } */
}