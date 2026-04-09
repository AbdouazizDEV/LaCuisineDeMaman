import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-explore-page',
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
  template: `
    <ion-header><ion-toolbar><ion-title>Explorer</ion-title></ion-toolbar></ion-header>
    <ion-content class="ion-padding">Recherche, filtres et grille de recettes.</ion-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExplorePage {}
