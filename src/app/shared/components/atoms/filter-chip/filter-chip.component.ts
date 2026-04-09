import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

/** Day / region filter chip with active + inactive visuals. */
@Component({
  selector: 'app-filter-chip',
  standalone: true,
  templateUrl: './filter-chip.component.html',
  styleUrls: ['./filter-chip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterChipComponent {
  @Input({ required: true }) label!: string;
  @Input() active = false;
  @Input() ariaLabel = '';

  @Output() selected = new EventEmitter<void>();

  onClick(): void {
    this.selected.emit();
  }
}
