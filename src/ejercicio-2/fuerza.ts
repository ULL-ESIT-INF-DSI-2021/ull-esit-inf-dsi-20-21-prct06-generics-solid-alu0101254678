/**
 * Clase fuerza, tiene un unico
 * atributo, su valor numérico
 */
export class Fuerza {
  readonly valor: number;

  constructor(valor: number) {
    this.valor = valor;
  }

  /**
   * Método que obtiene el
   * objeto
   * @returns el objeto
   */
  get_object(): this {
    return this;
  }

  /**
   * Método que obtiene el valor
   * del atributo
   * @returns "number"
   */
  get_number(): number {
    return this.valor;
  }

  /**
   * Convierte de newtons a kilopondios
   * @returns el valor * 0.101972
   */
  convert(): number {
    return (this.valor * 0.101972);
  }
}
