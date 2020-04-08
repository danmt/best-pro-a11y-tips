import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonsRoutingModule } from './buttons-routing.module';
import { ButtonsComponent } from './buttons.component';
import { BadButtonComponent } from './bad-button/bad-button.component';
import { GoodButtonComponent } from './good-button/good-button.component';

@NgModule({
  declarations: [ButtonsComponent, BadButtonComponent, GoodButtonComponent],
  imports: [CommonModule, ButtonsRoutingModule]
})
export class ButtonsModule {}
