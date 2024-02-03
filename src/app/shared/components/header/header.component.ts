import { Component, OnInit } from '@angular/core';
import { IonHeader, IonIcon, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone:true,
  imports: [IonHeader, IonToolbar, IonTitle, IonIcon],
})
export class HeaderComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {console.log('');
  }

}
