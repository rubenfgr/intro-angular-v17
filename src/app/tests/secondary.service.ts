import {Injectable} from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SecondaryService {

  private _content = 'CONTENT';

  getContent(): string {
    return this._content;
  }

  private _promiseContent = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('CONTENT');
    }, 3000);
  });

  public getPromiseContent(): Promise<string> {
    return this._promiseContent;
  }

  private observableContent = new Observable<string>((observer) => {
    setTimeout(() => {
      observer.next('CONTENT');
    }, 3000);
  });

  public getObservableContent(): Observable<string> {
    return this.observableContent;
  }

}
