import { Injectable,inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
snackbar = inject(MatSnackBar)
  constructor() { }

  success(message:string){
    return  this.snackbar.open(message,'Close',{
          duration:2000,
           panelClass:['snackbar-success']
         });
  }

  error(message:string){
    return  this.snackbar.open(message,'Dismiss',{
          duration:2000,
           panelClass:['snackbar-error']
         })
  }
}
