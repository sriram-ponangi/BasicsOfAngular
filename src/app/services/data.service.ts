import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { NotFoundError } from '../service-errors/not-found-error';
import { AppError } from '../service-errors/app-errors';
import { BadInputError } from '../service-errors/bad-input-error';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';

@Injectable()
export class DataService {

  constructor(private url, private http: Http) { }

  getAll() {
    return this.http.get(this.url)
        .map(response => response.json())
        .catch(this.handleErrors);
  }
  create(resource) {
    // return Observable.throw(new AppError()); // TO CHECK OPTIMISTIC APPROACH
    return this.http.post(this.url, JSON.stringify(resource))
    .catch(this.handleErrors); /*(error: Response) => {
      if (error.status === 400) {
        return Observable.throw(new BadInputError(error.json()));
      }
      return Observable.throw(new AppError(error.json()));
    });*/
  }
  update(resource) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead : true}))
    .catch(this.handleErrors);
  }
  delete(id) {
    return this.http.delete(this.url + '/' + id)
      .catch(/*(error: Response) => {
        if (error.status === 404) {
          return Observable.throw(new NotFoundError(error));
        }
        return Observable.throw(new AppError(error));
      } // Instead of using an arrow function we can do this explicitly also (implementation of arrowfunction as handleErrors())
      */this.handleErrors);
  }
  myDelete(id) {
    // OBSERVABLES and PROMISES EXAMPLE:
    return this.http.delete(this.url + '/' + id)
    .map(response => response.json())
    .toPromise()
    .catch(this.handleErrors);
  }

  private handleErrors(error: Response) {
    if (error.status === 400) {
      return Observable.throw(new BadInputError(error.json()));
    } else if (error.status === 404) {
      return Observable.throw(new NotFoundError(error));
    }
    return Observable.throw(new AppError(error));
  }
}
