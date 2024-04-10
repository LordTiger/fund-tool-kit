import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated: WritableSignal<boolean> = signal(false);

  constructor() { }
}
