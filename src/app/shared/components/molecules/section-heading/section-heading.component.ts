import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  standalone: true,
  templateUrl: './section-heading.component.html',
  styleUrls: ['./section-heading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionHeadingComponent {
  /** Titre sur une seule ligne (si pas de découpage `titleBefore` / `titleAccent`). */
  @Input() title?: string;
  /** Partie avant le mot mis en accent (ex. `MENU DU `). */
  @Input() titleBefore?: string;
  /** Partie en couleur d’accent (ex. `JOUR`). */
  @Input() titleAccent?: string;
  @Input({ required: true }) subtitle!: string;
  /** Id pour `aria-labelledby` sur la section parente. */
  @Input() headingId?: string;

  /** Indique si le titre utilise deux parties + couleur d’accent. */
  get hasAccentTitle(): boolean {
    return this.titleBefore !== undefined && this.titleAccent !== undefined;
  }
}
