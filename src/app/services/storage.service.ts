import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {}

  // Save data to localStorage
  setItem(key: string, value: any): void {
    const jsonValue = JSON.stringify(value);
    localStorage.setItem(key, jsonValue);
  }

  // Retrieve data from localStorage
  getItem<T>(key: string): T | null {
    const jsonValue = localStorage.getItem(key);
    return jsonValue ? (JSON.parse(jsonValue) as T) : null;
  }

  getMap<K, V>(key: string): Map<K, V> | null {
    const serializedValue = localStorage.getItem(key);
    if (serializedValue) {
      const parsedObject = JSON.parse(serializedValue);
      return new Map<K, V>(Object.entries(parsedObject) as [K, V][]);
    }
    return null;
  }

  // Remove an item from localStorage
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  // Clear all localStorage data
  clear(): void {
    localStorage.clear();
  }
}
