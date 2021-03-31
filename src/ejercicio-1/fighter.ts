/**
 * Clase abstracta Fighter, representa a un luchador, que tiene las siguientes características,
 * esta es la clase padre, de las clases DC, Dragon_Ball, Marvel, Pokemon y Star Wars
 */
export abstract class Fighter {
  /**
   * Estos son los atributos necesarios
   */
  nombre: string;
  peso: number;
  altura: number;
  tipo: string;
  ataque: number;
  defensa: number;
  velocidad: number;
  vida: number;

  /**
   * El constructor inicializa los atributos internamente
   * @param nombre un string
   * @param peso un número
   * @param altura un número
   * @param tipo un string, hay varios tipos
   * @param ataque un número
   * @param defensa un número
   * @param velocidad un número
   * @param vida un número
   */
  constructor(nombre: string, peso: number, altura: number, tipo: string, ataque: number, defensa: number, velocidad: number, vida: number) {
    this.nombre = nombre;
    this.peso = peso;
    this.altura = altura;
    this.tipo = tipo;
    this.ataque = ataque;
    this.defensa = defensa;
    this.velocidad = velocidad;
    this.vida = vida;
  }

  /**
   * Método abstracto implementado por cada clase extendida,
   * devuelve una frase característica según el universo
   * que se considere
   */
  abstract get_frase(): string;
}
