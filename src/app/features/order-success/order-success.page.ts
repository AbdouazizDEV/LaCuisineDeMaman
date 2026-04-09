import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';
import { HomeNavbarComponent } from '../../shared/components/molecules/home-navbar/home-navbar.component';
import { HomeFooterComponent } from '../../shared/components/organisms/home-footer/home-footer.component';
import { NavDropdownMenuComponent } from '../../shared/components/organisms/nav-dropdown-menu/nav-dropdown-menu.component';
import { ImgFallbackDirective } from '../../shared/directives/img-fallback.directive';
import { HOME_ASSETS } from '../../shared/constants/home-assets.constants';
import { INavMenuItem } from '../../shared/models/home-ui.model';

@Component({
  selector: 'app-order-success-page',
  standalone: true,
  imports: [
    IonContent,
    HomeNavbarComponent,
    HomeFooterComponent,
    NavDropdownMenuComponent,
    ImgFallbackDirective,
  ],
  templateUrl: './order-success.page.html',
  styleUrls: ['./order-success.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderSuccessPage {
  private readonly router = inject(Router);
  private readonly location = inject(Location);

  readonly HOME_ASSETS = HOME_ASSETS;
  readonly menuOpen = signal(false);
  readonly menuItems: INavMenuItem[] = [
    { id: 'menu-1', label: 'Menu du jour', route: '/home' },
    { id: 'menu-2', label: 'Service traiteur', route: '/home' },
    { id: 'menu-3', label: 'Contacts', route: '/home' },
    { id: 'menu-4', label: 'Se connecter', route: '/profile' },
  ];

  onLogoClick(): void {
    this.router.navigateByUrl('/home');
  }

  onCartClick(): void {
    this.router.navigateByUrl('/cart');
  }

  onMenuToggle(): void {
    this.menuOpen.update((v) => !v);
  }

  onMenuClose(): void {
    this.menuOpen.set(false);
  }

  onBackClick(): void {
    this.location.back();
  }
}
