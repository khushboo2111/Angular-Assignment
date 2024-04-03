import { Injectable } from '@angular/core';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserFetchService {
  constructor() { }
  users: User[] = [];

  add(arr: User[])
  {
    this.users = arr;
  }

  getUser(name: string) : User | undefined
  {
    return this.users.find(Ud => Ud.name==name);
  }
}
