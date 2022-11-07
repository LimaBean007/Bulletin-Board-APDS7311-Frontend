import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthServiceService } from './auth-service.service';
import { Observable } from 'rxjs';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authservice: AuthServiceService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    //gets the token and checks if the request for autherization is accepted
    const authToken = this.authservice.getoken();
    const authRequest =
      // note the space
      request.clone({ headers: request.headers.set("Authorization", "Bearer " + authToken) });
    return next.handle(authRequest);
  }
}
