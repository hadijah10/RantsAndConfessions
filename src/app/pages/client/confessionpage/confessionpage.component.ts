import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder,Validators,FormGroup,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-confessionpage',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './confessionpage.component.html',
  styleUrl: './confessionpage.component.scss'
})
export class ConfessionpageComponent {
  confessionsForm!: FormGroup;
  categories = ['Funny', 'Suggestion', 'Sad','Lesson', 'Other'];

  constructor(private fb: FormBuilder) {
      this.confessionsForm = this.fb.group({
      message: ['', [Validators.required, Validators.minLength(5)]],
      category: ['', Validators.required],
      emotion: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  
}

  onSubmit(){

  }
}