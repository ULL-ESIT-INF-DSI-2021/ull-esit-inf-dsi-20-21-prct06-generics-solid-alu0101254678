import {Fighter} from './fighter';

/**
 * Clase que representa a un luchador del universo Marvel, hereda los atributos de la clase genérica Fighter
 */
export class Marvel extends Fighter {
  constructor(nombre: string, peso: number, altura: number, tipo: string, ataque: number, defensa: number, velocidad: number, vida: number) {
    super(nombre, peso, altura, tipo, ataque, defensa, velocidad, vida);
  }

  /**
   * Método que obtiene una frase característica
   * @returns un string de caracteres
   */
  get_frase(): string {
    return 'Les vengaremos!';
  }
}
