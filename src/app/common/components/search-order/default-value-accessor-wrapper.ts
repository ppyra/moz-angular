import { Component, HostBinding, Input, ViewChild } from '@angular/core';
import { ControlValueAccessor, DefaultValueAccessor } from '@angular/forms';

@Component({
    template: ''
  })
export abstract class DefaultValueAccessorWrapper implements ControlValueAccessor {
    @ViewChild(DefaultValueAccessor, {static: true}) input: DefaultValueAccessor;
    _disabled;

    @HostBinding('class.readonly')
    @Input() set readonly(value) {
        this._readonly = value;
    }

    @Input() set disabled(isDisabled) {
        this.setDisabledState(isDisabled);
    }

    get readonly() {
        return this._readonly;
    }

    private _readonly: boolean;

    writeValue(obj: any): void {
        this.input.writeValue(obj);
    }

    registerOnChange(fn: any): void {
        this.input.registerOnChange(fn);
    }

    registerOnTouched(fn: any): void {
        this.input.registerOnTouched(fn);
    }

    setDisabledState?(isDisabled: boolean | string): void {
        if (isDisabled || isDisabled === '') {
            this._disabled = true;
            this.input.setDisabledState(true);
        } else {
            this._disabled = false;
            this.input.setDisabledState(false);
        }
    }

    getElement(): HTMLInputElement {
        return this.input['_elementRef'].nativeElement;
    }
}
