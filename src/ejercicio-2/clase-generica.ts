/**
 * Se importan las clases, y la propia interfaz
 */
import {Fuerza} from './fuerza';
import {isConvertible} from './isConvertible';
import {Longitud} from './longitud';
import {Masa} from './masa';
import {Temperatura} from './temperatura';
import {Tiempo} from './tiempo';
import {Velocidad} from './velocidad';
import {Volumen} from './volumen';

/**
 * Esta es la clase genérica, de antemano no sabemos cual es la clase
 * que extenderá, por eso ponemos todas, tiene que implementar los métodos de
 * la interfaz isConvertible, en el constructor se crea un objeto de tipo T,
 * y se iguala
 */
export class Magnitud<T extends Velocidad | Longitud | Tiempo | Temperatura | Fuerza | Volumen | Masa> implements isConvertible<T> {
  objeto: T;

  /**
   * Es un objeto de tipo T, que puede
   * ser velocidad, masa...
   * @param objeto
   */
  constructor(objeto: T) {
    this.objeto = objeto;
  }

  /**
   * Este método accede al objeto al que esta extendiendo
   * @returns Devuelve el objeto
   */
  get_object(): T {
    return this.objeto;
  }

  /**
   * Este método accede al método de la clase instanciada
   * por ejemplo, al get_number, de masa, velocidad...
   * @returns el valor numérico del atríbuto valor
   */
  get_number(): number {
    return this.objeto.get_number();
  }

  /**
   * Método que accede al convert de la clase
   * instanciada
   * @returns el resultado de la operación
   * convert() al objeto de tipo T
   */
  convert(): number {
    return this.objeto.convert();
  }
}

const velocidad_1: Velocidad = new Velocidad(5);
const longitud_1: Longitud = new Longitud(5);
const tiempo_1: Tiempo = new Tiempo(5);
const temperatura_1: Temperatura = new Temperatura(5);
const fuerza_1: Fuerza = new Fuerza(5);
const volumen_1: Volumen = new Volumen(5);
const masa_1: Masa = new Masa(5);

const magnitud_1: Magnitud<Velocidad> = new Magnitud(velocidad_1);
console.log(magnitud_1.convert());

const magnitud_2: Magnitud<Longitud> = new Magnitud(longitud_1);
console.log(magnitud_2.convert());

const magnitud_3: Magnitud<Tiempo> = new Magnitud(tiempo_1);
console.log(magnitud_3.convert());

const magnitud_4: Magnitud<Temperatura> = new Magnitud(temperatura_1);
console.log(magnitud_4.convert());

const magnitud_5: Magnitud<Fuerza> = new Magnitud(fuerza_1);
console.log(magnitud_5.convert());

const magnitud_6: Magnitud<Volumen> = new Magnitud(volumen_1);
console.log(magnitud_6.convert());

const magnitud_7: Magnitud<Masa> = new Magnitud(masa_1);
console.log(magnitud_7.convert());
