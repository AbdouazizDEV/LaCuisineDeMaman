import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ImgFallbackDirective } from '../../../directives/img-fallback.directive';
import { IMenuDishCard } from '../../../models/home-ui.model';

@Component({
  selector: 'app-menu-dish-card',
  standalone: true,
  imports: [ImgFallbackDirective, RouterLink],
  templateUrl: './menu-dish-card.component.html',
  styleUrls: ['./menu-dish-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuDishCardComponent {
  @Input({ required: true }) dish!: IMenuDishCard;
}
