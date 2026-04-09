/** Single day filter option for “Menu du jour”. */
export interface IDayFilterOption {
  id: string;
  label: string;
}

/** Data shown on the featured dish card. */
export interface IMenuDishCard {
  /** Route `/menu-dish/:dishId` */
  id: string;
  imageUrl: string;
  title: string;
}

/** Data model for one juice card. */
export interface IJuiceProduct {
  id: string;
  title: string;
  imageUrl: string;
  priceCurrent: string;
  priceOld?: string;
  isSoldOut?: boolean;
}

/** Testimonial model for home reviews section. */
export interface IClientReview {
  id: string;
  authorName: string;
  authorAvatarUrl: string;
  rating: number;
  comment: string;
}

/** Cart product line. */
export interface ICartItem {
  id: string;
  title: string;
  imageUrl: string;
  unitPrice: number;
  quantity: number;
}

/** Top menu entry in animated dropdown. */
export interface INavMenuItem {
  id: string;
  label: string;
  route: string;
}
