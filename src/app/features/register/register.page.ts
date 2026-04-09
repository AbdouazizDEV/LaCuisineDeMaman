import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';
import { AppButtonComponent } from '../../shared/components/atoms/app-button/app-button.component';
import { ImgFallbackDirective } from '../../shared/directives/img-fallback.directive';
import { HOME_ASSETS } from '../../shared/constants/home-assets.constants';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [IonContent, FormsModule, AppButtonComponent, ImgFallbackDirective],
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterPage {
  private readonly location = inject(Location);
  private readonly router = inject(Router);

  readonly HOME_ASSETS = HOME_ASSETS;

  lastName = '';
  firstName = '';
  email = '';
  phone = '';
  password = '';
  confirmPassword = '';

  onBack(): void {
    this.location.back();
  }

  onSubmit(): void {
    // Inscription à brancher sur l’API.
  }

  goToLogin(): void {
    void this.router.navigateByUrl('/login');
  }
}
