# Desarrollo de Sistemas Informáticos
## Práctica 6 - Clases e Interfaces Genéricas, Principios SOLID.
## Yago Pérez Molanes (alu0101254678@ull.edu.es)
__*Contenidos del informe*__

__*Pasos realizados para el desarrollo de la práctica*__

* Algunas tareas a realizar previamente: 
  * Aceptar la tarea asignada a [GitHub Classroom](https://classroom.github.com/assignment-invitations/e8095b000d4eff54c6a6802a3f94df3f/status)

## __Introducción y Objetivos__
En esta práctica trataremos de resolver una serie de ejercicios relacionados con conceptos más avanzados en
TypeScript, como son las clases y las interfaces genéricas, así como los principios SOLID.

Cabe destacar que el primer ejercicio está relacionado directamente con uno de los ejercicios de la [práctica](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct05-objects-classes-interfaces-alu0101254678) anterior, más concretamente el relacionado
los *Pokémon*.

Comentaremos la resolución de los ejercicios propuestos, y además trataremos un nuevo aspecto, Instabull
y Coveralls, que son herramientas de cubrimiento de código.

## __Ejercicio 2 - Conversor de Unidades
Consideramos una herramienta que sea capaz de realizar operaciones de conversión sobre distintas magnitudes físicas,
como pueden ser:

* Velocidad
* Masa
* Longitud
* Tiempo
* Temperatura
* Fuerza
* Volumen

Hemos de considerar una interfaz genérica a la que llamamos __isConvertible__ que permite definir los atributos y
métodos necesarios para realizar dichas conversiones, por tanto las clases que la implementan deben, por lo menos,
realizar conversiones entre dos unidades distintas.

Será necesario diseñar una clase por cada magnitud considerada, cada clase se aloja en un fichero diferente, por
ejemplo, a continuación mostramos la clase que representa a la magnitud __Velocidad__:

```TypeScript
export class Velocidad {
  readonly valor: number;

  constructor(valor: number) {
    this.valor = valor;
  }

  get_object(): this {
    return this;
  }

  get_number(): number {
    return this.valor;
  }

  convert(): number {
    return (this.valor * 1.6092);
  }
}
```

En nuestro caso, consideramos un único atributo, que es __valor__, y es un numérico que representa, al valor
de la velocidad en una unidad que nosotros acordamos, en este caso se trata de millas por hora.

Tenemos métodos que devuelven el propio objeto, así como el valor del atributo, y un método que realiza la
conversión, lo llamamos __convert__, y realiza la conversión de millas por hora a kilómetros por hora.

Siguiendo con el diseño, ya que las clases son muy parecidas entre sí, nos encontramos con la interfaz 
genérica __isConvertible__, la cual mostramos a continuación:

```TypeScript
export interface isConvertible<T> {
  get_object(): T;
  get_number(): number;
  convert(): number;
}
```
Esta interfaz define los métodos propiamente dichos, sin embargo, como tratamos con varios tipos de datos,
como __velocidad__, __volumen...__, hemos de añadir __T__ como dato genérico, además seguimos este diseño:

```TypeScript
export class Magnitud<T extends Velocidad | Longitud | Tiempo | Temperatura | Fuerza | Volumen | Masa> implements isConvertible<T> {
  objeto: T;

  constructor(objeto: T) {
    this.objeto = objeto;
  }

  get_object(): T {
    return this.objeto;
  }

  get_number(): number {
    return this.objeto.get_number();
  }

  convert(): number {
    return this.objeto.convert();
  }
}
```
En un fichero que llamamos __clase-generica.ts__, escribimos una clase que aúna a todas las anteriores, es decir, que
las *extiende*, de esta forma la responsabilidad se centraliza en esta clase genérica, que sabrá como
sustituir T por el tipo de dato correspondiente, además es necesario que implemente __isConvertible__, entonces
tenemos que añadir los métodos definidos en la interfaz.

A continuación mostramos algunas pruebas realizadas sobre __clase-generica__:

```TypeScript
describe('Test que realiza pruebas sobre la clase Generica', () => {
  it('Se prueba la funcionalidad cuando T es de Velocidad', () => {
    const velocidad_1: Velocidad = new Velocidad(5);
    const magnitud_1: Magnitud<Velocidad> = new Magnitud(velocidad_1);

    expect(magnitud_1.convert()).to.be.equal(8.046);
    expect(magnitud_1.objeto).to.be.equal(velocidad_1);
    expect(magnitud_1.get_number()).to.be.equal(5);
    expect(magnitud_1.get_object()).to.be.equal(velocidad_1);
  });

  it('Se prueba la funcionalidad cuando T es de Volumen', () => {
    const volumen_1: Volumen = new Volumen(5);
    const magnitud_2: Magnitud<Volumen> = new Magnitud(volumen_1);

    expect(magnitud_2.convert()).to.be.equal(5000);
    expect(magnitud_2.objeto).to.be.equal(volumen_1);
    expect(magnitud_2.get_number()).to.be.equal(5);
    expect(magnitud_2.get_object()).to.be.equal(volumen_1);
  });
```

No olvidemos que debemos importar los ficheros adecuados para que todo funcione bien.

## __Ejercicio 3 - DSIflix__