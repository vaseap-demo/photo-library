import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageManagerService<T> {
  saveData(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getData(key: string): T {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }
}
