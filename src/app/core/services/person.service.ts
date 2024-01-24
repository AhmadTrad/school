import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Person } from '../models/person';
import { personsData } from '../constants/personsData';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  persons$: BehaviorSubject<Person[]>;
  persons: Array<Person> = [];

  constructor() {
    this.persons$ = new BehaviorSubject<Person[]>([]);
    this.persons = personsData;
  }

  getAll() {
    this.persons$.next(this.persons);
  }

  add(person: Person) {
    this.persons = [person, ...this.persons];
    this.getAll();
  }

  edit(person: Person) {
    let findElem = this.persons.find(p => p.id == person.id);
    findElem!.firstName = person.firstName;
    findElem!.age = person.age;
    findElem!.job = person.job;
    this.persons$.next(this.persons);
  }

  remove(id: number) {
   
    this.persons = this.persons.filter(p => {
      return p.id != id
    });

    this.persons$.next(this.persons);
  }
}
