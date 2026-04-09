import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { userMock } from '../../../assets/mock/user.mock';
import { IUser } from '../models/user.model';
import { IUserService } from './interfaces/user.service.interface';

@Injectable()
export class UserService implements IUserService {
  /** Gets current user profile. */
  getProfile(): Observable<IUser> {
    return of(userMock).pipe(delay(500));
  }
}
