import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder,Validators,FormGroup,ReactiveFormsModule } from '@angular/forms';
import { ConfessionService } from '../../../services/api-consumer/confessions/confession.service';
import { SnackbarService } from '../../../services/snackbar/snackbar.service';

@Component({
  selector: 'app-confessionpage',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './confessionpage.component.html',
  styleUrl: './confessionpage.component.scss'
})
export class ConfessionpageComponent {
  confessionsForm!: FormGroup;
  categories = ['Funny', 'Suggestion', 'Sad','Lesson', 'Other'];
  snackbarservice = inject(SnackbarService)

  constructor(private fb: FormBuilder,private confessionsService: ConfessionService) {
      this.confessionsForm = this.fb.group({
      message: ['', [Validators.required, Validators.minLength(5)]],
      category: ['', Validators.required],
      emotion: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit(): void {
  
}

  onSubmit(){
    if(this.confessionsForm.valid){
      this.confessionsService.postConfessions(this.confessionsForm.value).subscribe({
        next: (value) =>{
          if(value.error){
               this.snackbarservice.error('Submission Failed')
          }
          else{
               this.snackbarservice.success('Submitted Successfully')
          }
         
        },
        error: (error) => {
       
        }
      })
      this.confessionsForm.reset()
    }
  }
}