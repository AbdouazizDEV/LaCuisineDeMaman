import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';
import { HomeNavbarComponent } from '../../shared/components/molecules/home-navbar/home-navbar.component';
import { HomeFooterComponent } from '../../shared/components/organisms/home-footer/home-footer.component';
import { NavDropdownMenuComponent } from '../../shared/components/organisms/nav-dropdown-menu/nav-dropdown-menu.component';
import { ImgFallbackDirective } from '../../shared/directives/img-fallback.directive';
import { HOME_ASSETS } from '../../shared/constants/home-assets.constants';
import { DEFAULT_NAV_MENU_ITEMS } from '../../shared/constants/nav-menu.constants';
import { ServiceTypeCardComponent } from '../../shared/components/molecules/service-type-card/service-type-card.component';

@Component({
  selector: 'app-service-type-page',
  standalone: true,
  imports: [
    IonContent,
    HomeNavbarComponent,
    HomeFooterComponent,
    NavDropdownMenuComponent,
    ImgFallbackDirective,
    ServiceTypeCardComponent,
  ],
  templateUrl: './service-type.page.html',
  styleUrls: ['./service-type.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceTypePage {
  readonly HOME_ASSETS = HOME_ASSETS;
  readonly serviceCards = [
    {
      id: 'standard',
      title: 'Service standard',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
      imageSrc: HOME_ASSETS.serviceStandard,
      ariaLabel: 'Choisir service standard',
      top: 104,
    },
    {
      id: 'premium',
      title: 'Service Premium',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
      imageSrc: HOME_ASSETS.servicePremium,
      ariaLabel: 'Choisir service premium',
      top: 425,
    },
  ] as const;
  readonly menuOpen = signal(false);
  readonly menuItems = DEFAULT_NAV_MENU_ITEMS;

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
    this.router.navigateByUrl('/home');
  }

  onServiceCardClick(serviceId: string): void {
    this.router.navigateByUrl(`/service-detail/${serviceId}`);
  }
}
