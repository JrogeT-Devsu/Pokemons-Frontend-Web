import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass']
})
export class ButtonComponent {

  @Output() clickEvent = new EventEmitter();
  @Input() text!: string;
  @Input() actionIcon!: string;

  public emitEvent() {
    this.clickEvent.emit();
  }

}
