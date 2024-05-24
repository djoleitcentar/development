import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrentPageService {
  private currentPage = new BehaviorSubject<number>(1);
  currentPage$ = this.currentPage.asObservable();

  updateCurrentPage(newPage) {
    this.currentPage.next(newPage);
  }
}
