import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-favorites-page',
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
  template: `
    <ion-header><ion-toolbar><ion-title>Favoris</ion-title></ion-toolbar></ion-header>
    <ion-content class="ion-padding">Liste des recettes sauvegardees.</ion-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoritesPage {}
