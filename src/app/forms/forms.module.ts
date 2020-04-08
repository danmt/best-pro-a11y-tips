import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { BadFormComponent } from './bad-form/bad-form.component';
import { GoodFormComponent } from './good-form/good-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormsComponent, BadFormComponent, GoodFormComponent],
  imports: [CommonModule, FormsRoutingModule, ReactiveFormsModule]
})
export class FormsModule {}
