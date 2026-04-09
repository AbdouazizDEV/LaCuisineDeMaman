import { HOME_ASSETS } from '../constants/home-assets.constants';

export interface IMenuDishDetail {
  id: string;
  title: string;
  heroImage: string;
  /** Vignettes carrousel */
  gallery: string[];
  description: string;
}

const hero = HOME_ASSETS.menuDishDetailHero;

const THIEBOU_DESC =
  'Thiebou Dieune (Thieboudienne) est le plat national du Sénégal, composé de riz cuit dans une sauce tomate parfumée avec des épices et accompagné de poisson, de légumes (carotte, chou, manioc, aubergine…) et parfois de piment. Ce plat traditionnel est à la fois convivial et riche en saveurs, souvent partagé en famille autour d’un même grand plat. Il représente la culture sénégalaise, l’hospitalité et l’importance du partage dans les repas.';

/** Contenu écran détail par identifiant de plat. */
export const MENU_DISH_BY_ID: Record<string, IMenuDishDetail> = {
  'thiebou-dieune': {
    id: 'thiebou-dieune',
    title: 'Thiebou dieune',
    heroImage: hero,
    gallery: [hero, hero, hero, hero],
    description: THIEBOU_DESC,
  },
};
