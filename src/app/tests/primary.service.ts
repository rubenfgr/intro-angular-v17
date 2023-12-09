import {Injectable} from '@angular/core';
import {SecondaryService} from "./secondary.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PrimaryService {

  private promiseContent = this.secondaryService.getPromiseContent();
  private observableContent = this.secondaryService.getObservableContent();
  private secondaryContent = this.secondaryService.getContent();

  constructor(private readonly secondaryService: SecondaryService) {
  }

  public getContent(): string {
    return this.secondaryService.getContent();
  }

  public getPromiseContent(): Promise<string> {
    return this.secondaryService.getPromiseContent();
  }

  public getObservableContent(): Observable<string> {
    return this.secondaryService.getObservableContent();
  }
}

