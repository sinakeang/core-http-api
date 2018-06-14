import { Component } from '@angular/core';
import { HttpClient, HttpResponse, HttpRequest, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/* Objectives
  - Inject and use the Http client library.
  - Sending the various types of http requests.
  - Sending custom headers.
  - Handling errors.

*/
export class AppComponent {
  apiRoot: string = "http://httpbin.org";

  constructor(private http: HttpClient) { }

  doGET() {
    console.log("GET");
    let url = `${this.apiRoot}/get`;
    this.http.get(url).subscribe(res => console.log(res.valueOf()));
    //let search = new URLSearchParams();
    //search.set('foo','moo');
    //search.set('limit','25');
    //res.json is not used in httpclient but used in http
    //pass object search as a second param and then pass our value of search
    //this.http.get(url, { search }).subscribe(res => console.log(res.valueOf()));
  }

  doPOST() {
    console.log("POST");
    let url = `${this.apiRoot}/post`;
    // get (url, { payload })
    this.http.post(url, { moo:"foo", goo:"loo" }).subscribe(res => console.log(res.valueOf()));
  }

  doPUT() {
    console.log("PUT");
    let url = `${this.apiRoot}/put`;
    this.http.put(url, { moo:"foo", goo:"loo" }).subscribe(res => console.log(res.valueOf()));
  }

  doDELETE() {
    console.log("DELETE");
  }

  doGETAsPromise() {
    console.log("GET AS PROMISE");
    let url = `${this.apiRoot}/get`;
    this.http.get(url)
    .toPromise()
    .then(res => console.log(res.valueOf()));
  }

  doGETAsPromiseError() {
    console.log("GET AS PROMISE ERROR");
    let url = `${this.apiRoot}/post`;
    this.http.get(url)
    .toPromise()
    /* .then(
      res => console.log(res.valueOf()),
      msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
    ); */
    .then(res => console.log(res.valueOf()))
    .catch(msg => console.error(`Error: ${msg.status} ${msg.statusText}`));
  }

  doGETAsObservableError() {
    console.log("GET AS OBSERVABLE ERROR");
    let url = `${this.apiRoot}/post`;
    this.http.get(url)
    .subscribe(
      res => console.log(res.valueOf()),
      msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
    )
  }

  doGETWithHeaders() {
    console.log("GET WITH HEADERS");
    let headers = new Headers();
    headers.append('Authorization', btoa('username:password'));
    
    // Angular 5 uses httpClient which used interceptors instead of RequestOptions
    /* let opts = new RequestOptions();
    opts.headers = headers;
    opts.search = search;
    let url = `${this.apiRoot}/get`;
    this.http.get(url, opts).subscribe(
      res => console.log(res.valueOf()),
      msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
    ); */
  }
}
