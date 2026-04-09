import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ImgFallbackDirective } from '../../../directives/img-fallback.directive';

@Component({
  selector: 'app-service-type-card',
  standalone: true,
  imports: [ImgFallbackDirective],
  templateUrl: './service-type-card.component.html',
  styleUrls: ['./service-type-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceTypeCardComponent {
  @Input({ required: true }) serviceId!: string;
  @Input({ required: true }) title!: string;
  @Input({ required: true }) description!: string;
  @Input({ required: true }) imageSrc!: string;
  @Input({ required: true }) arrowSrc!: string;
  @Input({ required: true }) top = 0;
  @Input() ariaLabel = 'Choisir le service';

  @Output() cardClick = new EventEmitter<string>();

  onCardActivate(): void {
    this.cardClick.emit(this.serviceId);
  }
}
