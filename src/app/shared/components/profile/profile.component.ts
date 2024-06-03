import { Component, OnInit } from '@angular/core';
import { FormBuilderComponent } from '../form-builder/form-builder.component';
import { profileFilterFields } from '../../data/profileFilterFields';
import { FormBuilderService } from '../../services/form-builder.service';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapFloppy } from '@ng-icons/bootstrap-icons';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NgIconComponent, FormBuilderComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  viewProviders: [
    provideIcons({
      bootstrapFloppy,
    }),
  ],
})
export class ProfileComponent implements OnInit {
  profileFilterFields = profileFilterFields;
  profileFilters;
  userProfileInfo;

  constructor(
    private formBuilderService: FormBuilderService,
    private profileService: ProfileService
  ) {}

  ngOnInit() {
    this.getUserProfileInfo();
    this.profileFilters = this.formBuilderService.createForm(
      this.profileFilterFields
    );
  }

  getUserProfileInfo() {
    this.profileService.getUserProfile().subscribe({
      next: (response: { data }) => {
        this.userProfileInfo = response.data;
        this.profileFilters.patchValue({
          name: this.userProfileInfo.name,
          email: this.userProfileInfo.email,
        });
      },
      error: (error) => {
        alert(error.message);
      },
    });
  }

  onSave() {
    this.profileService.updateUserProfile(this.profileFilters.value).subscribe({
      next: (response: { message: string }) => {
        this.getUserProfileInfo();
        alert(response.message);
      },
      error: (error) => {
        alert(error.message);
      },
    });
  }
}
