import { IonHeader, IonIcon, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss'],
  standalone:true,
  imports: [IonHeader, IonToolbar, IonTitle, IonIcon],
})
export class DividerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('');
    
  }

}
