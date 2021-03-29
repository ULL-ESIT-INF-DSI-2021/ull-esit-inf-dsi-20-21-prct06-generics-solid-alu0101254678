/**
 * Clase longitud, trabaja solamente
 * con un único atributo
 */
export class Longitud {
  readonly valor: number;

  constructor(valor: number) {
    this.valor = valor;
  }

  /**
   * Obtiene el objeto de la clase
   * @returns el propio objeto
   */
  get_object(): this {
    return this;
  }

  /**
   * Retorna el valor del atributo
   * @returns el valor del atributo
   */
  get_number(): number {
    return this.valor;
  }

  /**
   * Convierte de pulgadas a centimetros
   * @returns el valor * 2.54
   */
  convert(): number {
    return (this.valor * 2.54);
  }
}
