import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private nombreUsuarioSubject = new BehaviorSubject<string>(''); // Tipo de usuario
  nombreUsuario$ = this.nombreUsuarioSubject.asObservable();

  private usuarioTipoSubject = new BehaviorSubject<string>(''); // Tipo de usuario
  usuarioTipo$ = this.usuarioTipoSubject.asObservable();

  setUsuarioTipo(tipo: string) {
    this.usuarioTipoSubject.next(tipo);
  }

  setNombreUsuario(usuario: string) {
    this.nombreUsuarioSubject.next(usuario);
  }
}
