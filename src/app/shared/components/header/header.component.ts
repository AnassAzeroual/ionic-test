import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IonContent, IonHeader, IonIcon, IonMenu, IonTitle, IonToolbar, MenuController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone:true,
  imports: [IonicModule],
})
export class HeaderComponent implements OnInit {
  public actionSheetButtons = [
    {
      text: 'Delete',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Share',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];
  constructor() { }
  ngOnInit(): void {console.log('');
  }

}
