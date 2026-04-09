import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { AppButtonComponent } from '../../atoms/app-button/app-button.component';
import { IDayFilterOption, IMenuDishCard } from '../../../models/home-ui.model';
import { DayFilterChipsComponent } from '../../molecules/day-filter-chips/day-filter-chips.component';
import { MenuDishCardComponent } from '../../molecules/menu-dish-card/menu-dish-card.component';
import { SectionHeadingComponent } from '../../molecules/section-heading/section-heading.component';

@Component({
  selector: 'app-menu-du-jour-section',
  standalone: true,
  imports: [
    SectionHeadingComponent,
    DayFilterChipsComponent,
    MenuDishCardComponent,
    AppButtonComponent,
  ],
  templateUrl: './menu-du-jour-section.component.html',
  styleUrls: ['./menu-du-jour-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuDuJourSectionComponent {
  @Input({ required: true }) filters: IDayFilterOption[] = [];
  @Input({ required: true }) selectedFilterId!: string;
  @Input({ required: true }) dish!: IMenuDishCard;

  @Output() filterChange = new EventEmitter<string>();
  @Output() orderNow = new EventEmitter<void>();
}
