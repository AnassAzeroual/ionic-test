import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from '../shared/components/header/header.component';
import { DividerComponent } from '../shared/components/divider/divider.component';
import { CustomInputComponent } from '../shared/components/custom-input/custom-input.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  templateUrl: 'welcome.page.html',
  styleUrls: ['welcome.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,HeaderComponent,DividerComponent,CustomInputComponent,ReactiveFormsModule],
})
export class WelcomePage {
  form!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      fullName: ['Anass Azeroual', []],
      intention: ['Dev', []],
      dream: ['family', []],
    });
  }
}
