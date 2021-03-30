/**
 * Importamos la interfaz SearchStreamable que
 * extiende a la primera, streamable, se encuentra
 * en el mismo directorio
 */
import {SearchStreamable} from './streamable';

/**
 * Clase abstracta que implementa parte de las
 * funcionalidades de la interfaz, las subclases
 * implementarán las funciones de búsqueda
 */
export abstract class BasicStreamableCollection<T> implements SearchStreamable<T> {
  constructor(protected objetos: T[]) {};

  /**
   * Método que inserta un nuevo objeto en el vector T
   * @param nuevo_Objeto el objeto que se va a insertar
   */
  añadirObjeto(nuevo_Objeto: T) {
    this.objetos.push(nuevo_Objeto);
  }

  /**
   * Método que obtiene el número de elementos del
   * vector T, que puede ser peliculas, series...
   * @returns el tamaño del vector
   */
  obtenerNumeroObjetos() {
    return this.objetos.length;
  }

  /**
   * La implementa la subclase
   * @param fecha Un valor numérico
   */
  abstract obtenerObjetosPorFecha(fecha: number): T[];

  /**
   * La implementa la subclase
   * @param nombre Un valor de caracteres
   */
  abstract obtenerObjetosPorNombre(nombre: string): T[];
}
