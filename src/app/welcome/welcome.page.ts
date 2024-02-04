import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import Swal from 'sweetalert2';
import { CustomInputComponent } from '../shared/components/custom-input/custom-input.component';
import { CustomKeyPointComponent } from '../shared/components/custom-key-point/custom-key-point.component';
import { DividerComponent } from '../shared/components/divider/divider.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { SharedService } from '../shared/services/shared.service';
@Component({
  selector: 'app-welcome',
  templateUrl: 'welcome.page.html',
  styleUrls: ['welcome.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, NgFor, NgIf, JsonPipe, IonTitle, IonContent, HeaderComponent, DividerComponent, CustomInputComponent, CustomKeyPointComponent, ReactiveFormsModule]
})
export class WelcomePage {
  form!: FormGroup;
  keyPoints: { img: string, description: string }[] = []
  isSubmitted = false
  constructor(private fb: FormBuilder, private srvShared: SharedService) {
    this.form = fb.group({
      fullName: [null, [Validators.required]],
      intention: ['L\'intention, l\'objectif de ce Shynlei', [Validators.required]],
      dream: [null, [Validators.required]],
    });
    this.keyPoints = [
      { img: 'Page-1.svg', description: 'Le rêve libre l\'expression' },
      { img: 'Page-2.svg', description: 'Le sens éclaire le parcours' },
      { img: 'Page-3.svg', description: 'La différence rend unique' },
      { img: 'Page-4.svg', description: 'La valeur humaine met en mouvement' },
      { img: 'Page-5.svg', description: 'La clé exprime le style' },
      { img: 'Page-6.svg', description: 'Le parcours associe rêve et réalité' },
      { img: 'Page-7.svg', description: 'Le ciel bleu révèle l\'alignement' },
    ]
  }

  get f() {
    return this.form.controls;
  }


  private checkIpAddress() {
    this.srvShared.checkIpAddress()
      //? pipe for testing
      // .pipe(
      //   map(v => {
      //     v.ipAddress = '0.0.0.0'
      //     return v
      //   })
      // )
      .subscribe(res => {
        if (!res.ipAddress) return;
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
        });

      });
  }

  submit() {
    this.isSubmitted = true;
    console.log(this.form.value);
    if (this.form.valid) {
      this.checkIpAddress();
    }

  }
}
