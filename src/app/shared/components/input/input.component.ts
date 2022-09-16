import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.sass']
})
export class InputComponent {

  @Input() placeholderElement!: string;
  @Input() modelElement!: string;
  @Output() modelElementChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() onKeyUp: EventEmitter<string> = new EventEmitter<string>();

  emitOnKeyUpEvent() {
    this.modelElementChange.emit(this.modelElement);
    this.onKeyUp.emit();
  }
}
