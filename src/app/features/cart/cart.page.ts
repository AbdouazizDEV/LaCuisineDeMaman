import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';
import { HomeNavbarComponent } from '../../shared/components/molecules/home-navbar/home-navbar.component';
import { JuiceProductCardComponent } from '../../shared/components/molecules/juice-product-card/juice-product-card.component';
import { CartProductsSectionComponent } from '../../shared/components/organisms/cart-products-section/cart-products-section.component';
import { HomeFooterComponent } from '../../shared/components/organisms/home-footer/home-footer.component';
import { NavDropdownMenuComponent } from '../../shared/components/organisms/nav-dropdown-menu/nav-dropdown-menu.component';
import { HOME_ASSETS } from '../../shared/constants/home-assets.constants';
import { ICartItem, INavMenuItem, IJuiceProduct } from '../../shared/models/home-ui.model';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [
    IonContent,
    HomeNavbarComponent,
    NavDropdownMenuComponent,
    CartProductsSectionComponent,
    JuiceProductCardComponent,
    HomeFooterComponent,
  ],
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartPage {
  readonly HOME_ASSETS = HOME_ASSETS;
  readonly menuOpen = signal(false);
  readonly menuItems: INavMenuItem[] = [
    { id: 'menu-1', label: 'Menu du jour', route: '/home' },
    { id: 'menu-2', label: 'Service traiteur', route: '/home' },
    { id: 'menu-3', label: 'Contacts', route: '/home' },
    { id: 'menu-4', label: 'Se connecter', route: '/profile' },
  ];

  readonly cartItems = signal<ICartItem[]>([
    {
      id: 'cart-1',
      title: 'Thiebou dieune',
      imageUrl: HOME_ASSETS.cartThiebouDieune,
      unitPrice: 3500,
      quantity: 1,
    },
    {
      id: 'cart-2',
      title: 'Jus bissap',
      imageUrl: HOME_ASSETS.cartJuice,
      unitPrice: 3500,
      quantity: 1,
    },
  ]);

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

  readonly subtotal = computed(() =>
    this.cartItems().reduce((sum, item) => sum + item.unitPrice * item.quantity, 0),
  );

  constructor(private readonly router: Router) {}

  onMenuToggle(): void {
    this.menuOpen.update((v) => !v);
  }

  onMenuClose(): void {
    this.menuOpen.set(false);
  }

  onDecrease(id: string): void {
    this.cartItems.update((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item,
      ),
    );
  }

  onIncrease(id: string): void {
    this.cartItems.update((items) =>
      items.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)),
    );
  }

  onRemove(id: string): void {
    this.cartItems.update((items) => items.filter((item) => item.id !== id));
  }

  onAddJuiceToCart(juiceId: string): void {
    if (juiceId !== 'juice-1') return;
    this.cartItems.update((items) => {
      const exists = items.find((i) => i.id === 'cart-2');
      if (exists) {
        return items.map((i) => (i.id === 'cart-2' ? { ...i, quantity: i.quantity + 1 } : i));
      }
      return [
        ...items,
        {
          id: 'cart-2',
          title: 'Jus bissap',
          imageUrl: HOME_ASSETS.cartJuice,
          unitPrice: 3500,
          quantity: 1,
        },
      ];
    });
  }

  onCartClick(): void {
    // Already on cart.
  }

  onLogoClick(): void {
    this.router.navigateByUrl('/home');
  }

  onCheckout(): void {
    this.router.navigateByUrl('/personal-info');
  }
}
