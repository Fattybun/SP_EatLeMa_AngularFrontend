import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnglibModule, TooltipPosition } from '../anglib.module';

export interface button {
  icon?: string,
  function?: {},
  customCSS?: {},
  label?: string,
  disabled?: boolean,
  mode: 'basic' | 'raised' | 'stroked' | 'flat' | 'icon' | 'fab' | 'minifab',
  enabledTooltip?: {
    tooltip_label: string,
    tooltip_position: 'below' | 'above' | 'left' | 'right' | 'before' | 'after'
  }
}

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, AnglibModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent {

  @Input() button_config: button = {
    label: 'Label',
    mode: 'basic',
    customCSS: {
      color: 'blue'
    },
    disabled: false,
  }

  @Output() eventHandle: EventEmitter<string> = new EventEmitter<string>();

  onClick() {
    this.eventHandle.emit(this.button_config.label)
  }

  ngOnInit(): void {
    this.button_config = {
      mode: this.button_config.mode || 'basic',
      label: this.button_config.label || 'Text',
      disabled: this.button_config.disabled || false,
      customCSS: this.button_config.customCSS || {},
      function: this.button_config.function || undefined,
      icon: this.button_config.icon || undefined,
      enabledTooltip: {
        tooltip_label: this.button_config.enabledTooltip!.tooltip_label || 'Label',
        tooltip_position: this.button_config.enabledTooltip!.tooltip_position || 'below'
      }

    }
  }

}
