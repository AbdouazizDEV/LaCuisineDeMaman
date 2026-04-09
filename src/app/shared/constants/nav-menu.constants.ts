import { INavMenuItem } from '../models/home-ui.model';

/** Entrées du menu hamburger : sections sur la home ou page connexion. */
export const DEFAULT_NAV_MENU_ITEMS: INavMenuItem[] = [
  { id: 'menu-1', label: 'Menu du jour', route: '/home', fragment: 'menu-du-jour' },
  { id: 'menu-2', label: 'Service traiteur', route: '/home', fragment: 'service-traiteur' },
  { id: 'menu-3', label: 'Contacts', route: '/home', fragment: 'contacts' },
  { id: 'menu-4', label: 'Se connecter', route: '/login' },
];
