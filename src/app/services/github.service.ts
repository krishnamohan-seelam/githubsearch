import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';
@Injectable()
export class GithubService {

  private userName: string;
  private url = "http://api.github.com/users/"
  /*
  register with github to get access to its api 
  private clientid ="XXXXXXXXXX";
  private clientSecret ="XXXXXXX";
  */
  private urlTrailer ="?client_id="+this.clientid+"&client_secret="+ this.clientSecret;
  constructor(private _http: Http) {
    this.userName = "krishnamohan-seelam"
  }

  getUser(): Promise<any> {
    var getUrl = this.url + this.userName+this.urlTrailer;
    console.log(getUrl);
    return this._http.get(getUrl)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleHttpError);
  }

  getRepos(): Promise<any> {
    var getUrl = this.url + this.userName + "/repos"+this.urlTrailer;
    return this._http.get(getUrl)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleHttpError);
  }
  private handleHttpError(error: any): Promise<any> {

    return Promise.reject(error.message || error);
  }

  updateUserName(userName:string)
  {
    this.userName =userName;
  }
}
