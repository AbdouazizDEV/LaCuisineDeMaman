import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
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

@Component({
  selector: 'app-informations-supplementaires-page',
  standalone: true,
  imports: [
    IonContent,
    FormsModule,
    HomeNavbarComponent,
    HomeFooterComponent,
    NavDropdownMenuComponent,
    ImgFallbackDirective,
  ],
  templateUrl: './informations-supplementaires.page.html',
  styleUrls: ['./informations-supplementaires.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InformationsSupplementairesPage {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly cateringState = inject(CateringRequestStateService);

  readonly HOME_ASSETS = HOME_ASSETS;
  readonly menuOpen = signal(false);
  readonly menuItems = DEFAULT_NAV_MENU_ITEMS;

  readonly returnServiceId = toSignal(
    this.route.queryParamMap.pipe(map((q) => q.get('serviceId') ?? 'standard')),
    { initialValue: 'standard' },
  );

  readonly guestCount = signal(4);
  eventLocation = '';
  eventStart = '';
  eventEnd = '';
  kitchenMessage = '';

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
    const sid = this.returnServiceId();
    this.router.navigateByUrl(`/service-detail/${sid === 'premium' ? 'premium' : 'standard'}`);
  }

  onDecreaseGuests(): void {
    this.guestCount.update((n) => Math.max(1, n - 1));
  }

  onIncreaseGuests(): void {
    this.guestCount.update((n) => n + 1);
  }

  onSubmit(): void {
    this.cateringState.patchEventForm({
      guestCount: this.guestCount(),
      location: this.eventLocation.trim(),
      eventStart: this.eventStart.trim(),
      eventEnd: this.eventEnd.trim(),
      kitchenMessage: this.kitchenMessage.trim(),
    });
    this.router.navigateByUrl('/resume-demande');
  }
}
