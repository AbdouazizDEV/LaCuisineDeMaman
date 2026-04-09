import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FilterChipComponent } from '../../atoms/filter-chip/filter-chip.component';
import { IDayFilterOption } from '../../../models/home-ui.model';

@Component({
  selector: 'app-day-filter-chips',
  standalone: true,
  imports: [FilterChipComponent],
  templateUrl: './day-filter-chips.component.html',
  styleUrls: ['./day-filter-chips.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DayFilterChipsComponent {
  @Input({ required: true }) options: IDayFilterOption[] = [];
  @Input({ required: true }) activeFilterId!: string;
  @Output() filterChange = new EventEmitter<string>();
}
