import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { HOME_ASSETS } from '../../../constants/home-assets.constants';
import { ImgFallbackDirective } from '../../../directives/img-fallback.directive';

@Component({
  selector: 'app-home-navbar',
  standalone: true,
  imports: [ImgFallbackDirective],
  templateUrl: './home-navbar.component.html',
  styleUrls: ['./home-navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeNavbarComponent {
  @Input() logoSrc = HOME_ASSETS.logo;
  @Input() cartIconSrc = HOME_ASSETS.cartIcon;
  @Input() menuIconSrc = HOME_ASSETS.menuIcon;

  @Output() logoClick = new EventEmitter<void>();
  @Output() cartClick = new EventEmitter<void>();
  @Output() menuClick = new EventEmitter<void>();
}
