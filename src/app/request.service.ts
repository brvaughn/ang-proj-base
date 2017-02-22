import { Injectable } from '@angular/core';
import { Http, Response, Jsonp, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/toPromise';

// import { Image } from './image';

@Injectable()
export class RequestService {

    private urlBase = 'http://localhost:1337/';
    // private urlBase = 'http://en.wikipedia.org/w/api.php';
    private baseContentUrl = this.urlBase + 'app/json/frontpage.json';
    private contentUrl = this.urlBase + 'app/json/base.json';
    private imagesContentUrl = this.urlBase + 'content/imagesjson';

    constructor(private http: Http, private jsonp: Jsonp) { }


  getImagesContent(): Observable<JSON> {
      // return this.http.get(this.imagesContentUrl)
      //               .map(this.extractData)
      //               .catch(this.handleError);
    let params = new URLSearchParams();
    // params.set('search', term); // the user's search value
    // params.set('action', 'opensearch');
    // params.set('format', 'json');
    params.set('callback', 'callback');
    console.log('The http URL is ' + this.imagesContentUrl + params);
    console.log(typeof this.imagesContentUrl);

    return this.jsonp.get(this.imagesContentUrl, { search: params })
          .map(response => <JSON> response.json());
  }

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

