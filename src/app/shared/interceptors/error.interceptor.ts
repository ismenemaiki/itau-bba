import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private snackBar: MatSnackBar) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('interceptor', req);
    
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log('Erro capturado:', error);
        
        const errorMessage = error.error?.message || error.message || 'Erro desconhecido';

        this.snackBar.open('Ocorreu um erro: ' + errorMessage, 'Fechar', {
          duration: 5000,
          horizontalPosition: 'right',
          verticalPosition: 'top'
        });

        return throwError(() => new Error(errorMessage));
      })
    );
  }
}

