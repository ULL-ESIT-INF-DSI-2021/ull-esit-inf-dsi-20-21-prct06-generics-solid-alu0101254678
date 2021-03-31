import {Fighter} from './fighter';

/**
 * Clase que representa a un luchador del universo DC, hereda los atributos de la clase genérica Fighter
 */
export class DC extends Fighter {
  constructor(nombre: string, peso: number, altura: number, tipo: string, ataque: number, defensa: number, velocidad: number, vida: number) {
    super(nombre, peso, altura, tipo, ataque, defensa, velocidad, vida);
  }

  /**
   * Método que obtiene una frase característica
   * @returns un string de caracteres
   */
  get_frase(): string {
    return 'Es hora de que aprendas lo que significa ser un hombre!';
  }
}
