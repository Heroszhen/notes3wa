import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  subject$ = new BehaviorSubject([]);
  lesson$ = new BehaviorSubject([]);
  constructor() {}

  changeSubjectAndLesson(sub,les){
    this.subject$.next([sub]);
    this.lesson$.next([les]);
  }
}
