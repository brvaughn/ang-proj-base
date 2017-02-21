import { Injectable } from '@angular/core';
import { Http, Response, Jsonp, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/toPromise';

import { Image } from './image';

@Injectable()
export class RequestService {

    private urlBase = 'http://localhost:8080/';
    private baseContentUrl = this.urlBase + 'app/json/frontpage.json';
    private contentUrl = this.urlBase + 'app/json/base.json';
    private imagesContentUrl = this.urlBase + 'content/images';

    constructor(private http: Http, private jsonp: Jsonp) { }


//   getHeroes (): Observable<Hero[]> {
//     return this.http.get(this.heroesUrl)
//                     .map(this.extractData)
//                     .catch(this.handleError);
//   }


  getImagesContent(): Observable<JSON> {
      console.log('The http URL is ' + this.imagesContentUrl);
      console.log(typeof this.imagesContentUrl);
    //   console.log(this.http.get(this.imagesContentUrl));
      return this.http.get(this.imagesContentUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

    //  getComments() : Observable<Comment[]> {

    //      // ...using get request
    //      return this.http.get(this.commentsUrl)
    //                     // ...and calling .json() on the response to return data
    //                      .map((res:Response) => res.json())
    //                      //...errors if any
    //                      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    //  }

  private extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body.data || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}

