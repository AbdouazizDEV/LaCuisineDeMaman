import { Directive, ElementRef, HostListener, Input } from '@angular/core';

/**
 * Sets a fallback image URL when the primary `src` fails to load.
 */
@Directive({
  selector: 'img[appImgFallback]',
  standalone: true,
})
export class ImgFallbackDirective {
  @Input() appImgFallback = 'assets/icon/favicon.png';

  constructor(private readonly el: ElementRef<HTMLImageElement>) {}

  @HostListener('error')
  onError(): void {
    const img = this.el.nativeElement;
    const fallback = this.appImgFallback;
    if (!fallback || img.dataset['fallbackApplied'] === 'true') {
      return;
    }
    img.dataset['fallbackApplied'] = 'true';
    img.src = fallback;
  }
}
