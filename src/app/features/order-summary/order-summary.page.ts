import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';
import { HomeNavbarComponent } from '../../shared/components/molecules/home-navbar/home-navbar.component';
import { NavDropdownMenuComponent } from '../../shared/components/organisms/nav-dropdown-menu/nav-dropdown-menu.component';
import { HomeFooterComponent } from '../../shared/components/organisms/home-footer/home-footer.component';
import { ImgFallbackDirective } from '../../shared/directives/img-fallback.directive';
import { HOME_ASSETS } from '../../shared/constants/home-assets.constants';
import { DEFAULT_NAV_MENU_ITEMS } from '../../shared/constants/nav-menu.constants';

@Component({
  selector: 'app-order-summary-page',
  standalone: true,
  imports: [
    IonContent,
    FormsModule,
    HomeNavbarComponent,
    NavDropdownMenuComponent,
    HomeFooterComponent,
    ImgFallbackDirective,
  ],
  templateUrl: './order-summary.page.html',
  styleUrls: ['./order-summary.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderSummaryPage {
  readonly HOME_ASSETS = HOME_ASSETS;
  readonly menuOpen = signal(false);
  readonly menuItems = DEFAULT_NAV_MENU_ITEMS;

  paymentType: 'delivery' | 'online' = 'online';
  paymentMethod: 'wave' | 'orange' = 'wave';
  paymentPhone = '';

  constructor(private readonly router: Router) {}

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
    this.router.navigateByUrl('/personal-info');
  }

  onValidateNow(): void {
    this.router.navigateByUrl('/order-success');
  }
}
