import { Observable } from 'rxjs';
import { IUser } from '../../models/user.model';

/** User profile read contract. */
export interface IUserService {
  /** Gets current profile. */
  getProfile(): Observable<IUser>;
}
