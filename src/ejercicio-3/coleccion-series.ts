/**
 * Importamos la clase serie y la interfaz
 */
import {Serie} from './series';
import {BasicStreamableCollection} from './basicStreamableCollection';

/**
 * Clase que representa a un conjunto de series, extiene a la clase
 * genérica que tiene a los vectores de T
 */
export class Coleccion_Series extends BasicStreamableCollection<Serie> {
  constructor(objetos: Serie[]) {
    super(objetos);
  }
  /**
   * Realiza una búsqueda sobre el vector, a través de un parámetro
   * @param fecha Un valor numérico
   * @returns Un vector de series, o un vector vacío
   */
  obtenerObjetosPorFecha(fecha: number): Serie[] {
    return this.objetos.filter((objeto: Serie) => objeto.get_fecha() === fecha);
  }

  /**
   * Realiza una búsqueda sobre el vector, a través de un parámetro
   * @param nombre Un valor de caracteres
   * @returns Un vector de seires, o un vector vacío
   */
  obtenerObjetosPorNombre(nombre: string): Serie[] {
    return this.objetos.filter((objeto: Serie) => objeto.get_nombre() === nombre);
  }
}

const coleccion: Coleccion_Series = new Coleccion_Series([
  new Serie('Los Simpsons', 1990),
  new Serie('La casa de papel', 2020),
]);

console.log(coleccion.obtenerNumeroObjetos());
coleccion.añadirObjeto(new Serie('Bob Esponja', 2005));
coleccion.añadirObjeto(new Serie('Agallas, el Perro Cobarde', 2005));
console.log(coleccion.obtenerNumeroObjetos());

console.log(coleccion.obtenerObjetosPorFecha(2005));
