import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';
import { ImgFallbackDirective } from '../../../directives/img-fallback.directive';
import { IClientReview } from '../../../models/home-ui.model';

@Component({
  selector: 'app-avis-clients-section',
  standalone: true,
  imports: [ImgFallbackDirective],
  templateUrl: './avis-clients-section.component.html',
  styleUrls: ['./avis-clients-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvisClientsSectionComponent {
  @Input({ required: true }) reviews: IClientReview[] = [];
  readonly activeIndex = signal(0);

  get activeReview(): IClientReview | undefined {
    return this.reviews[this.activeIndex()];
  }

  previous(): void {
    if (this.reviews.length === 0) return;
    this.activeIndex.update((i) => (i - 1 + this.reviews.length) % this.reviews.length);
  }

  next(): void {
    if (this.reviews.length === 0) return;
    this.activeIndex.update((i) => (i + 1) % this.reviews.length);
  }
}
