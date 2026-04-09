# La Cuisine de Maman

Application mobile et web pour la restauration : découverte du menu du jour, jus naturels, services traiteur, panier et parcours de commande.

## Pile technique

| Technologie | Version ciblée |
|-------------|----------------|
| [Angular](https://angular.io/) | 17 (composants standalone, lazy loading) |
| [Ionic](https://ionicframework.com/) | 7 |
| [Capacitor](https://capacitorjs.com/) | 5 |
| TypeScript | ~5.4 |

Sortie de build web : dossier `www` (utilisé par Capacitor).

## Prérequis

- **Node.js** (LTS recommandé, ex. 18 ou 20)
- **npm** (inclus avec Node)

Pour les builds natifs : Android Studio (Android) et/ou Xcode (iOS, macOS uniquement).

## Installation

```bash
git clone git@github.com:AbdouazizDEV/LaCuisineDeMaman.git
cd LaCuisineDeMaman
npm install
```

## Scripts npm

| Commande | Description |
|----------|-------------|
| `npm start` | Serveur de développement (Ionic CLI) |
| `npm run build` | Build de production vers `www/` |
| `npm run sync` | Synchronise le dossier web avec les projets natifs Capacitor |
| `npm run android` | Lance l’app Android avec rechargement à chaud (appareil ou émulateur) |
| `npm run ios` | Idem pour iOS (macOS) |
| `npm run android:build` | Build Android natif |
| `npm test` | Tests unitaires (Karma / Jasmine) |
| `npm run lint` | Analyse ESLint sur le projet Angular |

Après un `npm run build`, exécuter `npm run sync` avant d’ouvrir le projet dans Android Studio ou Xcode.

## Configuration applicative

- **Identifiant Capacitor** : `com.cuisinedemaman.app`
- **Nom affiché** : Cuisine de Maman
- Fichier : `capacitor.config.ts`

Les environnements Angular se trouvent sous `src/environments/` (`environment.ts` / `environment.prod.ts`).

## Structure du code (aperçu)

```
src/app/
├── features/          # Pages par écran (routes lazy-loaded)
├── shared/
│   ├── components/    # UI (atoms, molecules, organisms)
│   ├── constants/
│   ├── directives/
│   ├── models/
│   └── services/
├── app.routes.ts      # Définition des routes
└── ...
```

Thème global et variables SCSS : `src/theme/variables.scss`, `src/global.scss`.

## Routes principales

| Chemin | Description |
|--------|-------------|
| `/home` | Accueil (menu du jour, sections mise en avant) |
| `/menu-dish/:dishId` | Détail d’un plat |
| `/cart` | Panier |
| `/explore`, `/search`, `/recipe/:id`, `/favorites`, `/profile` | Parcours exploration et compte |
| `/personal-info`, `/order-summary`, `/order-success` | Tunnel de commande |
| `/service-type`, `/service-detail/:serviceId` | Services (ex. traiteur) |
| `/informations-supplementaires`, `/resume-demande` | Informations et récapitulatif de demande |

La route par défaut redirige vers `/home`.

## Git

- Branche principale : `main`
- Développement : `develop` (à fusionner vers `main` après revue)

Dépôt distant : `git@github.com:AbdouazizDEV/LaCuisineDeMaman.git`

## Licence

Projet privé (`"private": true` dans `package.json`). Les droits d’utilisation et de distribution relèvent des accords des porteurs du projet.
