import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadComponent: () => import('./features/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'menu-dish/:dishId',
    loadComponent: () =>
      import('./features/menu-dish-detail/menu-dish-detail.page').then((m) => m.MenuDishDetailPage),
  },
  {
    path: 'explore',
    loadComponent: () => import('./features/explore/explore.page').then((m) => m.ExplorePage),
  },
  {
    path: 'recipe/:id',
    loadComponent: () =>
      import('./features/recipe-detail/recipe-detail.page').then((m) => m.RecipeDetailPage),
  },
  {
    path: 'favorites',
    loadComponent: () =>
      import('./features/favorites/favorites.page').then((m) => m.FavoritesPage),
  },
  {
    path: 'profile',
    loadComponent: () => import('./features/profile/profile.page').then((m) => m.ProfilePage),
  },
  {
    path: 'login',
    loadComponent: () => import('./features/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'search',
    loadComponent: () => import('./features/search/search.page').then((m) => m.SearchPage),
  },
  {
    path: 'cart',
    loadComponent: () => import('./features/cart/cart.page').then((m) => m.CartPage),
  },
  {
    path: 'personal-info',
    loadComponent: () =>
      import('./features/personal-info/personal-info.page').then((m) => m.PersonalInfoPage),
  },
  {
    path: 'order-summary',
    loadComponent: () =>
      import('./features/order-summary/order-summary.page').then((m) => m.OrderSummaryPage),
  },
  {
    path: 'order-success',
    loadComponent: () =>
      import('./features/order-success/order-success.page').then((m) => m.OrderSuccessPage),
  },
  {
    path: 'service-type',
    loadComponent: () =>
      import('./features/service-type/service-type.page').then((m) => m.ServiceTypePage),
  },
  {
    path: 'service-detail/:serviceId',
    loadComponent: () =>
      import('./features/service-detail/service-detail.page').then((m) => m.ServiceDetailPage),
  },
  {
    path: 'informations-supplementaires',
    loadComponent: () =>
      import('./features/informations-supplementaires/informations-supplementaires.page').then(
        (m) => m.InformationsSupplementairesPage,
      ),
  },
  {
    path: 'resume-demande',
    loadComponent: () =>
      import('./features/resume-demande/resume-demande.page').then((m) => m.ResumeDemandePage),
  },
];
