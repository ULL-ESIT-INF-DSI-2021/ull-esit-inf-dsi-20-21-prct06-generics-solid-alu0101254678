/**
 * Clase masa, tiene un único
 * atributo, su valor
 */
export class Masa {
  readonly valor: number;

  constructor(valor: number) {
    this.valor = valor;
  }
  /**
   * Método que obtiene el objeto en sí
   * @returns el propio objeto
   */
  get_object(): this {
    return this;
  }

  /**
   * Obtiene el valor del atributo
   * @returns el valor
   */
  get_number(): number {
    return this.valor;
  }
  /**
   * Convierte de kilogramos a gramos
   * @returns el valor * 1000
   */
  convert(): number {
    return (this.valor * 1000);
  }
}
