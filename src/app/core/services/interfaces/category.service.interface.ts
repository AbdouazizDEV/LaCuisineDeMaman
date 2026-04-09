import { Observable } from 'rxjs';
import { ICategory } from '../../models/category.model';

/** Category read contract. */
export interface ICategoryService {
  /** Gets all categories. */
  getAll(): Observable<ICategory[]>;
  /** Gets category by id. */
  getById(id: string): Observable<ICategory | undefined>;
}
