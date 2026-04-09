import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-recipe-detail-page',
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
  template: `
    <ion-header><ion-toolbar><ion-title>Detail recette</ion-title></ion-toolbar></ion-header>
    <ion-content class="ion-padding">Hero image, ingredients, steps, nutrition.</ion-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeDetailPage {}
