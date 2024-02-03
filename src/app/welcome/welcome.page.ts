import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from '../shared/components/header/header.component';
import { DividerComponent } from '../shared/components/divider/divider.component';

@Component({
  selector: 'app-welcome',
  templateUrl: 'welcome.page.html',
  styleUrls: ['welcome.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,HeaderComponent,DividerComponent],
})
export class WelcomePage {
  constructor() {}
}
