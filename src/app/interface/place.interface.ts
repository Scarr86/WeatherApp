import { Observable } from 'rxjs';
import { Visitor } from './visitor.interface';

export interface Place {
  accept<T>(visitor: Visitor<T>): Observable<T>;
}
