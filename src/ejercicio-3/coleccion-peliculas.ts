/**
 * Importamos la clase películas y la interfaz
 */
import {Pelicula} from './peliculas';
import {BasicStreamableCollection} from './basicStreamableCollection';

/**
 * Clase que representa a un conjunto de películas, extiene a la clase
 * genérica que tiene a los vectores de T
 *
 */
export class Coleccion_Peliculas extends BasicStreamableCollection<Pelicula> {
  constructor(objetos: Pelicula[]) {
    super(objetos);
  }
  /**
   * Realiza una búsqueda sobre el vector, a través de un parámetro
   * @param fecha Un valor numérico
   * @returns Un vector de peliculas, o un vector vacío
   */
  obtenerObjetosPorFecha(fecha: number): Pelicula[] {
    return this.objetos.filter((objeto: Pelicula) => objeto.get_fecha() === fecha);
  }

  /**
   * Realiza una búsqueda sobre el vector, a través de un parámetro
   * @param nombre Un valor de caracteres
   * @returns Un vector de peliculas, o un vector vacío
   */
  obtenerObjetosPorNombre(nombre: string): Pelicula[] {
    return this.objetos.filter((objeto: Pelicula) => objeto.get_nombre() === nombre);
  }
}

const coleccion: Coleccion_Peliculas = new Coleccion_Peliculas([
  new Pelicula('Pokémon', 2007),
]);

console.log(coleccion.obtenerNumeroObjetos());
coleccion.añadirObjeto(new Pelicula('El zorro', 2000));
console.log(coleccion.obtenerNumeroObjetos());

console.log(coleccion.obtenerObjetosPorFecha(2000));
