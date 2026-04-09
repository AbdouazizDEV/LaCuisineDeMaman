import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Router } from '@angular/router';
import { INavMenuItem } from '../../../models/home-ui.model';
import { ImgFallbackDirective } from '../../../directives/img-fallback.directive';

@Component({
  selector: 'app-nav-dropdown-menu',
  standalone: true,
  imports: [ImgFallbackDirective],
  templateUrl: './nav-dropdown-menu.component.html',
  styleUrls: ['./nav-dropdown-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavDropdownMenuComponent {
  private readonly router = inject(Router);

  @Input({ required: true }) open = false;
  @Input({ required: true }) items: INavMenuItem[] = [];
  @Output() itemSelected = new EventEmitter<void>();
  readonly userIconSrc = 'assets/images/user.svg';

  isLoginItem(item: INavMenuItem): boolean {
    return item.label.trim().toLowerCase() === 'se connecter';
  }

  onItemClick(item: INavMenuItem): void {
    this.itemSelected.emit();
    if (item.fragment) {
      void this.router.navigate([item.route], { fragment: item.fragment }).then(() => {
        this.scrollToFragment(item.fragment!);
      });
      return;
    }
    void this.router.navigateByUrl(item.route);
  }

  private scrollToFragment(elementId: string): void {
    requestAnimationFrame(() => {
      const el = document.getElementById(elementId);
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
}
