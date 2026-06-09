import { Injectable, signal } from '@angular/core';

/*
  •	@Injectable({ providedIn: 'root' }) → Patrón Singleton: un solo objeto compartido por toda la app
  •	signal() → Nueva forma reactiva de Angular. Reemplaza a las variables normales cuando necesitas que la UI reaccione a cambios
  •	localStorage → Almacenamiento del navegador que persiste aunque recargues la página
*/

/**
 * Este servicio es para realizar la autenticación del usuario en nuestro sistema
 */
@Injectable({
  providedIn: 'root' // Este servicio existe UNA sola vez en toda la app (Singleton)
})
export class AuthService {
  // Clave para guardar en localStorage del navegador
  private readonly storageKey = 'demo-auth-session';

  // signal() = variable reactiva. Cuando cambia, Angular actualiza la UI automáticamente
  // Se inicializa leyendo si hay sesión guardada en localStorage
  readonly isLoggedIn = signal(this.hasStoredSession());

  // Método que intenta hacer login
  login(email: string, password: string): boolean {
    const validEmail = 'admin@demo.com';
    const validPassword = '123456';

    if (email === validEmail && password === validPassword) {
      localStorage.setItem(this.storageKey, 'true'); // Guarda sesión en el navegador
      this.isLoggedIn.set(true); // Actualiza el signal a "logueado"
      return true; // Indica que el login fue exitoso
    }

    return false; // Credenciales incorrectas
  }

  logout(): void {
    localStorage.removeItem(this.storageKey); // Borra la sesión del navegador
    this.isLoggedIn.set(false); // Actualiza el signal a "no logueado"
  }

  // Método privado: verifica si existe sesión guardada
  private hasStoredSession(): boolean {
    return localStorage.getItem(this.storageKey) === 'true';
  }
}
