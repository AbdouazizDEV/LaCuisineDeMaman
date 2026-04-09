import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { INavMenuItem } from '../../../models/home-ui.model';
import { ImgFallbackDirective } from '../../../directives/img-fallback.directive';

@Component({
  selector: 'app-nav-dropdown-menu',
  standalone: true,
  imports: [RouterLink, ImgFallbackDirective],
  templateUrl: './nav-dropdown-menu.component.html',
  styleUrls: ['./nav-dropdown-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavDropdownMenuComponent {
  @Input({ required: true }) open = false;
  @Input({ required: true }) items: INavMenuItem[] = [];
  @Output() itemSelected = new EventEmitter<void>();
  readonly userIconSrc = 'assets/images/user.svg';

  isLoginItem(item: INavMenuItem): boolean {
    return item.label.trim().toLowerCase() === 'se connecter';
  }
}
