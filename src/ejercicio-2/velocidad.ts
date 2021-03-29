/**
 * Clase velocidad, solo tiene un
 * atributo, su valor
 */
export class Velocidad {
  readonly valor: number;

  constructor(valor: number) {
    this.valor = valor;
  }
  /**
   * Método con el que se obtiene
   * el propio objeto
   * @returns el propio objeto
   */
  get_object(): this {
    return this;
  }

  /**
   * Obtiene el valor de la velocidad
   * @returns el valor
   */
  get_number(): number {
    return this.valor;
  }

  /**
   * Convierte de millas por hora a
   * kilometros por hora
   * @returns el valor * 1.6092
   */
  convert(): number {
    return (this.valor * 1.6092);
  }
}

