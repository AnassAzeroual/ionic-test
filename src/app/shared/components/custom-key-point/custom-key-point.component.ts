/* eslint-disable @angular-eslint/no-input-rename */
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-key-point',
  templateUrl: './custom-key-point.component.html',
  styleUrls: ['./custom-key-point.component.scss'],
  standalone: true,
})
export class CustomKeyPointComponent {
  image = '';
  @Input('imgName') set newImage(imgName: string) {
    this.image = `../../../../assets/SVGs/${imgName}`
  }
  constructor() { }

}
