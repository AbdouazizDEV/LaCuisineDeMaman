import { Injectable, signal } from '@angular/core';

export type CateringServiceId = 'standard' | 'premium';

export interface ICateringDraft {
  serviceId: CateringServiceId;
  serviceTypeLabel: string;
  menuTitle: string;
  menuDescription: string;
  unitTotalPerPerson: number;
  guestCount: number;
  location: string;
  eventStart: string;
  eventEnd: string;
  kitchenMessage: string;
}

@Injectable({ providedIn: 'root' })
export class CateringRequestStateService {
  private readonly _draft = signal<ICateringDraft | null>(null);

  /** Brouillon courant de la demande traiteur (null si aucune sélection en cours). */
  readonly draft = this._draft.asReadonly();

  setMenuDraft(data: {
    serviceId: CateringServiceId;
    serviceTypeLabel: string;
    menuTitle: string;
    menuDescription: string;
    unitTotalPerPerson: number;
  }): void {
    this._draft.set({
      ...data,
      guestCount: 1,
      location: '',
      eventStart: '',
      eventEnd: '',
      kitchenMessage: '',
    });
  }

  patchEventForm(
    fields: Pick<
      ICateringDraft,
      'guestCount' | 'location' | 'eventStart' | 'eventEnd' | 'kitchenMessage'
    >,
  ): void {
    this._draft.update((prev) => (prev ? { ...prev, ...fields } : prev));
  }

  clear(): void {
    this._draft.set(null);
  }
}
