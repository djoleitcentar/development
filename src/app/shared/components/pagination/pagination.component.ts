import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  bootstrapChevronLeft,
  bootstrapChevronDoubleLeft,
  bootstrapThreeDots,
} from '@ng-icons/bootstrap-icons';
import { NgIconComponent, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [NgIconComponent, NgStyle],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
  viewProviders: [
    provideIcons({
      bootstrapChevronLeft,
      bootstrapChevronDoubleLeft,
      bootstrapThreeDots,
    }),
  ],
})
export class PaginationComponent {
  @Input() pages: number[];
  currentPage = 1;

  handlePage(num: number) {
    this.currentPage += num;
    if (this.currentPage < 1) {
      this.currentPage = 1;
    }
    if (this.currentPage > this.pages.length) {
      this.currentPage = this.pages.length;
    }
  }
}
