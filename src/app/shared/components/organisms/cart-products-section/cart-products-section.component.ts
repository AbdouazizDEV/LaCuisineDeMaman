import { DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { AppButtonComponent } from '../../atoms/app-button/app-button.component';
import { ICartItem } from '../../../models/home-ui.model';
import { CartItemRowComponent } from '../../molecules/cart-item-row/cart-item-row.component';

@Component({
  selector: 'app-cart-products-section',
  standalone: true,
  imports: [CartItemRowComponent, AppButtonComponent, DecimalPipe],
  templateUrl: './cart-products-section.component.html',
  styleUrls: ['./cart-products-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartProductsSectionComponent {
  @Input({ required: true }) items: ICartItem[] = [];
  @Input({ required: true }) subtotal = 0;
  @Output() decrease = new EventEmitter<string>();
  @Output() increase = new EventEmitter<string>();
  @Output() remove = new EventEmitter<string>();
  @Output() checkout = new EventEmitter<void>();
}
