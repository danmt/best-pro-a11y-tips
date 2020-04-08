import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-bad-form',
  templateUrl: './bad-form.component.html',
  styleUrls: ['./bad-form.component.scss']
})
export class BadFormComponent {
  submitted = false;
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
    console.log(this.form.value);
    this.submitted = true;
  }

  reset() {
    this.form.reset();
  }
}
