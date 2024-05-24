import { NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  bootstrapChevronLeft,
  bootstrapChevronDoubleLeft,
  bootstrapThreeDots,
} from '@ng-icons/bootstrap-icons';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { UsersService } from '../../services/users.service';
import { CurrentPageService } from '../../services/current-page.service';

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
export class PaginationComponent implements OnInit {
  @Input() pages: number[];
  @Output() currentPageEmitter = new EventEmitter();
  currentPage = 1;

  constructor(private currentPageService: CurrentPageService) {}

  ngOnInit() {
    this.currentPageService.currentPage$.subscribe((data) => {
      this.currentPage = data;
    });
  }

  handlePage(num: number) {
    this.currentPage += num;
    if (this.currentPage < 1) {
      this.currentPage = 1;
    }
    if (this.currentPage > this.pages.length) {
      this.currentPage = this.pages.length;
    }

    this.currentPageEmitter.emit(this.currentPage);
  }

  changePage(num: number) {
    this.currentPage = num;
    this.currentPageEmitter.emit(this.currentPage);
  }
}
