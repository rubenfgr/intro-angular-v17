import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

export interface Races {
  message: { [key: string]: string[] };
  status:  string;
}

@Injectable({
  providedIn: 'root'
})
export class HttpTestService {

  constructor(private readonly httpClient: HttpClient) { }

  public getDogRaces() {
    return this.httpClient.get<Races>('https://dog.ceo/api/breeds/list/all');
  }
}
