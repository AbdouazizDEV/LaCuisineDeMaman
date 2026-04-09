/** Encodes path segments for safe use in `img[src]` (spaces in filenames). */
export function assetPath(fullPath: string): string {
  return fullPath
    .split('/')
    .map((segment) => encodeURIComponent(segment))
    .join('/');
}

/** Static asset paths for the home screen (files under `src/assets/`). */
export const HOME_ASSETS = {
  logo: assetPath('assets/images/logoRectangle2040.png'),
  chef: assetPath('assets/images/Rectangle 2031.png'),
  dots: assetPath('assets/images/Group 1.png'),
  mask: assetPath('assets/images/Mask group.png'),
  dish: assetPath('assets/images/plat1.png'),
  /** Détail plat — grande image (maquette) */
  menuDishDetailHero: assetPath('assets/images/image 1.png'),
  carouselNavNext: assetPath('assets/icon/ic_round-navigate-next.svg'),
  cartThiebouDieune: assetPath('assets/images/Thiebou dieune.png'),
  cartJuice: assetPath('assets/images/imageProduitPanier.png'),
  deleteIcon: assetPath('assets/images/delete.svg'),
  juiceBissap: assetPath('assets/images/image 4.png'),
  juiceBouye: assetPath('assets/images/image 5.png'),
  traiteur: assetPath('assets/images/image 10.png'),
  avatarClient: assetPath('assets/images/Ellipse 85.png'),
  cartIcon: assetPath('assets/icon/bitcoin-icons_cart-outline (1).svg'),
  menuIcon: assetPath('assets/icon/Group 48.svg'),
  backIcon: assetPath('assets/icon/ep_back.svg'),
  callIcon: assetPath('assets/icon/material-symbols_call.svg'),
  dateIcon: assetPath('assets/icon/lets-icons_date-range.svg'),
  placeIcon: assetPath('assets/icon/ic_baseline-place.svg'),
  /** Résumé demande traiteur — ligne Personnes / Lieu (maquette) */
  resumePeopleIcon: assetPath('assets/icon/ic_baseline-people.svg'),
  resumePlaceIcon: assetPath('assets/icon/ic_round-place.svg'),
  waveLogo: assetPath('assets/images/Logo Mobile money.png'),
  orangeMoneyLogo: assetPath('assets/images/Orange Money.png'),
  successFilled: assetPath('assets/images/ep_success-filled.png'),
  serviceStandard: assetPath('assets/images/image 11.png'),
  servicePremium: assetPath('assets/images/image 12.png'),
  serviceArrow: assetPath('assets/images/Group 67.svg'),
  iconBreakfast: assetPath('assets/images/fluent-mdl2_breakfast.svg'),
  iconLunch: assetPath('assets/icon/material-symbols_award-meal-outline-rounded.svg'),
  iconDessert: assetPath('assets/icon/ep_dessert.svg'),
  iconCocktail: assetPath('assets/icon/lucide-lab_cocktail.svg'),
  checkIcon: assetPath('assets/icon/check.svg'),
  peopleIcon: assetPath('assets/images/user.svg'),
  addCartIcon: assetPath('assets/icon/Group.svg'),
  facebookIcon: assetPath('assets/icon/001-facebook.svg'),
  instagramIcon: assetPath('assets/icon/ri_instagram-fill.svg'),
  tiktokIcon: assetPath('assets/icon/Vector.svg'),
  phoneIcon: assetPath('assets/icon/Vector (1).svg'),
  copyrightIcon: assetPath('assets/icon/Vector (2).svg'),
} as const;
