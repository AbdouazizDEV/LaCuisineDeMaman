import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { AppButtonComponent } from '../../atoms/app-button/app-button.component';
import { ImgFallbackDirective } from '../../../directives/img-fallback.directive';

@Component({
  selector: 'app-service-traiteur-section',
  standalone: true,
  imports: [AppButtonComponent, ImgFallbackDirective],
  templateUrl: './service-traiteur-section.component.html',
  styleUrls: ['./service-traiteur-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceTraiteurSectionComponent {
  @Input({ required: true }) imageSrc!: string;
  @Output() request = new EventEmitter<void>();
}
