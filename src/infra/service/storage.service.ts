import { Injectable, InjectionToken, PLATFORM_ID, inject } from '@angular/core';

export const LOCAL_STORAGE = new InjectionToken<Storage>(
  'window local storage object',
  {
    providedIn: 'root',
    factory: () => {
      return inject(PLATFORM_ID) === 'browser'
        ? window.localStorage
        : ({} as Storage);
    },
  }
);

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  storage = inject(LOCAL_STORAGE);

  saveDiaryEntries(diaryEntries: []) {
    this.storage.setItem('diaryEntris', JSON.stringify(diaryEntries));
  }
}
