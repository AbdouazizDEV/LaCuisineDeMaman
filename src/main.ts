import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withInMemoryScrolling, withPreloading, PreloadAllModules } from '@angular/router';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';
import { apiInterceptor } from './app/core/interceptors/api.interceptor';
import { appProviders } from './app/core/tokens/injection-tokens';

bootstrapApplication(AppComponent, {
  providers: [
    provideIonicAngular(),
    provideRouter(
      appRoutes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
      }),
      withPreloading(PreloadAllModules),
    ),
    provideHttpClient(withInterceptors([apiInterceptor])),
    ...appProviders,
  ],
}).catch((err: unknown) => console.error(err));
