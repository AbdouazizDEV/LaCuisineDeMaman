import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import { AppButtonComponent } from '../../shared/components/atoms/app-button/app-button.component';
import { ImgFallbackDirective } from '../../shared/directives/img-fallback.directive';
import { HOME_ASSETS } from '../../shared/constants/home-assets.constants';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [IonContent, FormsModule, AppButtonComponent, ImgFallbackDirective],
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPage {
  readonly HOME_ASSETS = HOME_ASSETS;

  emailOrPhone = '';
  password = '';

  onSubmit(): void {
    // Connexion à brancher sur l’API.
  }

  onForgotPassword(): void {
    // Mot de passe oublié — à brancher.
  }

  onCreateAccount(): void {
    // À brancher vers la page d’inscription (ex. /register).
  }
}
