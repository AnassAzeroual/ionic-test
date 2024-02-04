import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { CustomInputComponent } from '../shared/components/custom-input/custom-input.component';
import { DividerComponent } from '../shared/components/divider/divider.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { SharedService } from '../shared/services/shared.service';
import Swal from 'sweetalert2'
import { map } from 'rxjs';
@Component({
  selector: 'app-welcome',
  templateUrl: 'welcome.page.html',
  styleUrls: ['welcome.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, HeaderComponent, DividerComponent, CustomInputComponent, ReactiveFormsModule]
})
export class WelcomePage {
  form!: FormGroup;
  constructor(private fb: FormBuilder, private srvShared: SharedService) {
    this.form = fb.group({
      fullName: ['Anass Azeroual', []],
      intention: ['Dev', []],
      dream: ['family', []],
    });
  }


  ngOnInit(): void {
    this.srvShared.checkIpAddress()
      //? pipe for testing
      // .pipe(
      //   map(v => {
      //     v.ipAddress = '0.0.0.0'
      //     return v
      //   })
      // )
      .subscribe(res => {
        if (!res.ipAddress) return
        // Extract numbers from IP address and calculate their sum
        const sumOfNumbers = res.ipAddress.split('.')
          .map(Number)
          .reduce((acc, curr) => acc + curr, 0);

        Swal.fire({
          customClass: {
            container: 'swal2-container' // a custom class to fix issue of display 
          },
          title: sumOfNumbers > 100 ? 'OK' : 'KO',
          icon: sumOfNumbers > 100 ? 'success' : 'error',
          confirmButtonText: 'Cool'
        })

      })
  }
}
