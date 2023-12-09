import {TestBed} from '@angular/core/testing';

import {HttpTestService} from './http-test.service';
import {HttpTestingController, provideHttpClientTesting} from "@angular/common/http/testing";
import {firstValueFrom} from "rxjs";
import {provideHttpClient} from "@angular/common/http";

describe('HttpTestService', () => {
  let service: HttpTestService;
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpTestService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    });
    service = TestBed.inject(HttpTestService);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be GET request success', function () {
      let getDogRaces$ = service.getDogRaces();
      let getDogRacesPromise = firstValueFrom(getDogRaces$);

      const req = httpTesting.expectOne('https://dog.ceo/api/breeds/list/all', 'call to api');
      expect(req.request.method).toBe('GET');

      req.flush({message: {}, status: 'success'});

      getDogRacesPromise.then((value) => {
        expect(value).toEqual({message: {}, status: 'success'});
      });

      httpTesting.verify();
  });

  it('should be GET request error', function () {
    let getDogRaces$ = service.getDogRaces();
    let getDogRacesPromise = firstValueFrom(getDogRaces$);

    const req = httpTesting.expectOne('https://dog.ceo/api/breeds/list/all', 'call to api');
    expect(req.request.method).toBe('GET');

    req.flush(null, {status: 404, statusText: 'Not Found'});

    getDogRacesPromise.catch((error) => {
      expect(error.status).toBe(404);
      expect(error.statusText).toBe('Not Found');
    });

    httpTesting.verify();
  });

  it('should be get request Network Error', function () {
    let getDogRaces$ = service.getDogRaces();
    let getDogRacesPromise = firstValueFrom(getDogRaces$);

    const req = httpTesting.expectOne('https://dog.ceo/api/breeds/list/all', 'call to api');
    expect(req.request.method).toBe('GET');

    req.flush(new ErrorEvent('Network Error'));

    getDogRacesPromise.catch((error) => {
      expect(error.message).toBe('Network Error');
    });

    httpTesting.verify();
  });
});
