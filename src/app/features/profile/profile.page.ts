import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
  template: `
    <ion-header><ion-toolbar><ion-title>Profil</ion-title></ion-toolbar></ion-header>
    <ion-content class="ion-padding">Avatar, statistiques, parametres.</ion-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfilePage {}
