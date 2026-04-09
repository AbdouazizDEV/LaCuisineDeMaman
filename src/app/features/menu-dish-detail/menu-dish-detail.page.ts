import { Location } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';
import { AppButtonComponent } from '../../shared/components/atoms/app-button/app-button.component';
import { HomeNavbarComponent } from '../../shared/components/molecules/home-navbar/home-navbar.component';
import { HomeFooterComponent } from '../../shared/components/organisms/home-footer/home-footer.component';
import { NavDropdownMenuComponent } from '../../shared/components/organisms/nav-dropdown-menu/nav-dropdown-menu.component';
import { ImgFallbackDirective } from '../../shared/directives/img-fallback.directive';
import { HOME_ASSETS } from '../../shared/constants/home-assets.constants';
import { IMenuDishDetail, MENU_DISH_BY_ID } from '../../shared/data/menu-dish-detail.data';
import { INavMenuItem } from '../../shared/models/home-ui.model';

@Component({
  selector: 'app-menu-dish-detail-page',
  standalone: true,
  imports: [
    IonContent,
    HomeNavbarComponent,
    HomeFooterComponent,
    NavDropdownMenuComponent,
    ImgFallbackDirective,
    AppButtonComponent,
  ],
  templateUrl: './menu-dish-detail.page.html',
  styleUrls: ['./menu-dish-detail.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuDishDetailPage implements OnInit {
  private readonly route = inject(ActivatedRoute);
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

  readonly detail = signal<IMenuDishDetail | null>(null);

  readonly selectedIndex = signal(0);

  readonly mainImage = computed(() => {
    const d = this.detail();
    if (!d) return '';
    const i = this.selectedIndex();
    return d.gallery[i] ?? d.heroImage;
  });

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('dishId');
    if (!id || !MENU_DISH_BY_ID[id]) {
      void this.router.navigateByUrl('/home');
      return;
    }
    this.detail.set(MENU_DISH_BY_ID[id]);
  }

  onLogoClick(): void {
    void this.router.navigateByUrl('/home');
  }

  onCartClick(): void {
    void this.router.navigateByUrl('/cart');
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

  onOrderNow(): void {
    void this.router.navigateByUrl('/cart');
  }

  prevSlide(): void {
    const d = this.detail();
    if (!d?.gallery.length) return;
    const n = d.gallery.length;
    this.selectedIndex.update((i) => (i - 1 + n) % n);
  }

  nextSlide(): void {
    const d = this.detail();
    if (!d?.gallery.length) return;
    const n = d.gallery.length;
    this.selectedIndex.update((i) => (i + 1) % n);
  }

  selectSlide(index: number): void {
    this.selectedIndex.set(index);
  }
}
