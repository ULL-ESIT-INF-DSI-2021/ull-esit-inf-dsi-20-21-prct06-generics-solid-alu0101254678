/**
 * Clase temperatura, tiene un unico
 * atributo, su valor numérico
 */
export class Temperatura {
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
   * Se obtiene el valor del
   * atributo
   * @returns "valor"
   */
  get_number(): number {
    return this.valor;
  }

  /**
   * Convierte de celsius a kelvin
   * @returns el valor + 274.15
   */
  convert(): number {
    return (this.valor + 274.15);
  }
}
