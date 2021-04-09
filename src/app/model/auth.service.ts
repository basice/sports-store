import { Injectable } from '@angular/core';
import { DataStorageService } from './data-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private dataStorageService: DataStorageService) {}

  authenticate(username: string, password: string) {
    return this.dataStorageService.authenticate(username, password);
  }

  get authenticated(): boolean {
    return this.dataStorageService.auth_token != null;
  }

  clear() {
    this.dataStorageService.auth_token = null;
  }
}
