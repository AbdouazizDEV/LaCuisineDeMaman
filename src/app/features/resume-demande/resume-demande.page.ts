import { DecimalPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';
import { HomeNavbarComponent } from '../../shared/components/molecules/home-navbar/home-navbar.component';
import { HomeFooterComponent } from '../../shared/components/organisms/home-footer/home-footer.component';
import { NavDropdownMenuComponent } from '../../shared/components/organisms/nav-dropdown-menu/nav-dropdown-menu.component';
import { ImgFallbackDirective } from '../../shared/directives/img-fallback.directive';
import { HOME_ASSETS } from '../../shared/constants/home-assets.constants';
import { DEFAULT_NAV_MENU_ITEMS } from '../../shared/constants/nav-menu.constants';
import { CateringRequestStateService } from '../../shared/services/catering-request-state.service';

@Component({
  selector: 'app-resume-demande-page',
  standalone: true,
  imports: [
    IonContent,
    FormsModule,
    DecimalPipe,
    HomeNavbarComponent,
    HomeFooterComponent,
    NavDropdownMenuComponent,
    ImgFallbackDirective,
  ],
  templateUrl: './resume-demande.page.html',
  styleUrls: ['./resume-demande.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResumeDemandePage implements OnInit {
  private readonly router = inject(Router);
  readonly catering = inject(CateringRequestStateService);

  readonly HOME_ASSETS = HOME_ASSETS;
  readonly menuOpen = signal(false);
  readonly menuItems = DEFAULT_NAV_MENU_ITEMS;

  paymentMethod: 'wave' | 'orange' = 'wave';
  paymentPhone = '';

  readonly grandTotal = computed(() => {
    const d = this.catering.draft();
    if (!d) return 0;
    return d.unitTotalPerPerson * d.guestCount;
  });

  readonly depositAmount = computed(() => Math.round(this.grandTotal() / 2));

  ngOnInit(): void {
    if (!this.catering.draft()) {
      void this.router.navigateByUrl('/service-type');
    }
  }

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
    const d = this.catering.draft();
    const sid = d?.serviceId ?? 'standard';
    void this.router.navigate(['/informations-supplementaires'], {
      queryParams: { serviceId: sid },
    });
  }

  onConfirmPayment(): void {
    void this.router.navigateByUrl('/order-success');
  }
}
