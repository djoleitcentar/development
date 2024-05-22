import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomUtilsService {
  constructor() {}

  static createQueryString(form: {}) {
    const query = new URLSearchParams(form).toString().replaceAll('null', '');

    return query;
  }
}
