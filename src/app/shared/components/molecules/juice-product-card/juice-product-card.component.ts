import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ImgFallbackDirective } from '../../../directives/img-fallback.directive';
import { IJuiceProduct } from '../../../models/home-ui.model';
import { HOME_ASSETS } from '../../../constants/home-assets.constants';

@Component({
  selector: 'app-juice-product-card',
  standalone: true,
  imports: [ImgFallbackDirective],
  templateUrl: './juice-product-card.component.html',
  styleUrls: ['./juice-product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JuiceProductCardComponent {
  @Input({ required: true }) product!: IJuiceProduct;
  @Input() addIconSrc = HOME_ASSETS.addCartIcon;
  @Output() addToCart = new EventEmitter<string>();

  onAddToCart(): void {
    if (!this.product.isSoldOut) {
      this.addToCart.emit(this.product.id);
    }
  }
}
