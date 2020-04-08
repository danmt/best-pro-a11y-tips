import { Component, ElementRef, ViewChild, Input, Output, EventEmitter, Renderer2, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-bad-button',
  templateUrl: './bad-button.component.html',
  styleUrls: ['./bad-button.component.scss']
})
export class BadButtonComponent implements AfterViewInit {
  @ViewChild('buttonRef', { static: true }) buttonRef: ElementRef;
  @Input() type: 'primary' | 'secondary' = 'primary';
  @Input() disabled = false;
  @Output() pressed = new EventEmitter();

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.renderer.addClass(this.buttonRef.nativeElement, `button--${this.type}`);
    this.renderer.addClass(this.buttonRef.nativeElement, this.disabled ? 'disabled' : 'enabled');
    this.renderer.setAttribute(this.buttonRef.nativeElement, 'tabindex', this.disabled ? '-1' : '0');

    if (this.disabled) {
      this.renderer.setAttribute(this.buttonRef.nativeElement, 'aria-disabled', 'true');
    }
  }

  onClick(event) {
    if (!this.disabled) {
      this.pressed.emit(event);
    }
  }

  onKeyDown(event) {
    if (this.disabled) {
      return;
    }

    switch (event.key) {
      case ' ':
      case 'Enter':
        event.stopPropagation();
        event.preventDefault();
        this.pressed.emit(event);
        break;
      default:
        break;
    }
  }
}
