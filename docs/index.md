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
En este ejercicio vamos a diseñar el modelo de datos de una plataforma de vídeo en Streaming, a través del 
catálogo de dicha plataforma se puede acceder a películas, series y documentales.

Es necesario diseñar una interfaz genérica que llamamos __Streamable__, con la que hemos de definir
los atributos y métodos necesarios con los que debería contar, por ejemplo, una colección de series.

Sería muy conveniente construir algunos métodos que permitan realizar una búsqueda sencilla, a través 
del nombre o la fecha, sobre la colección de películas, series, o documentales.

A continuación mostramos el código de la interfaz __Streamable__:

```TypeScript
export interface Streamable<T> {
  añadirObjeto(nuevo_Objeto: T): void;
  obtenerNumeroObjetos(): number;
}

export interface SearchStreamable<T> extends Streamable<T>{
  obtenerObjetosPorNombre(nombre: string): T[];
  obtenerObjetosPorFecha(fecha: number): T[];
}
```

Hemos diseñado dos interfaces, ya que la segunda, es una __especificación__ de la primera, es decir, que la
especializa, y por lo tanto, para no complicar demasiado el diseño inicial, la separamos.

Entonces tenemos dos interfaces genéricas, por un lado __Streamable__, y por otro, __SearchStreamable__, cuya 
única función es definir los métodos de búsqueda comentados anteriormente.

A continuación, creamos una clase abstracta genérica, a la que llamamos __basicStreamableCollection__, la cual,
implementa las interfaces anteriores, sin embargo, se realiza una implementación __parcial__, ya que, en esta
jerarquía, las subclases correspondientes son las que se encargarán de estructurar los métodos de búsqueda.

```TypeScript
import {SearchStreamable} from './streamable';

export abstract class BasicStreamableCollection<T> implements SearchStreamable<T> {
  constructor(protected objetos: T[]) {};

  añadirObjeto(nuevo_Objeto: T) {
    this.objetos.push(nuevo_Objeto);
  }

  obtenerNumeroObjetos() {
    return this.objetos.length;
  }

  abstract obtenerObjetosPorFecha(fecha: number): T[];

  abstract obtenerObjetosPorNombre(nombre: string): T[];

```
Vemos como los métodos __añadirObjeto__(que añade un nuevo objeto a la colección, ya sea una serie, película...) y 
__obtenerNumeroObjeto__(que retorna el número de series, películas, documentaless...) se implementan en la clase
abstracta genérica, mientras que __obtenerObjetosPorFecha__ y __obtenerObjetosPorNombre__ solo se definen, porque ahora
damos paso a la colección de alguno de los elementos del catálogo:

```TypeScript
import {Serie} from './series';
import {BasicStreamableCollection} from './basicStreamableCollection';

export class Coleccion_Series extends BasicStreamableCollection<Serie> {
  constructor(objetos: Serie[]) {
    super(objetos);
  }

  obtenerObjetosPorFecha(fecha: number): Serie[] {
    return this.objetos.filter((objeto: Serie) => objeto.get_fecha() === fecha);
  }

  obtenerObjetosPorNombre(nombre: string): Serie[] {
    return this.objetos.filter((objeto: Serie) => objeto.get_nombre() === nombre);
  }
}
```
Tenemos tres colecciones, __coleccion-documentales__, __coleccion-peliculas__, y __coleccion-series__, el código
anterior corresponde a ésta última, en la que, como mencionábamos, se realiza la implementación de 
los métodos más especializados, que son los de búsqueda, se obtiene un vector con los objetos buscados por
fecha y otro por nombre, indicados en el parámetro que éste recibe.

Por último, en la jerarquía de la parte final tenemos las clases __documentales__, __peliculas__ y __series__,
que en realizad son la pieza clave, puesto que representan a un único elemento dentro del propio catálogo:

Por ejemplo, para la clase __series__:

```TypeScript
export class Serie {
  private nombre: string;
  private fecha: number;

  /**
   * El constructor inicializa los atributos
   * del objeto
   * @param nombre el nombre que se recibe
   * @param fecha la fecha que se recibe
   */
  constructor(nombre: string, fecha: number) {
    this.nombre = nombre;
    this.fecha = fecha;
  }

  /**
   * Obtiene el atributo nombre
   * @returns el nombre
   */
  get_nombre(): string {
    return this.nombre;
  }

  /**
   * Obtiene el atributo fecha
   * @returns la fecha
   */
  get_fecha(): number {
    return this.fecha;
  }
}

```

También aprovechamos para destacar alguno de los comentarios realizados en __typedoc__, sobre esta clase.

El diseño es relativamente sencillo, ya que solo se trabaja con dos atributos, que son __nombre__, una
cadena de caracteres, y __fecha__, un número.

Por último, mostramos algunas de las pruebas realizadas sobre, por ejemplo, __coleccion-series__:

```TypeScript
describe('Test que realiza pruebas sobre la clase Coleccion_Series', () => {
  it('Se accede a sus atributos y a sus métodos, así como a los métodos de basicStreamableCollection', () => {
    const coleccion: Coleccion_Series = new Coleccion_Series([
      new Serie('Los Simpsons', 1990),
      new Serie('La casa de papel', 2020),
      new Serie('Ataque a los titanes', 2020),
    ]);

    expect(coleccion.obtenerNumeroObjetos()).to.be.equal(3);
    expect(coleccion.obtenerNumeroObjetos()).not.to.be.equal(2);

    expect(coleccion).is.an.instanceof(Coleccion_Series);

    const serie_Gumball: Serie = new Serie('Gumball', 2015);
    coleccion.añadirObjeto(serie_Gumball);

    expect(coleccion.obtenerNumeroObjetos()).to.be.equal(4);

    expect(coleccion.obtenerObjetosPorFecha(2000)).to.have.same.members([]);
    expect(coleccion.obtenerObjetosPorNombre('El zorro')).to.have.same.members([]);
    expect(coleccion.obtenerObjetosPorNombre('Gumball')).to.have.same.members([serie_Gumball]);
  });
});

```

## Anexo: Cubrimiento de código con Instabull y Coveralls

__Instabull__ es una herramienta para desarrolladores que permite obtener informes sobre el cubrimiento de
código fuente llevado a cabo por las pruebas que hemos diseñado, por lo tanto, permite obtener una 
estadística para saber la cantidad de código por las que nuestras pruebas lo *cubren*.

Vamos a configurar nuestro proyecto para obtener un informe de cubrimiento de código cada vez que se
lleven a cabo las pruebas.

El primer paso es instalar las herramientas como dependencias de desarrollo, __nyc__ es el editor de comandos:

```bash
npm install --save-dev nyc coveralls
```

Posteriormente en el fichero __package.json__ comprobamos que se han instalado las dependencias necesarias y
añadimos el siguiente script:

```JSON
  "scripts": {
    "test": "mocha",
    "start": "tsc-watch --onSuccess \"node dist/ejercicio-3/coleccion-documentales.js\"",
    "docs": "typedoc",
    "coverage": "nyc npm test"
  },

  "devDependencies": {
    "@types/chai": "^4.2.15",
    "@types/mocha": "^8.2.2",
    "@typescript-eslint/eslint-plugin": "^4.19.0",
    "@typescript-eslint/parser": "^4.19.0",
    "chai": "^4.3.4",
    "coveralls": "^3.1.0",
    "eslint": "^7.23.0",
    "eslint-config-google": "^0.14.0",
    "mocha": "^8.3.2",
    "nyc": "^15.1.0",
    "ts-node": "^9.1.1",
    "tsc-watch": "^4.2.9",
    "typedoc": "^0.20.34"
  }
```
Ahora ya estamos en disposición de ejecutar las pruebas, sin embargo, veremos que con el comando
__coverage__ será diferente:
![Imagen_nyc_instabull](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct06-generics-solid-alu0101254678/blob/master/img_pr_6/nyc_instabull.png?raw=true)

Si bien es cierto que hemo ejecutado las pruebas con __mocha__ y __chai__, la diferencia se encuentra en que hemos
antepuesto __nyc__, lo que significa que vamos a generar un informe a partir de las pruebas descritas, por otro lado,
la captura indica varios aspectos que podemos comeentar:

* Se muestra en una tabla los ficheros analizados, así como en porcentajes, el número de líneas, funciones, y ramas.

Como hemos cubrido un 100 por cien de nuestro código, todo se encuentra en color verde, pero si nos faltara algo, 
se mostraría en la tabla, además la captura corresponde a la ejecución de las pruebas cuando únicamente se 
estaba trabajando con el ejericio 2.

Si queremos que nuestros informes se *enganchen*, con __coveralls__, la herramienta de cubrimiento de código, hemos de
iniciar sesión en Coveralls, con nuestra cuenta de GitHub, habilitar el seguimiento de nuestro repositorio, añadir el fichero
__.coveralls.yml__, y pegar el repo_token una vez que se ha habilitado el seguimiento, que será cada vez que empujemos
los cambios al repositorio.

De esta forma los informes de __instabull__ se suben a __coveralls__, ahora para que funcione nuevamente modificamos el script 
__coveralls__ del __package.json__:

```JSON
  "scripts": {
    "test": "mocha",
    "start": "tsc-watch --onSuccess \"node dist/ejercicio-3/coleccion-documentales.js\"",
    "docs": "typedoc",
    "coverage": "nyc npm test && nyc report --reporter=text-lcov | coveralls"
  },
```

Con la información de cubrimiento generamos un informe en un formato que se llama __lcof__, empleando el reporter __text-lcof__, 
y se lo enviamos a __coveralls__.

![Imagen Coveralls](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct06-generics-solid-alu0101254678/blob/master/img_pr_6/coveralls.png?raw=true)

La captura anterior muestra la interfaz de Coveralls en la web, en la que se puede observar diversa información de cubrimiento
de código, como el total de ficheros o las *builds* realizadas hasta el momento, se actualizará cada vez que empujemos cambios
al repositorio.

## __Conclusiones__

## __Bibliografía__





