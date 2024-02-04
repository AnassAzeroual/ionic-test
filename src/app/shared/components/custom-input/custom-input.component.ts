/* eslint-disable @angular-eslint/no-input-rename */
import { NgClass } from '@angular/common';
import { Component, Input, OnDestroy, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonHeader, IonIcon, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar,NgClass, IonTitle, IonIcon,FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true
    }
  ]
})
export class CustomInputComponent implements ControlValueAccessor, OnDestroy {
  @Input('name') name!: string;
  @Input('placeholder') placeholder!: string;


  isDisabled = false;
  model: any;

  private onTouch = () => { };
  private onChange = (val: any) => { };


  inputChanged(e: any) {
    this.onChange(e);
    this.onTouch();
  }

  writeValue(val: any): void {
    this.model = val;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
  ngOnDestroy(): void {
    this.model = null;
  }
}
