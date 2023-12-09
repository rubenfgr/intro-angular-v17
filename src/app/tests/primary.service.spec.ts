import {TestBed} from '@angular/core/testing';

import {PrimaryService} from './primary.service';
import {SecondaryService} from "./secondary.service";
import {Observable} from "rxjs";

describe('TestsService', () => {
  let service: PrimaryService;
  let secondaryServiceSpy: jasmine.SpyObj<SecondaryService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj(SecondaryService, ['getContent', 'getPromiseContent', 'getObservableContent'],);
    TestBed.configureTestingModule({
      providers : [
        { provide: SecondaryService, useValue: spy },
        { provide: PrimaryService, useValue: new PrimaryService(spy)}
      ]
    });
    service = TestBed.inject(PrimaryService);
    secondaryServiceSpy = TestBed.inject(SecondaryService) as jasmine.SpyObj<SecondaryService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('spy secondary service', () => {
    secondaryServiceSpy.getContent.and.returnValue('SPY');

    expect(secondaryServiceSpy.getContent.calls.count()).toBe(1);
    expect(service.getContent()).toBe('SPY');
    expect(secondaryServiceSpy.getContent.calls.count()).toBe(2);
  });

  it('should be promise value', (done: DoneFn) => {
    secondaryServiceSpy.getPromiseContent.and.returnValue(Promise.resolve('SPY'));
    service.getPromiseContent().then((value) => {
      expect(value).toBe('SPY');
      done();
    })
  });

  it('should be observable value', (done: DoneFn) => {
    secondaryServiceSpy.getObservableContent.and.returnValue(new Observable<string>((observer) => {
      observer.next('SPY');
      observer.complete();
    }));
    service.getObservableContent().subscribe((value) => {
      expect(value).toBe('SPY');
      done();
    });
  });

});
