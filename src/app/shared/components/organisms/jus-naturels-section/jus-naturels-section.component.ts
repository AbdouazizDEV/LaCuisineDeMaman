import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { JuiceProductCardComponent } from '../../molecules/juice-product-card/juice-product-card.component';
import { IJuiceProduct } from '../../../models/home-ui.model';

@Component({
  selector: 'app-jus-naturels-section',
  standalone: true,
  imports: [JuiceProductCardComponent],
  templateUrl: './jus-naturels-section.component.html',
  styleUrls: ['./jus-naturels-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JusNaturelsSectionComponent {
  @Input({ required: true }) juices: IJuiceProduct[] = [];
  @Output() addToCart = new EventEmitter<string>();
}
