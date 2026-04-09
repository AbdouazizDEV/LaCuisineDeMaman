import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { HOME_ASSETS } from '../../../constants/home-assets.constants';
import { ImgFallbackDirective } from '../../../directives/img-fallback.directive';

@Component({
  selector: 'app-home-footer',
  standalone: true,
  imports: [ImgFallbackDirective],
  templateUrl: './home-footer.component.html',
  styleUrls: ['./home-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeFooterComponent {
  @Input({ required: true }) logoSrc!: string;
  @Input() facebookIconSrc = HOME_ASSETS.facebookIcon;
  @Input() instagramIconSrc = HOME_ASSETS.instagramIcon;
  @Input() tiktokIconSrc = HOME_ASSETS.tiktokIcon;
  @Input() phoneIconSrc = HOME_ASSETS.phoneIcon;
  @Input() copyrightIconSrc = HOME_ASSETS.copyrightIcon;
}
