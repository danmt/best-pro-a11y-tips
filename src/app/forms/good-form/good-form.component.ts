import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-good-form',
  templateUrl: './good-form.component.html',
  styleUrls: ['./good-form.component.scss']
})
export class GoodFormComponent {
  @ViewChild('errorSummary', { static: false }) errorSummary: ElementRef;
  validationErrors = [];
  form = this.fb.group({
    personal: this.fb.group({
      firstName: [''],
      lastName: [''],
      email: ['', [Validators.required, Validators.email]],
      age: ['']
    })
  });
  emailControl = this.form.get('personal').get('email');

  constructor(private fb: FormBuilder) {}

  submit() {
    this.validationErrors = [];

    if (this.form.invalid) {
      if (this.emailControl.hasError('required')) {
        this.validationErrors.push({
          link: 'forms#email-input',
          message: 'The email input is required'
        });
      }
      if (this.emailControl.hasError('email')) {
        this.validationErrors.push({
          link: 'forms#email-input',
          message: 'The email input format is wrong'
        });
      }

      this.errorSummary.nativeElement.focus();
      return;
    }

    console.log(this.form.value);
  }
}
