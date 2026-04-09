import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { HOME_ASSETS } from '../../../constants/home-assets.constants';
import { ImgFallbackDirective } from '../../../directives/img-fallback.directive';

@Component({
  selector: 'app-home-hero',
  standalone: true,
  imports: [ImgFallbackDirective],
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeHeroComponent {
  @Input() chefImageSrc = HOME_ASSETS.chef;
  @Input() dotsImageSrc = HOME_ASSETS.dots;
  @Input() maskImageSrc = HOME_ASSETS.mask;
}
