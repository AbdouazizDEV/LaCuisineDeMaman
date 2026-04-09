import { Injectable } from '@angular/core';
import { Observable, delay, map, of } from 'rxjs';
import { categoriesMock } from '../../../assets/mock/categories.mock';
import { ICategory } from '../models/category.model';
import { ICategoryService } from './interfaces/category.service.interface';

@Injectable()
export class CategoryService implements ICategoryService {
  /** Gets all categories. */
  getAll(): Observable<ICategory[]> {
    return of(categoriesMock).pipe(delay(500));
  }

  /** Gets one category by id. */
  getById(id: string): Observable<ICategory | undefined> {
    return this.getAll().pipe(map((categories) => categories.find((category) => category.id === id)));
  }
}
