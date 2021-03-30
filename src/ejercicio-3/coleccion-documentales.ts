/**
 * Importamos la clase documental y la interfaz
 */
import {Documental} from './documentales';
import {BasicStreamableCollection} from './basicStreamableCollection';

/**
 * Clase que representa a un conjunto de documentales,extiende a la
 * clase generica que tiene a los vectores de T
 */
export class Coleccion_Documentales extends BasicStreamableCollection<Documental> {
  constructor(objetos: Documental[]) {
    super(objetos);
  }

  /**
   * Realiza una búsqueda sobre el vector, a través de un parámetro
   * @param fecha Un valor numérico
   * @returns Un vector de documentales, o un vector vacío
   */
  obtenerObjetosPorFecha(fecha: number): Documental[] {
    return this.objetos.filter((objeto: Documental) => objeto.get_fecha() === fecha);
  }

  /**
   * Realiza una búsqueda sobre el vector, a través de un parámetro
   * @param nombre Un valor de caracteres
   * @returns Un vector de documentales, o un vector vacío
   */
  obtenerObjetosPorNombre(nombre: string): Documental[] {
    return this.objetos.filter((objeto: Documental) => objeto.get_nombre() === nombre);
  }
}

const coleccion: Coleccion_Documentales = new Coleccion_Documentales([
  new Documental('Documental de la 1', 1970),
  new Documental('Documental de Doscovery Chanel', 1980),
  new Documental('Documental del canal de historia', 2001),
]);

console.log(coleccion.obtenerNumeroObjetos());
coleccion.añadirObjeto(new Documental('Documental de Paramount Channel', 1980));
console.log(coleccion.obtenerNumeroObjetos());

console.log(coleccion.obtenerObjetosPorFecha(1980));
console.log(coleccion.obtenerObjetosPorNombre('Documental de la 1'));
