/**
 * Clase que representa a una película, tiene
 * como atributos el nombre y la fecha
 */
export class Pelicula {
  /**
   * Los atributos los hacemos privados
   */
  private nombre: string;
  private fecha: number;

  constructor(nombre: string, fecha: number) {
    this.nombre = nombre;
    this.fecha = fecha;
  }

  /**
   * Obtiene el atributo 'nombre'
   * @returns el nombre, valor de caracteres
   */
  get_nombre(): string {
    return this.nombre;
  }
  /**
   * Obtiene el atributo 'fecha'
   * @returns la fecha, valor numérico
   */
  get_fecha(): number {
    return this.fecha;
  }
}
