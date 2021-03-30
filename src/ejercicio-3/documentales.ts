/**
 * Clase que representa a un documental
 */
export class Documental {
  /**
   * Dispone de dos atributos,uno
   * es un string y el otro es un
   * número, el nombre y la fecha
   */
  private nombre: string;
  private fecha: number;

  constructor(nombre: string, fecha: number) {
    this.nombre = nombre;
    this.fecha = fecha;
  }

  /**
   * Tenemos un método para obtener
   * el nombre porque éste es privado
   * @returns el nombre, un string
   */
  get_nombre(): string {
    return this.nombre;
  }

  /**
   * Tenemos un método para obtener
   * la fecha porque ésta es privada
   * @returns la fecha, un número
   */
  get_fecha(): number {
    return this.fecha;
  }
}
