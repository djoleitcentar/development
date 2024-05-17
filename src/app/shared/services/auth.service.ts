import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

type Credentials = {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _credentialsSubject: BehaviorSubject<Credentials>;
  public isLoggedIn$  = new BehaviorSubject<boolean>(false);

  constructor() {
    const storedCredentials = this.getCredentialsFromStorage();
    this._credentialsSubject = new BehaviorSubject<Credentials>(storedCredentials);
  }

  private getCredentialsFromStorage(): Credentials {
    const localStorageCredentials = localStorage.getItem('user');
    if (localStorageCredentials) {
      this.isLoggedIn$.next(true);
      return JSON.parse(localStorageCredentials);
    }
    return null;
  }

  public getCredentials() {
    return this._credentialsSubject.value;
  }
}
