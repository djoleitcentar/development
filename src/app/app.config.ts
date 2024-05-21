import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AuthTokenInterceptorService } from './shared/services/auth-token-interceptor.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(
    withInterceptorsFromDi(),
  ),
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthTokenInterceptorService,
    multi: true,
  }, provideAnimationsAsync()
]
};
