import { Component, OnInit } from '@angular/core';
import { loginFieldsData } from '../shared/data/loginData';
import { Field } from '../shared/models/index';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapBoxArrowInRight } from '@ng-icons/bootstrap-icons';
import { FormBuilderComponent } from '../shared/components/form-builder/form-builder.component';
import { LoginService } from '../shared/services/login.service';
import { Router } from '@angular/router';
import { FormBuilderService } from '../shared/services/form-builder.service';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgIconComponent, FormBuilderComponent],
  templateUrl: './login.component.html',
  viewProviders: [provideIcons({
    bootstrapBoxArrowInRight
  })]
})
export class LoginComponent implements OnInit {
  formFields: Field[] = loginFieldsData;
  formGroup;

  constructor(private loginService: LoginService, private formBuilderService: FormBuilderService, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilderService.createForm(this.formFields)
  }

  handleSubmit() {
    this.loginService.login(this.formGroup.value).subscribe({
      next: response => {
        localStorage.setItem('user', JSON.stringify(response));
        this.authService.isLoggedIn$.next(true);
        this.router.navigate(['/homelayout/home']);
      }
  });
  }
}