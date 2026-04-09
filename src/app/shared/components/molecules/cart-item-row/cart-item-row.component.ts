import { DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ImgFallbackDirective } from '../../../directives/img-fallback.directive';
import { ICartItem } from '../../../models/home-ui.model';
import { HOME_ASSETS } from '../../../constants/home-assets.constants';

@Component({
  selector: 'app-cart-item-row',
  standalone: true,
  imports: [ImgFallbackDirective, DecimalPipe],
  templateUrl: './cart-item-row.component.html',
  styleUrls: ['./cart-item-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemRowComponent {
  @Input({ required: true }) item!: ICartItem;
  @Input() deleteIconSrc = HOME_ASSETS.deleteIcon;

  @Output() decrease = new EventEmitter<string>();
  @Output() increase = new EventEmitter<string>();
  @Output() remove = new EventEmitter<string>();
}
