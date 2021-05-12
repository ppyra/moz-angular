import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DefaultValueAccessorWrapper } from '../search-order/default-value-accessor-wrapper';

@Component({
  selector: 'input-text',
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => InputTextComponent), multi: true }],
  template: `
      <div class="form-group d-flex">
      <span *ngIf="inlineLabel" class="inline-label">
          <ng-container *ngTemplateOutlet="content"></ng-container>
      </span>
          <label class="has-float-label flex-grow-1 text-secondary">
              <input ngDefaultControl
                     type="text" class="form-control"
                     autoFocus
                     [placeholder]="overridePlaceholder || ' '">
              <span *ngIf="!inlineLabel">
              <ng-container *ngTemplateOutlet="content"></ng-container>
          </span>
          </label>
      </div>
      <ng-template #content>
          <ng-content></ng-content>
      </ng-template>
  `,
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent extends DefaultValueAccessorWrapper{
  @Input() overridePlaceholder: string;
  @Input() inlineLabel = false;
}

