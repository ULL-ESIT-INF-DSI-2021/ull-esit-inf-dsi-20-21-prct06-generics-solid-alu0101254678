/**
 * Clase tiempo, solo tiene
 * un unico atributo, su valor
 */
export class Tiempo {
  readonly valor: number;

  constructor(valor: number) {
    this.valor = valor;
  }

  /**
   * Obtiene el objeto y lo devuelve
   * @returns el propio objeto
   */
  get_object(): this {
    return this;
  }

  /**
   * Obtiene el valor del atributo
   * @returns el valor, el atributo
   */
  get_number(): number {
    return this.valor;
  }

  /**
   * Convierte de horas a minutos
   * @returns el valor * 60
   */
  convert(): number {
    return (this.valor * 60);
  }
}
