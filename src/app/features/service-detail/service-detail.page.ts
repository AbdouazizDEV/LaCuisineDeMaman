import { DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { IonContent } from '@ionic/angular/standalone';
import { HomeNavbarComponent } from '../../shared/components/molecules/home-navbar/home-navbar.component';
import { HomeFooterComponent } from '../../shared/components/organisms/home-footer/home-footer.component';
import { NavDropdownMenuComponent } from '../../shared/components/organisms/nav-dropdown-menu/nav-dropdown-menu.component';
import { ImgFallbackDirective } from '../../shared/directives/img-fallback.directive';
import { HOME_ASSETS } from '../../shared/constants/home-assets.constants';
import { DEFAULT_NAV_MENU_ITEMS } from '../../shared/constants/nav-menu.constants';
import { CateringRequestStateService } from '../../shared/services/catering-request-state.service';

interface IServiceMenuItem {
  id: string;
  title: string;
  price: number;
}

interface IServiceCategory {
  id: string;
  label: string;
  iconSrc: string;
  items: IServiceMenuItem[];
}

@Component({
  selector: 'app-service-detail-page',
  standalone: true,
  imports: [
    IonContent,
    DecimalPipe,
    HomeNavbarComponent,
    HomeFooterComponent,
    NavDropdownMenuComponent,
    ImgFallbackDirective,
  ],
  templateUrl: './service-detail.page.html',
  styleUrls: ['./service-detail.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceDetailPage {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly cateringState = inject(CateringRequestStateService);

  readonly HOME_ASSETS = HOME_ASSETS;
  readonly menuOpen = signal(false);
  readonly menuItems = DEFAULT_NAV_MENU_ITEMS;

  readonly serviceId = toSignal(
    this.route.paramMap.pipe(
      map((pm) => (pm.get('serviceId') === 'premium' ? 'premium' : 'standard')),
    ),
    { initialValue: 'standard' },
  );

  readonly pageTitle = computed(() =>
    this.serviceId() === 'premium' ? 'Service Premium' : 'Service standard',
  );

  readonly categories: IServiceCategory[] = [
    {
      id: 'breakfast',
      label: 'Petit déjeuner',
      iconSrc: HOME_ASSETS.iconBreakfast,
      items: [
        { id: 'breakfast-pain-thon', title: 'Pain thon', price: 1000 },
        { id: 'breakfast-pain-nambe', title: 'Pain Nambé, mayonnaise', price: 1000 },
        { id: 'breakfast-cafe', title: 'Café, lait thé', price: 500 },
        { id: 'breakfast-eau', title: 'Eau', price: 100 },
        { id: 'breakfast-jus', title: 'Jus', price: 100 },
      ],
    },
    {
      id: 'lunch',
      label: 'Déjeuner',
      iconSrc: HOME_ASSETS.iconLunch,
      items: [
        { id: 'lunch-thieb', title: 'Thiéboudienne Premium', price: 4000 },
        { id: 'lunch-poulet', title: 'Poulet grillé mariné', price: 3500 },
        { id: 'lunch-poisson', title: 'Poisson braisé', price: 4500 },
        { id: 'lunch-international', title: 'Plat international', price: 5000 },
      ],
    },
    {
      id: 'dessert',
      label: 'Dessert',
      iconSrc: HOME_ASSETS.iconDessert,
      items: [
        { id: 'dessert-gateau', title: 'Gâteau au chocolat', price: 1200 },
        { id: 'dessert-tiramisu', title: 'Tiramisu', price: 1500 },
        { id: 'dessert-creme', title: 'Crème caramel maison', price: 1000 },
      ],
    },
    {
      id: 'cocktail',
      label: 'Cocktail',
      iconSrc: HOME_ASSETS.iconCocktail,
      items: [
        { id: 'cocktail-fruits', title: 'Cocktail de fruits frais', price: 1200 },
        { id: 'cocktail-smoothie', title: 'Smoothie avocat', price: 1000 },
        { id: 'cocktail-detox', title: 'Jus détox', price: 1500 },
      ],
    },
  ];

  readonly expandedCategoryId = signal<string | null>(null);

  readonly selectedItemIds = signal<Set<string>>(new Set());

  readonly hasSelection = computed(() => this.selectedItemIds().size > 0);

  readonly orderTotal = computed(() => {
    const selected = this.selectedItemIds();
    let sum = 0;
    for (const cat of this.categories) {
      for (const item of cat.items) {
        if (selected.has(item.id)) sum += item.price;
      }
    }
    return sum;
  });

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
    this.router.navigateByUrl('/service-type');
  }

  toggleCategory(categoryId: string): void {
    this.expandedCategoryId.update((current) => (current === categoryId ? null : categoryId));
  }

  isCategoryOpen(categoryId: string): boolean {
    return this.expandedCategoryId() === categoryId;
  }

  isItemSelected(itemId: string): boolean {
    return this.selectedItemIds().has(itemId);
  }

  toggleItemSelection(itemId: string, event: Event): void {
    event.stopPropagation();
    this.selectedItemIds.update((set) => {
      const next = new Set(set);
      if (next.has(itemId)) next.delete(itemId);
      else next.add(itemId);
      return next;
    });
  }

  onOrderClick(): void {
    if (!this.hasSelection()) return;
    const sid = this.serviceId();
    const summary = this.buildMenuSummary(this.selectedItemIds());
    this.cateringState.setMenuDraft({
      serviceId: sid,
      serviceTypeLabel: sid === 'premium' ? 'Premium' : 'Standard',
      menuTitle: summary.menuTitle,
      menuDescription: summary.description,
      unitTotalPerPerson: summary.unitTotal,
    });
    this.router.navigate(['/informations-supplementaires'], {
      queryParams: { serviceId: sid },
    });
  }

  private buildMenuSummary(ids: Set<string>): {
    menuTitle: string;
    description: string;
    unitTotal: number;
  } {
    const titles: string[] = [];
    let firstCatLabel = '';
    let unitTotal = 0;
    for (const cat of this.categories) {
      for (const item of cat.items) {
        if (ids.has(item.id)) {
          titles.push(item.title);
          unitTotal += item.price;
          if (!firstCatLabel) firstCatLabel = cat.label;
        }
      }
    }
    const menuTitle = firstCatLabel ? `${firstCatLabel} local` : 'Menu';
    return { menuTitle, description: titles.join('; '), unitTotal };
  }
}
