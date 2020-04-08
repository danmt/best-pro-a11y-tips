import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'button[app-good-button]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./good-button.component.scss'],
  host: { class: 'button' }
})
export class GoodButtonComponent {
  @Input() type: 'primary' | 'secondary' = 'primary';

  @HostBinding('class.button--primary')
  get isPrimary() {
    return this.type === 'primary';
  }

  @HostBinding('class.button--secondary')
  get isSecondary() {
    return this.type === 'secondary';
  }
}
