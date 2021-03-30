/**
 * Clase que representa a una serie,
 * tiene como atributos privados el nombre
 * y la fecha
 */
export class Serie {
  private nombre: string;
  private fecha: number;

  /**
   * El constructor inicializa los atributos
   * del objeto
   * @param nombre el nombre que se recibe
   * @param fecha la fecha que se recibe
   */
  constructor(nombre: string, fecha: number) {
    this.nombre = nombre;
    this.fecha = fecha;
  }

  /**
   * Obtiene el atributo nombre
   * @returns el nombre
   */
  get_nombre(): string {
    return this.nombre;
  }

  /**
   * Obtiene el atributo fecha
   * @returns la fecha
   */
  get_fecha(): number {
    return this.fecha;
  }
}
