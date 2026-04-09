import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';
import { HomeNavbarComponent } from '../../shared/components/molecules/home-navbar/home-navbar.component';
import { HomeHeroComponent } from '../../shared/components/organisms/home-hero/home-hero.component';
import { MenuDuJourSectionComponent } from '../../shared/components/organisms/menu-du-jour-section/menu-du-jour-section.component';
import { JusNaturelsSectionComponent } from '../../shared/components/organisms/jus-naturels-section/jus-naturels-section.component';
import { ServiceTraiteurSectionComponent } from '../../shared/components/organisms/service-traiteur-section/service-traiteur-section.component';
import { AvisClientsSectionComponent } from '../../shared/components/organisms/avis-clients-section/avis-clients-section.component';
import { ContactSectionComponent } from '../../shared/components/organisms/contact-section/contact-section.component';
import { HomeFooterComponent } from '../../shared/components/organisms/home-footer/home-footer.component';
import { NavDropdownMenuComponent } from '../../shared/components/organisms/nav-dropdown-menu/nav-dropdown-menu.component';
import { HOME_ASSETS } from '../../shared/constants/home-assets.constants';
import { DEFAULT_NAV_MENU_ITEMS } from '../../shared/constants/nav-menu.constants';
import {
  IClientReview,
  IDayFilterOption,
  IJuiceProduct,
  IMenuDishCard,
} from '../../shared/models/home-ui.model';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    IonContent,
    HomeNavbarComponent,
    HomeHeroComponent,
    MenuDuJourSectionComponent,
    JusNaturelsSectionComponent,
    ServiceTraiteurSectionComponent,
    AvisClientsSectionComponent,
    ContactSectionComponent,
    HomeFooterComponent,
    NavDropdownMenuComponent,
  ],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  readonly menuOpen = signal(false);
  readonly menuItems = DEFAULT_NAV_MENU_ITEMS;
  readonly HOME_ASSETS = HOME_ASSETS;
  readonly dayFilters: IDayFilterOption[] = [
    { id: 'monday', label: 'Lundi' },
    { id: 'tuesday', label: 'Mardi' },
    { id: 'wednesday', label: 'Mercredi' },
    { id: 'thursday', label: 'Jeudi' },
    { id: 'friday', label: 'Vendredi' },
    { id: 'saturday', label: 'Samedi' },
    { id: 'sunday', label: 'Dimanche' },
  ];

  readonly menuDish: IMenuDishCard = {
    id: 'thiebou-dieune',
    title: 'Thiebou dieune',
    imageUrl: HOME_ASSETS.dish,
  };

  readonly selectedFilterId = signal<string>(this.dayFilters[0].id);
  readonly juices: IJuiceProduct[] = [
    {
      id: 'juice-1',
      title: 'Jus bissap',
      imageUrl: HOME_ASSETS.juiceBissap,
      priceCurrent: '3 500 FCA',
      priceOld: '5 500 FCA',
    },
    {
      id: 'juice-2',
      title: 'Jus bouye',
      imageUrl: HOME_ASSETS.juiceBouye,
      priceCurrent: '3 500 FCA',
      isSoldOut: true,
    },
  ];

  readonly reviews: IClientReview[] = [
    {
      id: 'review-1',
      authorName: 'Ndeye Fatou',
      authorAvatarUrl: HOME_ASSETS.avatarClient,
      rating: 4,
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  onFilterChange(filterId: string): void {
    this.selectedFilterId.set(filterId);
  }

  constructor(private readonly router: Router) {}

  onCartClick(): void {
    this.router.navigateByUrl('/cart');
  }

  onLogoClick(): void {
    this.router.navigateByUrl('/home');
  }

  onMenuClick(): void {
    this.menuOpen.update((v) => !v);
  }

  onMenuClose(): void {
    this.menuOpen.set(false);
  }

  onOrderNow(): void {
    this.router.navigateByUrl('/cart');
  }

  onAddJuiceToCart(_juiceId: string): void {
    // Placeholder for add juice to cart.
  }

  onTraiteurRequest(): void {
    this.router.navigateByUrl('/service-type');
  }

  onContactSubmit(): void {
    // Placeholder for contact form submit.
  }
}
