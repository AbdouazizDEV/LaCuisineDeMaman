import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
  template: `
    <ion-header><ion-toolbar><ion-title>Recherche</ion-title></ion-toolbar></ion-header>
    <ion-content class="ion-padding">Resultats de recherche et filtres.</ion-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchPage {}
