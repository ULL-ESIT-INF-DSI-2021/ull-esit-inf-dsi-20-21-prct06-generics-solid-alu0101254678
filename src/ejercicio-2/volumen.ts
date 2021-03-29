/**
 * Clase volumen, solo tiene un
 * unico atributo, su valor
 */
export class Volumen {
  readonly valor: number;

  constructor(valor: number) {
    this.valor = valor;
  }

  /**
   * Método con el que se obtiene
   * el objeto
   * @returns el propio objeto
   */
  get_object(): this {
    return this;
  }

  /**
   * Obtiene el valor del volumen
   * @returns El valor
   */
  get_number(): number {
    return this.valor;
  }

  /**
   * Convierte de litros a mililitros
   * @returns el valor * 1000
   */
  convert(): number {
    return (this.valor * 1000);
  }
}
